import { useAuth } from '../context/AuthContext';
import Leaderboard from '../components/dashboard/Leaderboard';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user } = useAuth();

    const fadeUp = { 
        hidden: { opacity: 0, y: 15 }, 
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } } 
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Clean SaaS Dashboard Header */}
                <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mb-8"
                >
                    <h1 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight">
                        Dashboard
                    </h1>
                    <p className="text-base text-slate-500">
                        Welcome back, {user?.name.split(' ')[0]}. Here is where you stand.
                    </p>
                </motion.div>

                {/* Main Content */}
                <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="relative"
                >
                    {/* The Leaderboard itself utilizes highly professional minimal styling */}
                    <Leaderboard />
                </motion.div>

            </div>
        </div>
    );
};

export default Dashboard;
