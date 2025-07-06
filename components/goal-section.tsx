"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GoalSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/659c1436fe4d984933d761c9/47c4eee6-4ffe-4a29-9f0a-14ceafbe04c8/tempImagezXaFQQ.jpg"
              alt="Team working"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
          <motion.div
            className="relative h-96 overflow-hidden rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/659c1436fe4d984933d761c9/7436d807-0c53-41de-825a-a02bee5814b0/computadora.jpg"
              alt="Computer donation"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
            Nuestra Meta para este 2025:
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                            Donar <span className="bg-[#00977E] text-white px-6 py-3 rounded-lg shadow-lg">125</span> computadoras.
          </h2>
        </motion.div>
      </div>
    </section>
  );
} 