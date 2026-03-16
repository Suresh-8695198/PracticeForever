import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
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
import Script from 'next/script';


import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(
          function(registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope);
          },
          function(err) {
            console.log('Service Worker registration failed: ', err);
          }
        );
      });
    }
  }, []);

  const isAdminPath = router.pathname.startsWith('/admin');

  return (
    <>
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Head>
        <title>PracticeForever | India's #1 Career Preparation Platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="PracticeForever is India's most trusted platform for government exams (TNPSC, SSC, UPSC), aptitude prep, coding interviews, and daily current affairs. Start your career journey today." />
        <meta name="keywords" content="PracticeForever, Government Exams Prep, TNPSC, SSC, UPSC, Aptitude Questions, Coding Interview Prep, Daily Current Affairs 2026, Mock Tests India" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://practiceforever.app/" />
        <meta property="og:title" content="PracticeForever | India's #1 Career Preparation Platform" />
        <meta property="og:description" content="Master government exams, aptitude, and coding interviews with the most trusted preparation platform in India." />
        <meta property="og:image" content="https://practiceforever.app/practiceforever.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://practiceforever.app/" />
        <meta property="twitter:title" content="PracticeForever | India's #1 Career Preparation Platform" />
        <meta property="twitter:description" content="Master government exams, aptitude, and coding interviews with the most trusted preparation platform in India." />
        <meta property="twitter:image" content="https://practiceforever.app/practiceforever.png" />

        <link rel="canonical" href="https://practiceforever.app/" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#FFC107" />
      </Head>
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
    </>
  );
}

export default MyApp;
