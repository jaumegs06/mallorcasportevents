"use client";

import { motion } from "framer-motion";
import EventsGrid from "@/components/home/EventsGrid";
import { useParams } from "next/navigation";

export default function HomePage() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 text-gray-900">
              MALLORCA
              <span className="block bg-gradient-to-r from-lime-500 via-cyan-500 to-red-600 bg-clip-text text-transparent">
                SPORT EVENTS
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
              Organizadores de los eventos deportivos más espectaculares de Mallorca
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <span className="text-sm font-semibold uppercase tracking-wider">Explora nuestros eventos</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-gray-900">
              NUESTROS EVENTOS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige tu próxima aventura deportiva en Mallorca
            </p>
          </motion.div>

          <EventsGrid locale={locale} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black mb-4">MALLORCA SPORT EVENTS</h3>
          <p className="text-gray-400 mb-6">
            Creando experiencias deportivas inolvidables en Mallorca
          </p>
          <p className="text-sm text-gray-500">
            © 2026 Mallorca Sport Events. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
