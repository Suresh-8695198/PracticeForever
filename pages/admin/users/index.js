import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import AdminLayout from '../../../components/admin/AdminLayout';
import api from '../../../utils/api';
import { useTheme } from '../../../context/ThemeContext';
import { 
  Mail, 
  Ban, 
  CheckCircle,
  Clock,
  User,
  Inbox,
  ShieldAlert,
  ShieldCheck
} from 'lucide-react';

export default function UserManagement() {
    const { isDark } = useTheme();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await api.get('/manage/users');
            if (res.data.success) setUsers(res.data.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchUsers(); }, []);

    const toggleStatus = async (id, currentStatus) => {
        const action = currentStatus === 'active' ? 'block' : 'restore';
        if (!window.confirm(`Are you sure you want to ${action} this user?`)) return;
        
        const newStatus = currentStatus === 'active' ? 'blocked' : 'active';
        try {
            await api.put(`/manage/users/${id}/status`, { status: newStatus });
            fetchUsers();
        } catch (err) {
            alert('Action failed');
        }
    };

    const containerBg = isDark ? 'bg-[#121212] border-zinc-800 shadow-2xl' : 'bg-white border-gray-200/60 shadow-sm';
    const tableHeaderBg = isDark ? 'bg-zinc-900/50' : 'bg-gray-50/50';
    const textMain = isDark ? 'text-white' : 'text-gray-900';
    const textSub = isDark ? 'text-zinc-500' : 'text-gray-500';
    const rowHover = isDark ? 'hover:bg-zinc-900/40' : 'hover:bg-gray-50/80';

    return (
        <AdminLayout title="System Users">
            <Head><title>Personnel | Admin Management</title></Head>
            <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <h2 className={`text-xl font-bold ${textMain}`}>Personnel Directory</h2>
                        <p className={`text-xs font-bold uppercase tracking-wider ${textSub}`}>Manage active and restricted accounts</p>
                    </div>
                </div>

                <div className={`${containerBg} border rounded-2xl overflow-hidden`}>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className={`border-b ${isDark ? 'border-zinc-800' : 'border-gray-100'} ${tableHeaderBg}`}>
                                    <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Personnel Persona</th>
                                    <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Authorization</th>
                                    <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub}`}>Joined On</th>
                                    <th className={`px-8 py-5 text-[10px] font-bold uppercase tracking-wider ${textSub} text-right`}>Moderation</th>
                                </tr>
                            </thead>
                            <tbody className={`divide-y ${isDark ? 'divide-zinc-800/40' : 'divide-gray-50'}`}>
                                {loading ? (
                                    [1,2,3].map(i => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan="4" className="px-8 py-10">
                                                <div className={`h-4 ${isDark ? 'bg-zinc-900' : 'bg-gray-100'} rounded-lg w-full opacity-40`}></div>
                                            </td>
                                        </tr>
                                    ))
                                ) : users.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-32 text-center">
                                            <div className="flex flex-col items-center gap-4 opacity-30">
                                                <Inbox size={48} className={isDark ? 'text-zinc-700' : 'text-gray-300'} />
                                                <p className={`font-bold text-sm tracking-wide ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}>DIRECTORY IS EMPTY</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : users.map(user => (
                                    <tr key={user.id} className={`${rowHover} transition-all group`}>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-5">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm border transition-all ${isDark ? 'bg-zinc-900 text-amber-500 border-zinc-800' : 'bg-gray-50 text-amber-600 border-gray-100'}`}>
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div className="overflow-hidden min-w-0">
                                                    <p className={`text-sm font-bold truncate ${textMain}`}>{user.name}</p>
                                                    <p className={`text-[11px] font-medium flex items-center gap-1.5 ${textSub} truncate opacity-70`}>
                                                        {user.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border inline-flex items-center gap-1.5 ${
                                                user.status === 'active' 
                                                ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' 
                                                : 'bg-red-500/10 text-red-600 border-red-500/20'
                                            }`}>
                                                {user.status === 'active' ? <><ShieldCheck size={12}/> Authorized</> : <><ShieldAlert size={12}/> Restricted</>}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className={`text-[11px] font-bold flex items-center gap-2 ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}>
                                                <Clock size={14}/> {new Date(user.created_at).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <button 
                                                onClick={() => toggleStatus(user.id, user.status)}
                                                className={`px-5 py-2 rounded-lg text-xs font-bold transition-all border ${
                                                    user.status === 'active' 
                                                    ? 'text-red-500 border-red-100 hover:bg-red-50 dark:border-red-500/20 dark:hover:bg-red-500/10' 
                                                    : 'text-emerald-500 border-emerald-100 hover:bg-emerald-50 dark:border-emerald-500/20 dark:hover:bg-emerald-500/10'
                                                }`}
                                            >
                                                {user.status === 'active' ? 'Restrict' : 'Authorize'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
