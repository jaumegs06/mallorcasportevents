"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock } from "lucide-react";

interface Session {
  time: string;
  title: string;
  instructor: string;
  duration: string;
}

interface DaySchedule {
  day: string;
  date: string;
  sessions: Session[];
}

const Agenda = () => {
  const [activeDay, setActiveDay] = useState(0);

  const schedule: DaySchedule[] = [
    {
      day: "DÍA 1",
      date: "15 Junio",
      sessions: [
        {
          time: "09:00",
          title: "Apertura & Keynote",
          instructor: "Equipo Fit Summit",
          duration: "1h",
        },
        {
          time: "10:00",
          title: "CrossFit Extreme Session",
          instructor: "María Torres",
          duration: "1.5h",
        },
        {
          time: "12:00",
          title: "Nutrición para Alto Rendimiento",
          instructor: "Andrea López",
          duration: "1h",
        },
        {
          time: "14:00",
          title: "Almuerzo & Networking",
          instructor: "Libre",
          duration: "1.5h",
        },
        {
          time: "16:00",
          title: "Powerlifting Masterclass",
          instructor: "Jorge Martín",
          duration: "2h",
        },
        {
          time: "18:00",
          title: "Yoga & Mindfulness",
          instructor: "Carlos Ruiz",
          duration: "1.5h",
        },
      ],
    },
    {
      day: "DÍA 2",
      date: "16 Junio",
      sessions: [
        {
          time: "09:00",
          title: "Entrenamiento Funcional Avanzado",
          instructor: "Pablo García",
          duration: "1.5h",
        },
        {
          time: "11:00",
          title: "Pilates & Core Training",
          instructor: "Laura Sánchez",
          duration: "1.5h",
        },
        {
          time: "13:00",
          title: "Panel: El Futuro del Fitness",
          instructor: "Todos los Speakers",
          duration: "1.5h",
        },
        {
          time: "15:00",
          title: "Almuerzo & Networking",
          instructor: "Libre",
          duration: "1.5h",
        },
        {
          time: "17:00",
          title: "HIIT Challenge",
          instructor: "María Torres",
          duration: "1h",
        },
        {
          time: "18:30",
          title: "Ceremonia de Clausura",
          instructor: "Equipo Fit Summit",
          duration: "1h",
        },
      ],
    },
  ];

  return (
    <section id="agenda" className="py-24 bg-transparent relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[--color-neon-orange]/5 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="gradient-neon-text">AGENDA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Programa completo de actividades y masterclasses
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-12 space-x-4">
          {schedule.map((day, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveDay(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-full font-black text-lg transition-all duration-300 ${
                activeDay === index
                  ? "bg-gradient-to-r from-[--color-neon-green] to-[--color-neon-cyan] text-black"
                  : "glass border border-[--color-neon-cyan]/30 text-white hover:border-[--color-neon-cyan]"
              }`}
            >
              <div>{day.day}</div>
              <div className="text-xs opacity-80 font-normal">{day.date}</div>
            </motion.button>
          ))}
        </div>

        {/* Schedule Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {schedule[activeDay].sessions.map((session, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass rounded-2xl p-6 border border-[--color-neon-cyan]/20 hover:border-[--color-neon-cyan]/60 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start space-x-6">
                    {/* Time Badge */}
                    <div className="flex-shrink-0 w-20">
                      <div className="text-3xl font-black gradient-neon-text">
                        {session.time}
                      </div>
                      <div className="text-xs text-gray-500 font-bold flex items-center mt-1">
                        <Clock size={12} className="mr-1" />
                        {session.duration}
                      </div>
                    </div>

                    {/* Session Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-1">
                        {session.title}
                      </h3>
                      <p className="text-[--color-neon-green] font-semibold text-sm">
                        {session.instructor}
                      </p>
                    </div>
                  </div>

                  {/* Visual Indicator */}
                  <div className="hidden md:block w-2 h-2 rounded-full bg-[--color-neon-cyan] glow-neon-cyan"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Agenda;
