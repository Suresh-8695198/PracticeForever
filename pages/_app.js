import '../styles/globals.css';
import '../components/common/ElectricBorder.css';
import '../components/ui/PixelCard.css';
import { AuthProvider } from '../context/AuthContext';
import { ProgressProvider } from '../context/ProgressContext';
import { StreakProvider } from '../context/StreakContext';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import Head from 'next/head';

import dynamic from 'next/dynamic';

const NonSSRWrapper = ({ children }) => <>{children}</>;
const DynamicWrapper = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});

import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps }, router }) {
  const isAdminPath = router.pathname.startsWith('/admin');

  return (
    <>
      <Head>
        <title>PracticeForever | India's #1 Career Preparation Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="PracticeForever is India's most trusted platform for government exams, aptitude prep, coding interviews, and daily current affairs. Start your career journey today." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&family=Delius+Swash+Caps&display=swap" rel="stylesheet" />
      </Head>
      <DynamicWrapper>
        <SessionProvider session={session}>
          <ThemeProvider>
            <AuthProvider>
              <ProgressProvider>
                <StreakProvider>
                  <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isAdminPath ? 'bg-black' : ''}`}>
                    {!isAdminPath && <Navbar />}
                    <main className="flex-1">
                      <Component {...pageProps} />
                    </main>
                    {!isAdminPath && <Footer />}
                    {!isAdminPath && <ScrollToTop />}
                  </div>
                </StreakProvider>
              </ProgressProvider>
            </AuthProvider>
          </ThemeProvider>
        </SessionProvider>
      </DynamicWrapper>
    </>
  );
}

export default MyApp;
