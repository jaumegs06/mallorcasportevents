"use client";

import { motion } from "framer-motion";
import { Check, Zap, Crown, Sparkles } from "lucide-react";

interface TicketTier {
  id: number;
  name: string;
  price: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: string[];
  color: string;
}

const Tickets = () => {
  const tickets: TicketTier[] = [
    {
      id: 1,
      name: "GENERAL",
      price: "199€",
      icon: <Zap size={32} />,
      color: "neon-green",
      features: [
        "Acceso a todas las sesiones",
        "Material del evento",
        "Certificado de asistencia",
        "Networking Coffee Break",
        "Acceso a zona de exhibiciones",
      ],
    },
    {
      id: 2,
      name: "VIP",
      price: "399€",
      icon: <Crown size={32} />,
      popular: true,
      color: "neon-cyan",
      features: [
        "Todo lo de General +",
        "Asientos preferenciales",
        "Meet & Greet con speakers",
        "Almuerzo premium incluido",
        "Kit VIP exclusivo",
        "Acceso a afterparty",
        "Descuentos en partners",
      ],
    },
    {
      id: 3,
      name: "PREMIUM",
      price: "699€",
      icon: <Sparkles size={32} />,
      color: "neon-orange",
      features: [
        "Todo lo de VIP +",
        "Masterclass privada exclusiva",
        "Sesión 1-on-1 con speaker",
        "Pase anual a eventos fitness",
        "Pack premium de merchandising",
        "Cena de gala exclusiva",
        "Programa nutricional personalizado",
      ],
    },
  ];

  const getColorClasses = (color: string, isPopular?: boolean) => {
    const colors = {
      "neon-green": {
        border: "border-[--color-neon-green]/40",
        hoverBorder: "hover:border-[--color-neon-green]",
        text: "text-[--color-neon-green]",
        bg: "bg-[--color-neon-green]",
      },
      "neon-cyan": {
        border: "border-[--color-neon-cyan]/40",
        hoverBorder: "hover:border-[--color-neon-cyan]",
        text: "text-[--color-neon-cyan]",
        bg: "bg-[--color-neon-cyan]",
      },
      "neon-orange": {
        border: "border-[--color-neon-orange]/40",
        hoverBorder: "hover:border-[--color-neon-orange]",
        text: "text-[--color-neon-orange]",
        bg: "bg-[--color-neon-orange]",
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="tickets" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[--color-neon-orange]/10 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="gradient-neon-text">TICKETS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Elige tu experiencia y asegura tu lugar en el evento del año
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-[--color-neon-orange]/30">
            <div className="w-2 h-2 rounded-full bg-[--color-neon-orange] animate-pulse"></div>
            <span className="text-sm font-bold text-[--color-neon-orange]">
              ¡ÚLTIMAS PLAZAS DISPONIBLES!
            </span>
          </div>
        </motion.div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => {
            const colorClasses = getColorClasses(ticket.color, ticket.popular);

            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: ticket.popular ? 1.08 : 1.05, y: -10 }}
                className={`relative ${ticket.popular ? "md:scale-105 md:z-10" : ""}`}
              >
                {/* Popular Badge */}
                {ticket.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-6 py-2 rounded-full bg-[--color-neon-cyan] text-black font-black text-xs uppercase tracking-wider">
                      Más Popular
                    </div>
                  </div>
                )}

                <div
                  className={`glass rounded-3xl p-8 border-2 ${colorClasses.border} ${colorClasses.hoverBorder} transition-all duration-300 h-full flex flex-col ${ticket.popular ? "shadow-2xl shadow-[--color-neon-cyan]/30" : ""
                    }`}
                >
                  {/* Icon */}
                  <div className={`${colorClasses.text} mb-4`}>{ticket.icon}</div>

                  {/* Tier Name */}
                  <h3 className="text-3xl font-black tracking-tight mb-2 text-white">
                    {ticket.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="text-5xl font-black gradient-neon-text">
                      {ticket.price}
                    </div>
                    <div className="text-sm text-gray-500 font-semibold mt-1">
                      por persona
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colorClasses.bg} flex items-center justify-center mt-0.5`}>
                          <Check size={14} className="text-black font-bold" />
                        </div>
                        <span className="text-gray-300 text-sm font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-full font-black text-lg transition-all duration-300 ${ticket.popular
                        ? "bg-[--color-neon-cyan] text-black hover:shadow-xl hover:shadow-[--color-neon-cyan]/50"
                        : `glass border-2 ${colorClasses.border} text-white ${colorClasses.hoverBorder}`
                      }`}
                  >
                    COMPRAR AHORA
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-sm text-gray-500"
        >
          <p>Todos los precios incluyen IVA • Cancelación gratuita hasta 30 días antes del evento</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tickets;
