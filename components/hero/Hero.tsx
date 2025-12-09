"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import {useTranslations} from 'next-intl';

const Hero = () => {
  const t = useTranslations('hero');
  const eventDate = new Date("2026-06-15T09:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Radial gradient vignette for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-0"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Event Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-[--color-neon-cyan]/30">
            <Calendar size={16} className="text-[--color-neon-cyan]" />
            <span className="text-sm font-bold text-[--color-neon-cyan]">
              {t('date')}
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none"
        >
          <span className="block gradient-neon-text drop-shadow-[0_0_30px_rgba(57,255,20,0.8)] drop-shadow-[0_0_60px_rgba(0,255,255,0.6)]">{t('title')}</span>
          <span className="block text-white mt-2">{t('subtitle')}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto font-light"
        >
          {t('description')}
        </motion.p>

        {/* Event Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 mb-12 text-gray-300"
        >
          <div className="flex items-center space-x-2">
            <MapPin size={20} className="text-[--color-neon-green]" />
            <span className="font-semibold">{t('location')}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={20} className="text-[--color-neon-orange]" />
            <span className="font-semibold">{t('participants')}</span>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6 font-bold">
            {t('countdown')}
          </h3>
          <div className="flex justify-center gap-4 sm:gap-8">
            {[
              { value: timeLeft.days, label: t('days') },
              { value: timeLeft.hours, label: t('hours') },
              { value: timeLeft.minutes, label: t('minutes') },
              { value: timeLeft.seconds, label: t('seconds') },
            ].map((unit, index) => (
              <motion.div
                key={unit.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="glass rounded-2xl p-4 sm:p-6 min-w-[80px] sm:min-w-[120px] border border-[--color-neon-cyan]/20"
              >
                <div className="text-4xl sm:text-6xl font-black gradient-neon-text mb-2">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-400 font-bold">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#tickets"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-black text-lg text-black bg-gradient-to-r from-lime-400 to-cyan-400 hover:from-lime-300 hover:to-cyan-300 hover:shadow-2xl hover:shadow-lime-400/50 glow-neon-cyan transition-all duration-300 w-full sm:w-auto"
          >
            {t('buyTickets')}
          </motion.a>
          <motion.a
            href="#speakers"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-black text-lg border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
          >
            {t('seeSpeakers')}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[--color-neon-green]/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[--color-neon-cyan]/20 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
