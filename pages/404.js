import React from 'react';
import Head from 'next/head';
import ComingSoon from '@/components/common/ComingSoon';
import { useTheme } from '@/context/ThemeContext';

const Custom404 = () => {
  const { isDark } = useTheme();
  const bg = isDark ? 'bg-[#0a0a0a]' : 'bg-[#fcfdfd]';

  return (
    <div className={`min-h-[85vh] flex flex-col items-center justify-center ${bg} pt-20 transition-colors duration-300`}>
      <Head>
        <title>Preparing Something Great | PracticeForever</title>
        <meta name="description" content="This section is currently under construction. Explore our other learning resources while we polish this path for you." />
      </Head>

      <ComingSoon 
        topicName="This Page" 
        category="" 
      />
    </div>
  );
};

export default Custom404;
