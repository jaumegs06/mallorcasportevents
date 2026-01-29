"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function StagesMap() {
    const cities = [
        { name: "Madrid", top: "10%", left: "50%" },
        { name: "Ciudad Real", top: "35%", left: "45%" },
        { name: "Córdoba", top: "65%", left: "40%" },
        { name: "Sevilla", top: "85%", left: "30%" }
    ];

    return (
        <div className="relative w-full max-w-lg mx-auto h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-inner border-4 border-white mb-16">
            {/* Abstract Map Background */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Espana_map_autonomous_communities.png/600px-Espana_map_autonomous_communities.png')] bg-cover bg-center grayscale" />

            {/* Route Path (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* Gradient definition */}
                <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ff6b35" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#1e3a8a" />
                    </linearGradient>
                </defs>
                <motion.path
                    d="M 256 50 Q 230 175 204 325 T 153 425"
                    fill="transparent"
                    stroke="url(#routeGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="10 5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>

            {/* Cities */}
            {cities.map((city, index) => (
                <motion.div
                    key={city.name}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
                    style={{ top: city.top, left: city.left }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.5, type: "spring" }}
                >
                    <div className="w-4 h-4 bg-white rounded-full border-4 border-[#ff6b35] shadow-lg mb-1" />
                    <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-bold shadow-md text-gray-800">
                        {city.name}
                    </span>
                </motion.div>
            ))}

            {/* Animated Moving Marker (Cyclist) */}
            <motion.div
                className="absolute top-0 left-0"
                animate={{
                    offsetDistance: "100%",
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    offsetPath: `path("M 256 50 Q 230 175 204 325 T 153 425")`, // Match the SVG path
                }}
            >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-[#ec4899]">
                    🚲
                </div>
            </motion.div>
        </div>
    );
}
