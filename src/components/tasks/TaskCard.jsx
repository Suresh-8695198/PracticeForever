import { useState } from 'react';
import {
    CheckCircle2,
    Circle,
    Youtube,
    FileText,
    Code,
    Star,
    ChevronRight,
    ExternalLink,
    Code2
} from 'lucide-react';
import { useProgress } from '../../context/ProgressContext';
import { useStreak } from '../../context/StreakContext';

const TaskCard = ({ task, topicId }) => {
    const {
        toggleTaskComplete,
        toggleRevision,
        updateTaskNote,
        isTaskCompleted,
        isMarkedForRevision,
        getTaskNote
    } = useProgress();

    const { checkAndUpdateStreak } = useStreak();
    const [showDetails, setShowDetails] = useState(false);
    const [noteText, setNoteText] = useState(getTaskNote(task.id));

    const completed = isTaskCompleted(task.id);
    const starred = isMarkedForRevision(task.id);

    const handleToggleComplete = () => {
        toggleTaskComplete(task.id);
        if (!completed) {
            checkAndUpdateStreak();
        }
    };

    const handleSaveNote = () => {
        updateTaskNote(task.id, noteText);
    };

    const difficultyColors = {
        easy: 'badge-easy',
        medium: 'badge-medium',
        hard: 'badge-hard'
    };

    return (
        <div className={`card ${completed ? 'border-accent-green/30' : ''} hover:border-accent-orange/30 p-0 overflow-hidden`}>
            {/* Desktop Row Layout */}
            <div className="hidden lg:grid grid-cols-[40px_1fr_60px_100px_60px_60px_80px] gap-4 items-center px-4 py-3 hover:bg-white/5 transition-colors group">
                {/* 1. Status */}
                <div className="flex justify-center">
                    <button onClick={handleToggleComplete} className="transition-transform hover:scale-110">
                        {completed ? (
                            <CheckCircle2 className="text-primary-yellow" size={20} />
                        ) : (
                            <Circle className="text-gray-600 hover:text-primary-yellow" size={20} />
                        )}
                    </button>
                </div>

                {/* 2. Problem */}
                <div className="min-w-0">
                    <h4 className={`text-sm font-medium truncate ${completed ? 'text-primary-yellow' : 'text-white'}`}>
                        {task.title}
                    </h4>
                </div>

                {/* 3. Video */}
                <div className="flex justify-center">
                    {task.youtubeLink ? (
                        <a
                            href={task.youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:text-red-300 transition-colors"
                        >
                            <Youtube size={20} />
                        </a>
                    ) : (
                        <span className="text-gray-700">-</span>
                    )}
                </div>

                {/* 4. Practice (Replacing Read & Code) */}
                <div className="flex justify-center gap-2">
                    {task.practiceProblems && task.practiceProblems.length > 0 ? (
                        task.practiceProblems.map((problem, idx) => {
                            const isLeetDown = problem.platform.toLowerCase().includes('leet');
                            const isGFG = problem.platform.toLowerCase().includes('geek');

                            return (
                                <a
                                    key={idx}
                                    href={problem.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors hover:scale-110 transform ${isLeetDown ? 'text-orange-500 hover:text-orange-400' :
                                        isGFG ? 'text-green-500 hover:text-green-400' :
                                            'text-blue-500 hover:text-blue-400'
                                        }`}
                                    title={problem.platform}
                                >
                                    {isLeetDown ? <Code size={18} /> :
                                        isGFG ? <Code2 size={18} /> :
                                            <ExternalLink size={18} />}
                                </a>
                            );
                        })
                    ) : (
                        <span className="text-gray-700">-</span>
                    )}
                </div>

                {/* 5. Note */}
                <div className="flex justify-center">
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className={`transition-colors ${noteText ? 'text-accent-blue' : 'text-gray-500 hover:text-white'}`}
                    >
                        <FileText size={18} />
                    </button>
                </div>

                {/* 6. Revise */}
                <div className="flex justify-center">
                    <button
                        onClick={() => toggleRevision(task.id)}
                        className="transition-transform hover:scale-110"
                    >
                        <Star
                            size={18}
                            className={`${starred ? 'text-primary-yellow' : 'text-gray-600 hover:text-gray-400'}`}
                        />
                    </button>
                </div>

                {/* 7. Difficulty */}
                <div className="flex justify-end">
                    <span className={`badge ${difficultyColors[task.difficulty]} text-xs py-0.5 px-2`}>
                        {task.difficulty}
                    </span>
                </div>
            </div>

            {/* Mobile Layout (Card view) */}
            <div className={`lg:hidden p-4`}>
                <div className="flex items-start gap-4">
                    <button onClick={handleToggleComplete} className="mt-1 flex-shrink-0">
                        {completed ? (
                            <CheckCircle2 className="text-accent-green" size={24} />
                        ) : (
                            <Circle className="text-gray-600 hover:text-accent-orange" size={24} />
                        )}
                    </button>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2 mb-2">
                            <h4 className={`font-medium ${completed ? 'text-gray-500 line-through' : 'text-white'}`}>
                                {task.title}
                            </h4>
                            <span className={`badge ${difficultyColors[task.difficulty]} flex-shrink-0`}>
                                {task.difficulty}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {task.youtubeLink && (
                                <a href={task.youtubeLink} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-red-500/10 text-red-400 rounded hover:bg-red-500/20">
                                    <Youtube size={16} />
                                </a>
                            )}
                            <button onClick={() => setShowDetails(!showDetails)} className="p-1.5 bg-dark-700 text-gray-300 rounded hover:bg-dark-600">
                                <FileText size={16} />
                            </button>
                            <button onClick={() => toggleRevision(task.id)} className="p-1.5 bg-dark-700 text-gray-300 rounded hover:bg-dark-600">
                                <Star size={16} className={starred ? 'fill-accent-yellow text-accent-yellow' : ''} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Details Section */}
            {showDetails && (
                <div className="p-4 bg-dark-800/50 border-t border-dark-border space-y-4 animate-slide-down">
                    {/* Explanation */}
                    {task.explanation && (
                        <div>
                            <h5 className="text-sm font-semibold text-accent-orange mb-2">📖 Explanation</h5>
                            <p className="text-sm text-gray-300">{task.explanation}</p>
                        </div>
                    )}

                    {/* Practice Problems Links */}
                    {task.practiceProblems && task.practiceProblems.length > 0 && (
                        <div>
                            <h5 className="text-sm font-semibold text-accent-green mb-2">💻 Practice Problems</h5>
                            <div className="space-y-2">
                                {task.practiceProblems.map((problem, idx) => (
                                    <a
                                        key={idx}
                                        href={problem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-2 bg-dark-900 rounded hover:bg-dark-700 transition-colors group"
                                    >
                                        <span className="text-sm text-gray-300">{problem.platform}</span>
                                        <ExternalLink size={14} className="text-gray-500 group-hover:text-accent-orange" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Notes Section inside Details */}
                    <div>
                        <h5 className="text-sm font-semibold text-accent-blue mb-2">📝 Personal Notes</h5>
                        <textarea
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            onBlur={handleSaveNote}
                            placeholder="Add your notes here..."
                            className="w-full px-3 py-2 bg-dark-900 border border-dark-600 rounded-lg text-sm text-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-orange resize-none"
                            rows={3}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
