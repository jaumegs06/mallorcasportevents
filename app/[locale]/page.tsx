"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, MapPin, Dumbbell, Bike } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function HomePage() {
  const params = useParams();
  const locale = params.locale as string;
  const events = [
    {
      id: 'fitness',
      title: 'Mallorca Fitness Weekend',
      subtitle: 'Wellness & Transformation',
      description: 'El evento más épico de fitness con masterclasses y speakers internacionales',
      date: '15-16 Junio 2026',
      location: 'Palma de Mallorca',
      participants: '+5000',
      icon: <Dumbbell size={48} />,
      color: 'from-lime-400 to-cyan-400',
      bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      link: `/${locale}/fitness-weekend`,
      theme: 'dark'
    },
    {
      id: 'cycling',
      title: 'Rad am Ring Mallorca',
      subtitle: 'Cycling Experience',
      description: 'La experiencia ciclista definitiva en las mejores carreteras de Mallorca',
      date: '20-22 Septiembre 2026',
      location: 'Mallorca',
      participants: '+2000',
      icon: <Bike size={48} />,
      color: 'from-red-600 to-black',
      bgImage: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&h=600&fit=crop',
      link: `/${locale}/rad-am-ring`,
      theme: 'light'
    }
  ];

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Link href={event.link}>
                  <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={event.bgImage}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${event.theme === 'dark' ? 'from-black via-black/80 to-black/40' : 'from-white via-white/80 to-white/40'}`}></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8">
                      {/* Icon */}
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg`}>
                        {event.icon}
                      </div>

                      {/* Event Info */}
                      <div>
                        <h3 className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 ${event.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {event.title}
                        </h3>
                        <p className={`text-xl mb-6 ${event.theme === 'dark' ? 'text-cyan-400' : 'text-red-600'} font-bold uppercase tracking-wider`}>
                          {event.subtitle}
                        </p>
                        <p className={`text-lg mb-8 ${event.theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {event.description}
                        </p>

                        {/* Event Details */}
                        <div className="flex flex-wrap gap-6 mb-8">
                          <div className="flex items-center space-x-2">
                            <Calendar size={20} className={event.theme === 'dark' ? 'text-lime-400' : 'text-red-600'} />
                            <span className={`font-semibold ${event.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={20} className={event.theme === 'dark' ? 'text-cyan-400' : 'text-red-600'} />
                            <span className={`font-semibold ${event.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users size={20} className={event.theme === 'dark' ? 'text-orange-400' : 'text-red-600'} />
                            <span className={`font-semibold ${event.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{event.participants} participantes</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`inline-block px-8 py-4 rounded-full font-black text-lg bg-gradient-to-r ${event.color} text-white shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                        >
                          VER EVENTO
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
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
