import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import { StreakProvider } from './context/StreakContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CareerPage from './pages/CareerPage';
import ProfilePage from './pages/ProfilePage';
import CommunicationPage from './pages/CommunicationPage';
import './index.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const { isDark } = useTheme();

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
        <div className="text-center">
          <div className="spinner w-12 h-12 border-4 mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Public Route Component (redirect if authenticated)
const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const { isDark } = useTheme();

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-dark-950' : 'bg-white'}`}>
        <div className="text-center">
          <div className="spinner w-12 h-12 border-4 mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-dark-bg text-dark-text' : 'bg-light-bg text-light-text'}`}>
      <Navbar />
      <main className="flex-1">
        <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        
        {/* New Pages */}
        <Route path="/exams" element={<div className="pt-24 text-center"><h1>Government Exams</h1><p>Coming Soon...</p></div>} />
        <Route path="/interviews" element={<div className="pt-24 text-center"><h1>Interview Prep</h1><p>Coming Soon...</p></div>} />
        <Route path="/programming" element={<div className="pt-24 text-center"><h1>Programming</h1><p>Coming Soon...</p></div>} />
        <Route path="/practice" element={<ProtectedRoute><div className="pt-24 text-center"><h1>Coding Practice</h1><p>Coming Soon...</p></div></ProtectedRoute>} />
        <Route path="/aptitude" element={<div className="pt-24 text-center"><h1>Aptitude</h1><p>Coming Soon...</p></div>} />
        
        <Route path="/current-affairs" element={<div className="pt-24 text-center"><h1>Current Affairs</h1><p>Coming Soon...</p></div>} />
        <Route path="/mock-tests" element={<ProtectedRoute><div className="pt-24 text-center"><h1>Mock Tests</h1><p>Coming Soon...</p></div></ProtectedRoute>} />
        <Route path="/study-materials" element={<div className="pt-24 text-center"><h1>Study Materials</h1><p>Coming Soon...</p></div>} />
        <Route path="/blog" element={<div className="pt-24 text-center"><h1>Blog</h1><p>Coming Soon...</p></div>} />
        <Route path="/jobs" element={<div className="pt-24 text-center"><h1>Jobs & Internships</h1><p>Coming Soon...</p></div>} />

        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

        {/* Legacy routes mappings */}
        <Route path="/career" element={<CareerPage />} />
        <Route path="/communication" element={<CommunicationPage />} />

        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ProgressProvider>
            <StreakProvider>
              <AppContent />
            </StreakProvider>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
