"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Heart, Bike, Zap, Award, Route, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "../../../components/madrid-sevilla/CountdownTimer";
import StagesMap from "../../../components/madrid-sevilla/StagesMap";
import FaqSection from "../../../components/madrid-sevilla/FaqSection";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function MadridSevillaPage() {
  const stages = [
    {
      number: 1,
      title: "Madrid → Ciudad Real",
      distance: "200 KM",
      description: "Salida épica desde la capital hacia tierras manchegas"
    },
    {
      number: 2,
      title: "Ciudad Real → Córdoba",
      distance: "200 KM",
      description: "El tramo más exigente del recorrido ultrafondo"
    },
    {
      number: 3,
      title: "Córdoba → Sevilla",
      distance: "150 KM",
      description: "La llegada triunfal a la capital andaluza"
    }
  ];

  const ambassadors = [
    {
      name: "Mavi García",
      role: "Ciclista Profesional",
      image: "/madrid-sevilla/embajador-mavi.png",
      description: "Referente del ciclismo español femenino"
    },
    {
      name: "Mario Mola",
      role: "Triatleta Olímpico",
      image: "/madrid-sevilla/embajador-mario.png",
      description: "3x Campeón del Mundo de Triatlón"
    },
    {
      name: "Alejandro Sánchez",
      role: "Ultra Ciclista",
      image: "/madrid-sevilla/embajador-alejandro.png",
      description: "Especialista en pruebas de ultrafondo"
    }
  ];

  const sponsors = [
    { name: "AECC", logo: "🎗️" },
    { name: "Viding", logo: "🚴" },
    { name: "Gobik", logo: "👕" },
    { name: "Generali", logo: "🛡️" },
    { name: "MSE", logo: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#ff6b35] via-[#ec4899] to-[#1e3a8a] rounded-full flex items-center justify-center">
                <Heart size={24} className="text-white fill-white" />
              </div>
              <div className="text-xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-[#ff6b35] via-[#ec4899] to-[#1e3a8a] bg-clip-text text-transparent">
                  RUTA ULTRAFONDO SOLIDARIA
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {['PROPÓSITO', 'ETAPAS', 'PARTICIPAR', 'EMBAJADORES'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-bold text-gray-700 hover:text-[#ec4899] transition-colors"
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => scrollToSection('participar')}
                className="px-6 py-3 bg-gradient-to-r from-[#ff6b35] to-[#ec4899] text-white font-black rounded-full hover:shadow-xl transition-all"
              >
                SÚMATE AL RETO
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="/madrid-sevilla/hero.png"
            alt="Ruta Madrid Sevilla"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 leading-none">
              <span className="text-white">RUTA</span>
              <span className="block bg-gradient-to-r from-[#ff6b35] via-[#ffd93d] to-[#ec4899] bg-clip-text text-transparent">
                ULTRAFONDO
              </span>
              <span className="block text-white">SOLIDARIA</span>
            </h1>
            <p className="text-3xl sm:text-4xl text-[#ffd93d] mb-4 font-black">
              MADRID - SEVILLA | 550KM
            </p>
            <p className="text-2xl text-white/90 mb-4 font-bold">
              16-18 OCTUBRE 2026
            </p>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              Uniendo dos ciudades en un reto épico por el ciclismo femenino y la lucha contra el cáncer
            </p>

            {/* Countdown */}
            <div className="mb-12">
              <CountdownTimer />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('participar')}
                className="px-10 py-5 bg-gradient-to-r from-[#ff6b35] to-[#ec4899] text-white font-black text-xl rounded-full shadow-2xl hover:shadow-[#ec4899]/50 transition-all"
              >
                SÚMATE AL RETO (DONAR O PARTICIPAR)
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('propósito')}
                className="px-10 py-5 border-4 border-white text-white font-black text-xl rounded-full hover:bg-white hover:text-[#ff6b35] transition-all"
              >
                CONOCE MÁS
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gradient-to-r from-[#1e3a8a] via-[#ec4899] to-[#ff6b35] text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Route size={40} />, value: "550 KM", label: "DE SOLIDARIDAD" },
              { icon: <Calendar size={40} />, value: "3 DÍAS", label: "16-18 OCTUBRE" },
              { icon: <Heart size={40} />, value: "1€ = 1KM", label: "CADA KILÓMETRO CUENTA" },
              { icon: <Users size={40} />, value: "ÚNETE", label: "A LA CAUSA" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="mb-3">{stat.icon}</div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-sm opacity-90 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* El Propósito Section */}
      <section id="propósito" className="py-24 bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[#ff6b35] via-[#ec4899] to-[#1e3a8a] bg-clip-text text-transparent">
                EL PROPÓSITO
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Unimos Madrid y Sevilla para dar <span className="font-black text-[#ec4899]">visibilidad al ciclismo femenino</span> y recaudar fondos para la <span className="font-black text-[#ec4899]">Asociación Española Contra el Cáncer</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-[#ec4899] hover:shadow-[#ec4899]/30 transition-all group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#ec4899] to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart size={48} className="text-white fill-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">LUCHA CONTRA EL CÁNCER</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada kilómetro recorrido, cada donación y cada gesto de apoyo contribuye directamente a la investigación y ayuda a pacientes con cáncer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-[#ff6b35] hover:shadow-[#ff6b35]/30 transition-all group"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#ff6b35] to-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bike size={48} className="text-white" />
              </div>
              <h3 className="text-3xl font-black mb-4 text-gray-900">CICLISMO FEMENINO</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reivindicamos la igualdad en el deporte y ponemos en el centro a las grandes campeonas del ciclismo español y mundial.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mapa de Etapas Section */}
      <section id="etapas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 text-gray-900">
              <span className="bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] bg-clip-text text-transparent">
                EL RECORRIDO
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              550 kilómetros divididos en 3 etapas épicas de ultrafondo
            </p>
          </motion.div>

          <div className="mb-12">
            <StagesMap />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-4 border-gray-200 hover:border-[#ff6b35] transition-all hover:shadow-2xl">
                  {/* Número de Etapa */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#ff6b35] to-[#ec4899] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <span className="text-3xl font-black text-white">{stage.number}</span>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-2xl font-black mb-3 text-gray-900">{stage.title}</h3>
                    <div className="text-5xl font-black mb-4 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] bg-clip-text text-transparent">
                      {stage.distance}
                    </div>
                    <p className="text-gray-600 text-lg">{stage.description}</p>
                  </div>

                  {/* Icono de ruta */}
                  <div className="mt-6 flex justify-end">
                    <Route size={32} className="text-gray-300 group-hover:text-[#ff6b35] transition-colors" />
                  </div>
                </div>

                {/* Conector entre etapas */}
                {index < stages.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ffd93d] z-10"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Total Distance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-[#1e3a8a] to-[#ec4899] text-white px-12 py-6 rounded-full shadow-2xl">
              <span className="text-2xl font-bold mr-4">DISTANCIA TOTAL:</span>
              <span className="text-5xl font-black">550 KM</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Participar Section */}
      <section id="participar" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[#1e3a8a] via-[#ec4899] to-[#ff6b35] bg-clip-text text-transparent">
                ¿CÓMO PARTICIPAR?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dos formas de ser parte de este reto épico y solidario
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Opción A: Presencial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-[#ec4899]/30 transition-all group border-4 border-transparent hover:border-[#ec4899]"
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ec4899] to-pink-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <Bike size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#ec4899] uppercase tracking-wider mb-1">Opción A</div>
                  <h3 className="text-3xl font-black text-gray-900">PRESENCIAL</h3>
                </div>
              </div>

              <h4 className="text-2xl font-black mb-4 text-[#ec4899]">"PEDALEA POR ELLAS"</h4>

              <div className="bg-gradient-to-r from-[#ec4899] to-pink-500 text-white p-6 rounded-2xl mb-6">
                <div className="text-center">
                  <div className="text-5xl font-black mb-2">1€ = 1KM</div>
                  <div className="text-lg font-semibold">Cada kilómetro cuenta</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Únete físicamente al recorrido Madrid-Sevilla",
                  "Participa en una, dos o las tres etapas",
                  "Recibe equipamiento oficial Gobik",
                  "Asistencia técnica y logística completa",
                  "Certificado de participación solidaria"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#ec4899] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart size={14} className="text-white fill-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#ec4899] to-pink-600 text-white font-black text-lg rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                INSCRÍBETE PRESENCIAL
              </motion.button>
            </motion.div>

            {/* Opción B: Virtual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-[#1e3a8a]/30 transition-all group border-4 border-transparent hover:border-[#1e3a8a]"
            >
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-blue-600 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                  <Zap size={40} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-black text-[#1e3a8a] uppercase tracking-wider mb-1">Opción B</div>
                  <h3 className="text-3xl font-black text-gray-900">VIRTUAL / FILA 0</h3>
                </div>
              </div>

              <h4 className="text-2xl font-black mb-4 text-[#1e3a8a]">"DESDE CASA O TU GIMNASIO"</h4>

              <div className="bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white p-6 rounded-2xl mb-6">
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">ZWIFT + DONACIÓN</div>
                  <div className="text-lg font-semibold">Participa desde cualquier lugar</div>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Pedalea en Zwift durante las fechas del evento",
                  "Haz tu donación directa a la AECC",
                  "Forma parte de la comunidad virtual",
                  "Recibe tu diploma digital solidario",
                  "Participa en sorteos exclusivos"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#1e3a8a] to-blue-600 text-white font-black text-lg rounded-full shadow-lg hover:shadow-2xl transition-all"
              >
                ÚNETE VIRTUALMENTE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embajadores Section */}
      <section id="embajadores" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
              <span className="bg-gradient-to-r from-[#ff6b35] via-[#ffd93d] to-[#ec4899] bg-clip-text text-transparent">
                EMBAJADORES
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Grandes nombres del deporte español apoyan esta causa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ambassadors.map((ambassador, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[3/4]">
                  <Image
                    src={ambassador.image}
                    alt={ambassador.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-black mb-1">{ambassador.name}</h3>
                    <p className="text-[#ec4899] font-bold mb-2">{ambassador.role}</p>
                    <p className="text-sm text-gray-300">{ambassador.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-black mb-8 text-gray-400">CON EL APOYO DE</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-xl hover:shadow-2xl transition-all"
                >
                  {sponsor.logo}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-[#ff6b35] via-[#ec4899] to-[#1e3a8a] py-24 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black mb-8 leading-tight">
              ¿LISTO PARA EL RETO MÁS ÉPICO Y SOLIDARIO?
            </h2>
            <p className="text-2xl md:text-3xl mb-12 opacity-95 font-bold">
              550 kilómetros, 3 días, 1 causa: LUCHAR POR ELLAS
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-white text-[#ec4899] font-black text-2xl rounded-full shadow-2xl hover:shadow-white/50 transition-all"
              >
                INSCRÍBETE AHORA
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border-4 border-white text-white font-black text-2xl rounded-full hover:bg-white hover:text-[#ff6b35] transition-all"
              >
                HACER DONACIÓN
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Info */}
            <div>
              <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-[#ff6b35] to-[#ec4899] bg-clip-text text-transparent">
                RUTA ULTRAFONDO SOLIDARIA
              </h3>
              <p className="text-gray-400 mb-4">
                Madrid - Sevilla | 550KM
                <br />
                16-18 Octubre 2026
              </p>
            </div>

            {/* Enlaces */}
            <div>
              <h4 className="text-lg font-black mb-4 text-gray-300">ENLACES</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#proposito" className="hover:text-[#ec4899] transition-colors">El Propósito</a></li>
                <li><a href="#etapas" className="hover:text-[#ec4899] transition-colors">Etapas</a></li>
                <li><a href="#participar" className="hover:text-[#ec4899] transition-colors">Cómo Participar</a></li>
                <li><a href="#embajadores" className="hover:text-[#ec4899] transition-colors">Embajadores</a></li>
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="text-lg font-black mb-4 text-gray-300">SÍGUENOS</h4>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '▶️'].map((icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2 }}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl cursor-pointer hover:bg-gradient-to-r hover:from-[#ff6b35] hover:to-[#ec4899] transition-all"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p className="mb-2">
              Organizado por <span className="text-white font-bold">Mallorca Sport Events</span>
            </p>
            <p className="text-sm">
              © 2026 Ruta Ultrafondo Solidaria Madrid-Sevilla. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
