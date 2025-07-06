"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HowSection() {
  return (
    <section id="contacto" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="relative h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/659c1436fe4d984933d761c9/2b0a3121-542e-4acf-946b-59f90997d9d4/tempImagezp54Fv.jpg"
            alt="Team collaboration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">¿Cómo Ayudar?</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            <strong>Comparte nuestra misión.</strong>
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Si cada persona contribuye con su granito de arena, podremos alcanzar nuestro objetivo.
            Tal vez conozca alguna empresa dispuesta a donar computadoras que ya no utilicen, o
            sepa de un espacio donde podamos difundir nuestro mensaje. En ese caso, le invitamos a contactarnos.
          </p>
          <motion.a
            href="mailto:computers.quetzal@gmail.com"
                            className="inline-block border-2 border-[#00977E] text-[#00977E] hover:bg-[#00977E] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 