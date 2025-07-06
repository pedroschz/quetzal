"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Estudiante de Ingeniería",
    content: "Gracias a Quetzal Computers pude completar mi carrera. La computadora que recibí me permitió estudiar programación y ahora trabajo en una empresa de tecnología. ¡Cambió mi vida!",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Estudiante de Preparatoria",
    content: "Antes de recibir mi computadora, tenía que caminar 2 horas para usar internet. Ahora puedo estudiar desde casa y mis calificaciones mejoraron increíblemente. ¡Gracias por creer en mí!",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    role: "Estudiante de Diseño",
    content: "Mi sueño era ser diseñadora gráfica, pero sin una computadora era imposible. Quetzal me dio la oportunidad de aprender a usar software de diseño y ahora tengo mi propio estudio creativo.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
            Historias que <span className="text-main">Inspiran</span>
          </h2>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            El impacto de una herramienta puede cambiar una vida. Estas son las voces de quienes han visto su futuro transformado.
          </p>
        </div>

        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence custom={currentIndex}>
            <motion.div
              key={currentIndex}
              className="absolute w-full max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="glass-dark rounded-2xl p-10 text-center border border-light/10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-main/20 flex items-center justify-center mb-4">
                  <Quote className="w-8 h-8 text-main" />
                </div>
                <p className="text-xl italic text-light mb-6">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <h3 className="font-bold text-lg font-heading text-light">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-light/70">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} className="p-3 rounded-full bg-main/20 text-main hover:bg-main/30 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-main' : 'bg-light/20 hover:bg-light/40'
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="p-3 rounded-full bg-main/20 text-main hover:bg-main/30 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 