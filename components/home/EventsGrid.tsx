"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, MapPin, Dumbbell, Bike } from "lucide-react";
import Image from "next/image";

interface EventsGridProps {
  locale: string;
}

export default function EventsGrid({ locale }: EventsGridProps) {
  const events = [
    {
      id: 'fitness',
      title: 'Mallorca Fitness Weekend',
      subtitle: 'Wellness & Transformation',
      description: 'El evento más épico de fitness con masterclasses y speakers internacionales',
      date: '14-16 Mayo 2027',
      location: 'Palma de Mallorca',
      participants: '+5000',
      icon: <Dumbbell size={48} />,
      color: 'from-lime-400 to-cyan-400',
      bgImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      link: `/${locale}/fitness-weekend`,
      theme: 'dark'
    },
    /*
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
    */
  ];

  return (
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
  );
}
