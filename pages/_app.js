import '../styles/globals.css';
import { AuthProvider } from '../context/AuthContext';
import { ProgressProvider } from '../context/ProgressContext';
import { StreakProvider } from '../context/StreakContext';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Head from 'next/head';

import dynamic from 'next/dynamic';

const NonSSRWrapper = ({ children }) => <>{children}</>;
const DynamicWrapper = dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false,
});

function MyApp({ Component, pageProps, router }) {
  const isAdminPath = router.pathname.startsWith('/admin');

  return (
    <>
      <Head>
        <title>Career Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DynamicWrapper>
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
                </div>
              </StreakProvider>
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </DynamicWrapper>
    </>
  );
}

export default MyApp;
