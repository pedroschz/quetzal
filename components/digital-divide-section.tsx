"use client";

import { motion } from "framer-motion";

export function DigitalDivideSection() {
  return (
    <section id="digital-divide" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          La brecha digital es un muro que divide el talento de la oportunidad.
          Y estamos aquí para{" "}
                          <span className="text-[#00977E] underline decoration-4 underline-offset-4">
            DERRUMBARLO
          </span>
          .
        </motion.h2>
      </div>
    </section>
  );
} 