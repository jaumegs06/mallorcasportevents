"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from "lucide-react";
import { useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className="relative flex items-center bg-zinc-900/80 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-2xl">
      {/* Moving Background Slider */}
      <div className="absolute inset-y-1.5 left-1.5 flex transition-all duration-300 ease-out"
        style={{
          width: `calc((100% - 12px) / 3)`,
          transform: `translateX(${languages.findIndex(l => l.code === currentLocale) * 100}%)`
        }}>
        <div className="w-full h-full bg-white rounded-full shadow-lg" />
      </div>

      {/* Buttons */}
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleLanguageChange(lang.code)}
          className={`relative z-10 w-12 h-8 flex items-center justify-center text-[10px] font-black transition-colors duration-300 ${currentLocale === lang.code ? 'text-black' : 'text-zinc-500 hover:text-white'
            }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
