'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if this is the first visit
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);

      return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/logo TOM.png"
          alt="Logo"
          width={200}
          height={200}
          priority
          className="animate-[fadeIn_1s_ease-in]"
        />
        <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default SplashScreen;