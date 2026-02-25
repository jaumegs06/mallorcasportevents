"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, MapPin, Dumbbell, Bike, Heart, Award, Sparkles } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function HomePage() {
  const params = useParams();
  const locale = params.locale as string;
  // Triggering redeploy after Supabase DB restore
  const events = [
    {
      id: 'fitness',
      title: 'Mallorca Fitness Weekend 2027',
      subtitle: '⭐ The Ultimate Elite',
      description: 'La experiencia fitness más premium y profesional de Europa con speakers internacionales',
      date: '14-16 Mayo 2027',
      location: 'Calvià, Mallorca',
      participants: 'VIP Experience',
      icon: (
        <div className="relative">
          <Award size={40} />
          <Sparkles size={20} className="absolute -top-1 -right-1 text-amber-300" />
        </div>
      ),
      color: 'from-blue-600 via-orange-500 to-amber-400',
      bgImage: '/mfw-2027/hero.png',
      link: `/${locale}/fitness-weekend`,
      theme: 'dark'
    },
    {
      id: 'madrid-sevilla',
      title: 'Ruta Ultrafondo Solidaria',
      subtitle: 'Madrid - Sevilla',
      description: 'El reto más épico y solidario: 550km por el ciclismo femenino y contra el cáncer',
      date: '16-18 Octubre 2026',
      location: 'Madrid → Sevilla',
      participants: 'Únete',
      icon: (
        <div className="relative">
          <Heart size={40} className="fill-white" />
          <Bike size={24} className="absolute -bottom-1 -right-1" />
        </div>
      ),
      color: 'from-orange-500 via-pink-500 to-blue-900',
      bgImage: '/madrid-sevilla/hero.jpg',
      link: `/${locale}/madrid-sevilla`,
      theme: 'dark'
    },
    /* {
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
    } */
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

          {/* Features highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {[
              { label: '2 Eventos', subtext: 'Premium' },
              { label: 'Mallorca', subtext: 'Destino Único' },
              { label: '2026-2027', subtext: 'Próximas Fechas' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-gray-900">{item.label}</div>
                <div className="text-sm text-gray-500 font-medium">{item.subtext}</div>
              </div>
            ))}
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
