import { createContext, useContext, useState, useEffect } from 'react';
import { careerPaths } from '../data/careerData';
import api from '../utils/api';
import { useAuth } from './AuthContext';

const ProgressContext = createContext();

export const useProgress = () => {
    const context = useContext(ProgressContext);
    if (!context) {
        throw new Error('useProgress must be used within ProgressProvider');
    }
    return context;
};

export const ProgressProvider = ({ children }) => {
    const { user } = useAuth();
    const [progress, setProgress] = useState({
        selectedCareer: null,
        completedTasks: [],
        taskNotes: {},
        markedForRevision: [],
        lastActivityDate: null
    });

    // Load initial state from backend when user changes (logs in)
    useEffect(() => {
        const fetchBackendState = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                // Clear progress if no user
                setProgress(prev => ({
                    ...prev,
                    completedTasks: [],
                    markedForRevision: [],
                    taskNotes: {}
                }));
                return;
            }

            try {
                const { data } = await api.get('/users/progress');
                if (data) {
                    setProgress(prev => ({
                        ...prev,
                        completedTasks: data.completedTasks || [],
                        markedForRevision: data.markedForRevision || [],
                        taskNotes: data.taskNotes || {}
                    }));
                }
            } catch (e) {
                console.error("Failed to sync with backend", e);
            }
        };
        fetchBackendState();
    }, [user]);

    // Save selectedCareer to local storage still useful for UX
    useEffect(() => {
        const stored = localStorage.getItem('selectedCareer');
        if (stored) {
            setProgress(prev => ({ ...prev, selectedCareer: stored }));
        }
    }, []);

    const selectCareer = (careerId) => {
        setProgress(prev => ({
            ...prev,
            selectedCareer: careerId
        }));
        localStorage.setItem('selectedCareer', careerId);
    };

    const findTask = (taskId) => {
        for (const c of careerPaths) {
            for (const s of c.sections) {
                for (const t of s.topics) {
                    const task = t.tasks.find(tk => tk.id === taskId);
                    if (task) return task;
                }
            }
        }
        return null;
    };

    const toggleTaskComplete = (taskId) => {
        const task = findTask(taskId);

        setProgress(prev => {
            const isCompleted = prev.completedTasks.includes(taskId);
            const newCompleted = isCompleted
                ? prev.completedTasks.filter(id => id !== taskId)
                : [...prev.completedTasks, taskId];

            return {
                ...prev,
                completedTasks: newCompleted,
                lastActivityDate: new Date().toISOString()
            };
        });

        // Sync to Backend
        api.post('/users/sync', {
            taskId,
            action: 'toggleComplete',
            difficulty: task ? task.difficulty : 'easy'
        }).catch(err => console.error("Sync failed", err));
    };

    const updateTaskNote = (taskId, note) => {
        setProgress(prev => ({
            ...prev,
            taskNotes: {
                ...prev.taskNotes,
                [taskId]: note
            }
        }));

        api.post('/users/sync', {
            taskId,
            action: 'updateNote',
            value: note
        }).catch(err => console.error("Sync failed", err));
    };

    const toggleRevision = (taskId) => {
        setProgress(prev => {
            const isMarked = prev.markedForRevision.includes(taskId);
            const newMarked = isMarked
                ? prev.markedForRevision.filter(id => id !== taskId)
                : [...prev.markedForRevision, taskId];

            return {
                ...prev,
                markedForRevision: newMarked
            };
        });

        api.post('/users/sync', {
            taskId,
            action: 'toggleRevision'
        }).catch(err => console.error("Sync failed", err));
    };

    const getCareerProgress = () => {
        if (!progress.selectedCareer) return null;

        const career = careerPaths.find(c => c.id === progress.selectedCareer);
        if (!career) return null;

        let totalTasks = 0;
        let completedCount = 0;
        let easyCompleted = 0;
        let mediumCompleted = 0;
        let hardCompleted = 0;

        career.sections.forEach(section => {
            section.topics.forEach(topic => {
                topic.tasks.forEach(task => {
                    totalTasks++;
                    if (progress.completedTasks.includes(task.id)) {
                        completedCount++;
                        if (task.difficulty === 'easy') easyCompleted++;
                        if (task.difficulty === 'medium') mediumCompleted++;
                        if (task.difficulty === 'hard') hardCompleted++;
                    }
                });
            });
        });

        const percentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

        return {
            totalTasks,
            completedCount,
            percentage,
            easyCompleted,
            mediumCompleted,
            hardCompleted,
            career
        };
    };

    const getTopicProgress = (topicId) => {
        const career = careerPaths.find(c => c.id === progress.selectedCareer);
        if (!career) return null;

        let topic = null;
        for (const section of career.sections) {
            const found = section.topics.find(t => t.id === topicId);
            if (found) {
                topic = found;
                break;
            }
        }

        if (!topic) return null;

        const totalTasks = topic.tasks.length;
        const completedCount = topic.tasks.filter(task =>
            progress.completedTasks.includes(task.id)
        ).length;

        return {
            totalTasks,
            completedCount,
            percentage: totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0
        };
    };

    const value = {
        progress,
        selectCareer,
        toggleTaskComplete,
        updateTaskNote,
        toggleRevision,
        getCareerProgress,
        getTopicProgress,
        isTaskCompleted: (taskId) => progress.completedTasks.includes(taskId),
        isMarkedForRevision: (taskId) => progress.markedForRevision.includes(taskId),
        getTaskNote: (taskId) => progress.taskNotes[taskId] || ''
    };

    return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
};
