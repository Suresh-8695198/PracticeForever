import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '../../components/admin/AdminLayout';
import { useTheme } from '@/context/ThemeContext';
import { 
  Users, 
  FileText, 
  BookOpen, 
  HelpCircle, 
  ArrowUpRight,
  Clock,
  ChevronRight,
  TrendingUp,
  History
} from 'lucide-react';

export default function AdminDashboard() {
  const { isDark } = useTheme();
  const [admin, setAdmin] = useState({ name: 'Admin' });

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) setAdmin(JSON.parse(user));
  }, []);

  const stats = [
    { title: 'Total Users', value: '42,850', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+12%', label: 'vs last month' },
    { title: 'Articles', value: '842', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50', trend: '+5%', label: 'Active posts' },
    { title: 'Questions', value: '15,402', icon: HelpCircle, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+8%', label: 'Pending review' },
    { title: 'Courses', value: '124', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+2%', label: 'Live tutorials' },
  ];

  const cardClass = isDark 
    ? 'bg-[#121212] border-zinc-800' 
    : 'bg-white border-gray-200 shadow-sm';
  
  const textTitle = isDark ? 'text-zinc-400' : 'text-gray-500';
  const textValue = isDark ? 'text-white' : 'text-gray-900';

  return (
    <AdminLayout title="Dashboard">
      <Head>
        <title>Dashboard | Admin Panel</title>
      </Head>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className={`text-2xl font-bold ${textValue}`}>Welcome back, {admin.name.split(' ')[0]}</h1>
            <p className={`text-sm ${textTitle} mt-1`}>Here is what's happening with your platform today.</p>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div key={i} className={`p-6 border rounded-xl ${cardClass} transition-shadow hover:shadow-md`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-lg ${isDark ? 'bg-zinc-800/50' : item.bg}`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div className="flex flex-col items-end">
                  <span className={`text-xs font-bold ${item.color}`}>{item.trend}</span>
                  <span className="text-[10px] text-zinc-400 font-medium">{item.label}</span>
                </div>
              </div>
              <p className={`text-sm font-semibold ${textTitle}`}>{item.title}</p>
              <h2 className={`text-2xl font-bold ${textValue} mt-1`}>{item.value}</h2>
            </div>
          ))}
        </div>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Over Time */}
          <div className={`lg:col-span-2 border rounded-xl overflow-hidden ${cardClass}`}>
            <div className={`px-6 py-4 border-b ${isDark ? 'border-zinc-800' : 'border-gray-100'} flex items-center justify-between`}>
              <h3 className={`font-semibold ${textValue}`}>User Engagement</h3>
              <select className={`text-xs font-medium border rounded-lg px-2 py-1 outline-none ${isDark ? 'bg-zinc-900 border-zinc-700 text-zinc-400' : 'bg-white border-gray-200 text-gray-600'}`}>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
            <div className="p-8">
              <div className="h-[280px] w-full flex items-end justify-between items-baseline gap-2">
                {[45, 60, 40, 85, 55, 70, 95].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3">
                    <div 
                      className={`w-full max-w-[40px] rounded-t-lg transition-all ${isDark ? 'bg-zinc-800/80 hover:bg-[#FFC107]/50' : 'bg-gray-100 hover:bg-[#FFC107]/50'}`} 
                      style={{ height: `${h}%` }}
                    ></div>
                    <span className={`text-[10px] font-medium ${textTitle}`}>Day {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className={`border rounded-xl flex flex-col ${cardClass}`}>
            <div className={`px-6 py-4 border-b ${isDark ? 'border-zinc-800' : 'border-gray-100'} flex items-center gap-2`}>
              <History size={16} className="text-[#FFC107]" />
              <h3 className={`font-semibold ${textValue}`}>Recent Activity</h3>
            </div>
            <div className="p-4 flex-1 space-y-4">
              {[
                { name: 'Suresh G', action: 'published', target: 'Current Affairs', time: '12m ago' },
                { name: 'Admin', action: 'deleted', target: 'Broken Link Article', time: '1h ago' },
                { name: 'Editor', action: 'added', target: 'UPSC Questions', time: '3h ago' },
                { name: 'System', action: 'backup', target: 'Database Root', time: '5h ago' },
              ].map((log, i) => (
                <div key={i} className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/30 transition-colors">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isDark ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-100 text-gray-500'}`}>
                    {log.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`text-xs ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
                      <span className="font-bold">{log.name}</span> {log.action} <span className="font-semibold">{log.target}</span>
                    </p>
                    <p className="text-[10px] text-zinc-500 mt-0.5">{log.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`p-4 border-t ${isDark ? 'border-zinc-800' : 'border-gray-100'}`}>
              <button className={`w-full py-2 text-xs font-bold rounded-lg border transition-all ${isDark ? 'border-zinc-800 text-zinc-400 hover:text-white' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}>
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
