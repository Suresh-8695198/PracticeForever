import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function InterviewIndex() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/interviews/company');
  }, [router]);

  return null;
}
