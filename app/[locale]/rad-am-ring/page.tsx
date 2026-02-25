"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Trophy, Bike, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RadAmRingPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const disciplines = [
    {
      title: "24H RACE",
      description: "La prueba de resistencia definitiva. 24 horas ininterrumpidas de ciclismo en equipo.",
      icon: <Clock size={40} />,
      features: ["Equipos de 4-8 ciclistas", "Circuito de 5.5km", "Categorías Elite y Amateur"]
    },
    {
      title: "TOURING",
      description: "Rutas guiadas por las carreteras más espectaculares de Mallorca.",
      icon: <MapPin size={40} />,
      features: ["Diferentes niveles", "Guías profesionales", "Asistencia técnica"]
    },
    {
      title: "PUBLIC RACE",
      description: "Competición abierta para todos los niveles con cronometraje oficial.",
      icon: <Trophy size={40} />,
      features: ["Categorías por edad", "Premios y trofeos", "Timing chip incluido"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#E30613] rounded-full flex items-center justify-center">
                <Bike size={24} className="text-white" />
              </div>
              <div className="text-2xl font-black tracking-tight">
                <span className="text-[#E30613]">RAD AM RING</span>
                <span className="text-black ml-2">MALLORCA</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {['INICIO', 'DISCIPLINAS', 'INSCRIPCIONES', 'INFO'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-gray-700 hover:text-[#E30613] transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('inscripciones')}
                className="px-6 py-3 bg-[#E30613] text-white font-black rounded-sm hover:bg-black transition-colors">
                INSCRIBIRSE
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&h=1080&fit=crop"
            alt="Cycling Mallorca"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
              <span className="text-[#E30613] italic">RAD</span>
              <span className="text-black italic"> AM RING</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-gray-700 mt-4 not-italic">MALLORCA</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-800 mb-4 font-bold">
              20-22 SEPTIEMBRE 2026
            </p>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              La experiencia ciclista más emocionante del Mediterráneo. 24 horas de pura adrenalina en las mejores carreteras de Mallorca.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('inscripciones')}
                className="px-8 py-4 bg-[#E30613] text-white font-black text-lg hover:bg-black transition-colors"
              >
                INSCRIBIRSE AHORA
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('disciplinas')}
                className="px-8 py-4 border-2 border-black text-black font-black text-lg hover:bg-black hover:text-white transition-colors"
              >
                VER RECORRIDO
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Info Bar */}
      <section className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Calendar size={32} />, label: "20-22 SEPT 2026", value: "3 DÍAS" },
              { icon: <MapPin size={32} />, label: "MALLORCA", value: "ESPAÑA" },
              { icon: <Users size={32} />, label: "+2000", value: "CICLISTAS" },
              { icon: <Bike size={32} />, label: "5.5KM", value: "CIRCUITO" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="text-[#E30613] mb-3">{item.icon}</div>
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-2xl font-black">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="disciplinas" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 text-black">
              <span className="text-[#E30613] italic">DISCIPLINAS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Elige tu desafío y vive la experiencia Rad am Ring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {disciplines.map((discipline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 border-4 border-black hover:border-[#E30613] transition-colors group"
              >
                <div className="w-16 h-16 bg-[#E30613] flex items-center justify-center text-white mb-6 group-hover:bg-black transition-colors">
                  {discipline.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 text-black italic">{discipline.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{discipline.description}</p>
                <ul className="space-y-3">
                  {discipline.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#E30613] mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="inscripciones" className="bg-[#E30613] py-24 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl font-black mb-6 italic">
              ¿LISTO PARA EL DESAFÍO?
            </h2>
            <p className="text-2xl mb-12 opacity-90">
              Las inscripciones están abiertas. No pierdas tu plaza.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-black text-white font-black text-xl hover:bg-white hover:text-black transition-colors"
            >
              INSCRIBIRSE AHORA
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-black mb-4 italic">
            <span className="text-[#E30613]">RAD AM RING</span> MALLORCA
          </h3>
          <p className="text-gray-400 mb-6">
            Organizado por Mallorca Sport Events
          </p>
          <p className="text-sm text-gray-500">
            © 2026 Rad am Ring Mallorca. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

