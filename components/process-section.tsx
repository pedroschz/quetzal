"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Package, Settings, Search, Heart, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Package,
    title: "Recolección de Equipos",
    description: "Recibimos computadoras de empresas y particulares para darles una segunda vida.",
  },
  {
    icon: Settings,
    title: "Reacondicionamiento",
    description: "Nuestro equipo técnico restaura cada computadora, asegurando su perfecto funcionamiento.",
  },
  {
    icon: Search,
    title: "Selección de Estudiantes",
    description: "Identificamos a estudiantes con excelencia académica y necesidad económica.",
  },
  {
    icon: Heart,
    title: "Entrega y Transformación",
    description: "Entregamos las computadoras, abriendo un mundo de oportunidades para cada estudiante.",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proceso" className="py-24 bg-dark text-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-4">
            Nuestro Proceso de <span className="text-main">4 Pasos</span>
          </h2>
          <p className="text-lg text-light/80 max-w-3xl mx-auto">
            Desde la donación hasta la transformación, cada computadora sigue un
            cuidadoso proceso para garantizar el máximo impacto.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-light/10" aria-hidden="true" />

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex-1 text-right pr-12">
                {index % 2 === 0 && (
                  <div>
                    <h3 className="text-2xl font-bold font-heading mb-2">{step.title}</h3>
                    <p className="text-light/70">{step.description}</p>
                  </div>
                )}
              </div>
              
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-dark border-2 border-main flex items-center justify-center">
                <step.icon className="w-6 h-6 text-main" />
              </div>

              <div className="flex-1 pl-12">
                {index % 2 !== 0 && (
                  <div>
                    <h3 className="text-2xl font-bold font-heading mb-2">{step.title}</h3>
                    <p className="text-light/70">{step.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 