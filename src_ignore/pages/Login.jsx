import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <motion.div
                className="max-w-md w-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Logo */}
                <div className="text-center mb-8">
                    <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 bg-primary-yellow rounded-2xl mb-4"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="text-3xl">🚀</span>
                    </motion.div>
                    <h1 className="text-3xl font-bold text-dark-text mb-2">
                        Welcome <span className="text-primary-yellow">Back!</span>
                    </h1>
                    <p className="text-dark-text-secondary">
                        Continue your learning journey
                    </p>
                </div>

                {/* Login Form */}
                <motion.div
                    className="card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <motion.div
                                className="p-4 bg-accent-error/10 border border-accent-error/30 rounded-lg flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <AlertCircle className="text-accent-error flex-shrink-0 mt-0.5" size={20} />
                                <p className="text-sm text-accent-error">{error}</p>
                            </motion.div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-dark-text mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-text-secondary" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input pl-11"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-dark-text mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-text-secondary" size={20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input pl-11"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {loading ? (
                                <div className="spinner" />
                            ) : (
                                <>
                                    <LogIn size={20} />
                                    Sign In
                                </>
                            )}
                        </motion.button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-dark-text-secondary text-sm">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-primary-yellow hover:text-primary-yellow-light font-medium">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </motion.div>

                {/* Demo Credentials */}

            </motion.div>
        </div>
    );
};

export default Login;
