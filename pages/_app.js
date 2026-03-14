import '../styles/globals.css';
import '../components/common/ElectricBorder.css';
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
        <title>Career Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
