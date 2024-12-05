'use client';

import ThemeToggle from '@/components/ui/ThemeToggle';
import { ThemeProvider } from '@/context/themecontext';
import Link from 'next/link';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="text-center mt-10">
        <Link
          href="/register"
          className="animate-ping text-blue-600 hover:animate-none hover:text-red-600 transition-all"
        >
          Đăng ký nào
        </Link>
        <div className="h-[500px] w-full border border-red-500 dark:border-white"></div>
      </div>
      <ThemeToggle></ThemeToggle>
    </ThemeProvider>
  );
}
