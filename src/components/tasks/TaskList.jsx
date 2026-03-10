import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import TaskCard from './TaskCard';
import { useProgress } from '../../context/ProgressContext';

const TaskList = ({ topic, sectionId }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const { getTopicProgress } = useProgress();

    const progress = getTopicProgress(topic.id);
    const percentage = progress?.percentage || 0;
    const completedCount = progress?.completedCount || 0;
    const totalTasks = progress?.totalTasks || topic.tasks.length;

    const difficultyColors = {
        easy: 'from-accent-green to-green-600',
        medium: 'from-accent-yellow to-yellow-600',
        hard: 'from-red-500 to-red-700'
    };

    return (
        <div className="card">
            {/* Topic Header */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between group"
            >
                <div className="flex items-center gap-4 flex-1">
                    {/* Expand Icon */}
                    <div className="flex-shrink-0">
                        {isExpanded ? (
                            <ChevronDown className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                        ) : (
                            <ChevronRight className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                        )}
                    </div>

                    {/* Topic Info */}
                    <div className="flex-1 text-left">
                        <h3 className="text-lg font-semibold text-white mb-1">{topic.title}</h3>
                        <p className="text-sm text-gray-400">{topic.description}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="hidden sm:block w-32 flex-shrink-0">
                        <div className="flex items-center justify-end gap-2 mb-1">
                            <span className="text-sm font-medium text-gray-400">
                                {completedCount} / {totalTasks}
                            </span>
                        </div>
                        <div className="progress-bar">
                            <div
                                className={`h-full bg-gradient-to-r ${difficultyColors[topic.difficulty] || 'from-accent-orange to-accent-purple'} transition-all duration-500`}
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                </div>
            </button>

            {/* Mobile Progress */}
            <div className="sm:hidden mt-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-400">
                        Progress: {completedCount} / {totalTasks}
                    </span>
                    <span className="text-sm font-bold text-accent-orange">{percentage}%</span>
                </div>
                <div className="progress-bar">
                    <div
                        className={`h-full bg-gradient-to-r ${difficultyColors[topic.difficulty] || 'from-accent-orange to-accent-purple'} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>

            {/* Tasks */}
            {isExpanded && (
                <div className="mt-6 space-y-2 animate-slide-up">
                    {/* Header Row (Desktop) */}
                    <div className="hidden lg:grid grid-cols-[40px_1fr_60px_100px_60px_60px_80px] gap-4 items-center px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-dark-border mb-2">
                        <div className="text-center">Status</div>
                        <div>Problem</div>
                        <div className="text-center">Video</div>
                        <div className="text-center">Practice</div>
                        <div className="text-center">Note</div>
                        <div className="text-center">Revise</div>
                        <div className="text-right">Difficulty</div>
                    </div>

                    {/* Tasks */}
                    {topic.tasks.map((task) => (
                        <TaskCard key={task.id} task={task} topicId={topic.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;
