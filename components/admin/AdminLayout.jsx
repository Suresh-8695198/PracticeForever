import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '../../context/ThemeContext';
import {
    LayoutDashboard,
    FileText,
    BookOpen,
    HelpCircle,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    Search,
    Sun,
    Moon
} from 'lucide-react';

export default function AdminLayout({ children, title }) {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [admin, setAdmin] = useState(null);
    const router = useRouter();
    const { theme, toggleTheme, isDark } = useTheme();

    useEffect(() => {
        const user = localStorage.getItem('adminUser');
        const token = localStorage.getItem('adminToken');
        if (!user || !token) {
            router.push('/admin/login');
        } else {
            setAdmin(JSON.parse(user));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        router.push('/admin/login');
    };

    const menuItems = [
        { title: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { title: 'Current Affairs', path: '/admin/current-affairs', icon: Bell },
        { title: 'Blog Posts', path: '/admin/blog-posts', icon: FileText },
        { title: 'Aptitude Questions', path: '/admin/questions', icon: HelpCircle },
        { title: 'Tutorials', path: '/admin/tutorials', icon: BookOpen },
        { title: 'Media Library', path: '/admin/media', icon: Settings },
        { title: 'Users', path: '/admin/users', icon: Users },
    ];

    if (!admin) return null;

    const navBg = isDark ? 'bg-[#121212] border-zinc-800' : 'bg-white border-gray-200';
    const mainBg = isDark ? 'bg-black' : 'bg-[#fcfcfc]';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textMuted = isDark ? 'text-zinc-500' : 'text-gray-400';

    return (
        <div className={`min-h-screen flex overflow-hidden ${isDark ? 'text-white' : 'text-gray-900'} font-sans`}>
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-[100] w-64 border-r transition-all duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 ${navBg}`}>
                <div className="h-full flex flex-col">
                    <div className="p-6 flex items-center gap-3">
                        <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center shadow-sm">
                            <span className="text-white font-bold text-sm italic">CP</span>
                        </div>
                        <div>
                            <span className={`block font-bold text-base leading-tight ${textMain}`}>Career Platform</span>
                            <span className="block text-[10px] font-bold text-amber-500 uppercase tracking-widest -mt-0.5">Admin Panel</span>
                        </div>
                    </div>

                    <nav className="flex-1 px-4 py-4 space-y-1">
                        {menuItems.map((item) => {
                            const isActive = router.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${isActive
                                        ? 'bg-amber-500 text-white shadow-sm'
                                        : isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                >
                                    <item.icon size={18} />
                                    {item.title}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className={`p-4 border-t ${isDark ? 'border-zinc-800' : 'border-gray-100'}`}>
                        <div className={`rounded-xl p-3 flex items-center justify-between border ${isDark ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-gray-50 border-gray-100'}`}>
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${isDark ? 'bg-zinc-800 text-amber-500' : 'bg-white text-amber-500 border border-gray-200'}`}>
                                    {admin.name.charAt(0)}
                                </div>
                                <div className="truncate">
                                    <span className={`block text-xs font-bold truncate ${textMain}`}>{admin.name}</span>
                                    <span className="block text-[10px] font-medium text-zinc-500 capitalize">{admin.role}</span>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="p-1.5 text-zinc-500 hover:text-red-500 transition-colors">
                                <LogOut size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 flex flex-col min-w-0 h-screen relative ${mainBg}`}>
                {/* Header */}
                <header className={`h-16 border-b flex items-center justify-between px-6 sticky top-0 z-[90] ${navBg}`}>
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                            {isSidebarOpen ? <X size={20} className={textMuted} /> : <Menu size={20} className={textMuted} />}
                        </button>
                        <h2 className={`text-sm font-bold capitalize ${textMuted}`}>{title}</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className={`hidden md:flex items-center gap-2 border rounded-full px-4 py-1.5 min-w-[240px] focus-within:ring-2 focus-within:ring-amber-500/20 transition-all ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-100 border-gray-200'}`}>
                            <Search size={14} className="text-zinc-500" />
                            <input type="text" placeholder="Search..." className="bg-transparent text-xs w-full outline-none placeholder:text-zinc-500 font-medium" />
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg transition-all ${isDark ? 'text-amber-400 hover:bg-zinc-800' : 'text-gray-500 hover:bg-gray-100'}`}
                                title="Toggle Theme"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <div className="relative cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all">
                                <Bell size={18} className="text-zinc-500" />
                                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                    {children}
                </main>
            </div>

            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: ${isDark ? '#27272a' : '#e4e4e7'};
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: ${isDark ? '#3f3f46' : '#d1d1d6'};
                }
            `}</style>
        </div>
    );
}
