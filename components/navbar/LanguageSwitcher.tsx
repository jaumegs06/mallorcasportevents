"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-full glass border border-white/20 hover:border-white/40 transition-all duration-300 text-white"
      >
        <Globe size={18} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-2 glass border border-white/20 rounded-2xl overflow-hidden min-w-[150px]"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors flex items-center space-x-3 text-white"
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="font-semibold text-sm">{lang.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
