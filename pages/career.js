import Head from 'next/head';
import { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { careerPaths } from '../data/careerData';
import TaskList from '../components/tasks/TaskList';
import ProgressRing from '../components/common/ProgressRing';
import { Target, ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const CareerPage = () => {
    const { progress, selectCareer, getCareerProgress } = useProgress();
    const [expandedSections, setExpandedSections] = useState({});

    const selectedCareer = careerPaths.find(c => c.id === progress.selectedCareer);
    const careerProgress = getCareerProgress();

    const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
    const stagger = { show: { transition: { staggerChildren: 0.1 } } };

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    // If no career selected, show selection screen
    if (!selectedCareer) {
        return (
            <div className="min-h-screen bg-dark-950 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Choose Your Career Path 🎯
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Select a career path to start your learning journey
                        </p>
                    </div>

                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={stagger}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {careerPaths.map((career) => (
                            <motion.button
                                key={career.id}
                                variants={fadeUp}
                                onClick={() => selectCareer(career.id)}
                                className="card-interactive text-left group"
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${career.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                                    {career.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {career.title}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {career.description}
                                </p>
                                <div className="flex items-center text-accent-orange font-medium">
                                    Start Learning
                                    <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark-950 pt-28 pb-8">
            <Head>
                <title>Career Paths & Roadmaps | PracticeForever</title>
                <meta name="description" content="Explore curated career paths and roadmap for software engineering, government services, and more. Track your progress and master new skills." />
            </Head>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => selectCareer(null)}
                        className="flex items-center text-gray-400 hover:text-white mb-6 transition-colors group"
                    >
                        <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Career Paths
                    </button>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                                {selectedCareer.title}
                            </h1>
                            <p className="text-gray-400 max-w-2xl">{selectedCareer.description}</p>
                        </div>
                    </div>

                    {/* Progress Overview */}
                    {careerProgress && (
                        <motion.div 
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="card mb-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="flex items-center justify-center">
                                    <ProgressRing
                                        percentage={careerProgress.percentage}
                                        size={120}
                                        strokeWidth={10}
                                    />
                                </div>

                                <div className="flex flex-col justify-center text-center sm:text-left">
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                        {careerProgress.completedCount}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        of {careerProgress.totalTasks} tasks completed
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-dark-bg/50">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Easy</span>
                                        <span className="text-sm font-bold text-accent-green">
                                            {careerProgress.easyCompleted}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-dark-bg/50">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Medium</span>
                                        <span className="text-sm font-bold text-accent-yellow">
                                            {careerProgress.mediumCompleted}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded-lg bg-gray-100 dark:bg-dark-bg/50">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-400">Hard</span>
                                        <span className="text-sm font-bold text-red-500 dark:text-red-400">
                                            {careerProgress.hardCompleted}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div className="text-center p-4 bg-gradient-to-br from-accent-orange/10 to-accent-purple/10 rounded-xl border border-accent-orange/20 w-full">
                                        <div className="text-2xl font-bold gradient-text mb-1">
                                            {careerProgress.percentage}%
                                        </div>
                                        <div className="text-sm text-gray-400">Complete</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* Sections and Topics */}
                <motion.div 
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="space-y-8"
                >
                    {selectedCareer.sections.map((section) => (
                        <motion.div 
                            key={section.id} 
                            variants={fadeUp}
                            className="border-l-2 border-dark-border pl-4 sm:pl-6 ml-2 sm:ml-4"
                        >
                            {/* Section Header - Cleaner Look */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="flex items-center gap-3 mb-4 group w-full text-left"
                            >
                                <div className={`p-1 rounded-lg transition-colors ${expandedSections[section.id] ? 'bg-primary-yellow text-black' : 'bg-dark-card text-gray-400 group-hover:text-white'}`}>
                                    {expandedSections[section.id] ? (
                                        <ChevronDown size={20} />
                                    ) : (
                                        <ChevronRight size={20} />
                                    )}
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary-yellow transition-colors">
                                    {section.title}
                                </h2>
                            </button>

                            {/* Topics - Removed extra card nesting */}
                            {(expandedSections[section.id] !== false) && (
                                <div className="space-y-3 animate-slide-up">
                                    {section.topics.map((topic) => (
                                        <div key={topic.id} className="transform transition-all">
                                            <TaskList
                                                topic={topic}
                                                sectionId={section.id}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {selectedCareer.sections.length === 0 && (
                    <div className="card text-center py-12 border-dashed border-2 border-dark-border bg-transparent">
                        <Target className="mx-auto mb-4 text-gray-600" size={48} />
                        <h3 className="text-lg font-semibold text-white mb-2">
                            Curating Preparation Map
                        </h3>
                        <p className="text-gray-400">
                            Our team is compiling the optimal learning trajectory for this specialization.
                        </p>
                    </div>
                )}

                {/* AdSense SEO Long Form Content */}
                <div className="mt-16 p-8 md:p-10 bg-[#121212] border border-gray-800 rounded-3xl shadow-lg mb-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Navigating Career Paths in 2026: A Structured Roadmap</h2>
                    <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
                        <p>
                            Transitioning from a student to a working professional can be overwhelming. The job market in India spans highly specialized corporate IT roles, core engineering positions, and rigorously contested government services. To navigate this complexity, an aspirant must follow a definitive, skill-based roadmap rather than preparing haphazardly. Our career paths section is designed to bridge the gap between academic theory and practical, testable skills.
                        </p>
                        <p>
                            If you are targeting premier software engineering roles, your roadmap must strictly sequentially cover Data Structures, Algorithms (DSA), System Design, and specific frameworks required by product-based companies. Without structured mastery, it is easy to get lost in the endless ocean of coding tutorials. By tracking your progress through our segmented task lists—from easy arrays to complex dynamic programming problems—you ensure that your preparation is measurable against industry standards.
                        </p>
                        <p>
                            Similarly, for those preparing for public sector examinations (SSC, UPSC, Banking), consistency is heavily rewarded. Government exam roadmaps require equal allocation of time for Quantitative Aptitude, Logical Reasoning, and General Awareness. Do not bounce randomly between subjects; follow the curated trajectory below to build domain knowledge section by section. By quantifying your completion percentage across difficulty levels, you can accurately predict your readiness before the commencement of the actual recruitment cycle.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CareerPage;
