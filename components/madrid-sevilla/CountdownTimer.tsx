"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const targetDate = new Date("2026-10-16T00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (!isClient) {
        return null; // Avoid hydration mismatch
    }

    const timeUnits = [
        { label: "DÍAS", value: timeLeft.days },
        { label: "HORAS", value: timeLeft.hours },
        { label: "MIN", value: timeLeft.minutes },
        { label: "SEG", value: timeLeft.seconds }
    ];

    return (
        <div className="flex justify-center gap-4 sm:gap-8 mt-12 flex-wrap">
            {timeUnits.map((unit, index) => (
                <motion.div
                    key={unit.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="text-center"
                >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-xl">
                        <span className="text-3xl sm:text-4xl font-black text-white">{String(unit.value).padStart(2, '0')}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white/80 mt-2 tracking-widest">{unit.label}</div>
                </motion.div>
            ))}
        </div>
    );
}
