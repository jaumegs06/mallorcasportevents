"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Ticket } from "lucide-react";
import Link from "next/link";
import {useTranslations} from 'next-intl';
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t('home'), href: "#hero" },
    { name: t('speakers'), href: "#speakers" },
    { name: t('agenda'), href: "#agenda" },
    { name: t('tickets'), href: "#tickets" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-black/30 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl font-black tracking-tight"
            >
              <span className="gradient-neon-text">Mallorca</span>
              <span className="text-white">SportsEvents</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm font-bold tracking-wide text-gray-300 hover:text-[--color-neon-cyan] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[--color-neon-green] to-[--color-neon-cyan] group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* CTA Button */}
            <motion.a
              href="#tickets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-lime-400 to-cyan-400 text-black hover:from-lime-300 hover:to-cyan-300 hover:shadow-lg hover:shadow-lime-400/50 transition-all duration-300"
            >
              <Ticket size={18} className="text-black" />
              <span>{t('buyTickets')}</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass border-t border-[--color-neon-cyan]/20"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-bold text-gray-300 hover:text-[--color-neon-cyan] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#tickets"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center space-x-2 w-full px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-lime-400 to-cyan-400 text-black hover:from-lime-300 hover:to-cyan-300"
          >
            <Ticket size={18} className="text-black" />
            <span>{t('buyTickets')}</span>
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
