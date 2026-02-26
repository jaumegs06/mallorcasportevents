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
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[--color-ironman-red] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-[900] tracking-[calc(-0.05em)] leading-[0.85] mb-8 text-white uppercase italic skew-title">
              MALLORCA
              <span className="block text-[--color-ironman-red]">
                SPORT EVENTS
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-500 mb-16 max-w-2xl mx-auto uppercase font-black tracking-[0.2em] italic">
              Organizadores de los eventos deportivos más espectaculares de Mallorca
            </p>
          </motion.div>

          {/* Features highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-12 sm:gap-20"
          >
            {[
              { label: '2 Eventos', subtext: 'PREMIUM' },
              { label: 'Mallorca', subtext: 'DESTINO ÚNICO' },
              { label: '2026-2027', subtext: 'PRÓXIMAS FECHAS' }
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-3xl sm:text-4xl font-[900] text-white italic skew-title mb-1">{item.label}</div>
                <div className="text-[10px] text-zinc-500 font-black tracking-[0.3em] group-hover:text-[--color-ironman-red] transition-colors">{item.subtext}</div>
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
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-[900] tracking-tighter mb-4 text-white italic skew-title">
              NUESTROS EVENTOS
            </h2>
            <div className="w-24 h-1 bg-[--color-ironman-red] mx-auto mb-8"></div>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto uppercase font-black tracking-widest leading-loose">
              Elige tu próxima aventura deportiva en Mallorca. Solo para los que buscan la excelencia.
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
                  <div className="relative h-[700px] rounded-none overflow-hidden shadow-2xl cursor-pointer border border-white/5 group-hover:border-[--color-ironman-red]/30 transition-colors">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={event.bgImage}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[20%] contrast-[1.1]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8">
                      {/* Icon */}
                      <div className="w-24 h-24 rounded-none bg-[--color-ironman-red] flex items-center justify-center text-white shadow-2xl relative">
                        <div className="absolute -inset-2 border border-[--color-ironman-red]/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                        {event.icon}
                      </div>

                      {/* Event Info */}
                      <div>
                        <h3 className="text-5xl sm:text-6xl font-[900] tracking-tighter mb-4 text-white italic skew-title leading-none">
                          {event.title.toUpperCase()}
                        </h3>
                        <p className="text-sm mb-6 text-[--color-ironman-red] font-black uppercase tracking-[0.3em] italic">
                          {event.subtitle}
                        </p>
                        <p className="text-sm mb-10 text-zinc-400 font-medium uppercase tracking-widest leading-relaxed max-w-sm">
                          {event.description}
                        </p>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border-t border-white/10 pt-8 mt-8">
                          <div className="flex items-center space-x-3">
                            <Calendar size={16} className="text-[--color-ironman-red]" />
                            <span className="font-black text-[10px] text-zinc-300 uppercase tracking-widest">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin size={16} className="text-[--color-ironman-red]" />
                            <span className="font-black text-[10px] text-zinc-300 uppercase tracking-widest">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users size={16} className="text-[--color-ironman-red]" />
                            <span className="font-black text-[10px] text-zinc-300 uppercase tracking-widest">{event.participants}</span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-block px-10 py-5 btn-ironman text-white font-[900] text-sm tracking-[0.2em] italic skew-title"
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
      <footer className="bg-black text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-[900] mb-6 italic skew-title tracking-tighter">MALLORCA <span className="text-[--color-ironman-red]">SPORT EVENTS</span></h3>
          <p className="text-zinc-500 mb-12 uppercase font-black text-[10px] tracking-[0.4em]">
            Creando experiencias deportivas inolvidables en Mallorca
          </p>
          <div className="w-12 h-px bg-white/10 mx-auto mb-12"></div>
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            © 2026 Mallorca Sport Events. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
