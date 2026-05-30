"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SpotlightCard } from "./spotlight-card";
import { GradientText } from "./gradient-text";

const testimonials = [
  {
    quote:
      "Z.ai has fundamentally changed how our team ships code. What used to take days now takes hours.",
    author: "Sarah Chen",
    role: "Engineering Lead, Vercel",
    avatar: "SC",
  },
  {
    quote:
      "The context-awareness is unlike anything I've used. It actually understands my codebase.",
    author: "Marcus Rodriguez",
    role: "Senior Developer, Stripe",
    avatar: "MR",
  },
  {
    quote:
      "We deployed 3x more features last quarter. Z.ai doesn't replace engineers—it amplifies them.",
    author: "Emily Park",
    role: "CTO, Series B Startup",
    avatar: "EP",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center text-xs font-mono tracking-widest text-[#5E6AD2] uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            <GradientText>Loved by developers</GradientText>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.author} variants={itemVariants}>
              <SpotlightCard className="h-full">
                <div className="p-6 sm:p-8 flex flex-col h-full">
                  {/* Quote */}
                  <p className="text-base sm:text-lg text-[#EDEDEF] leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-[#5E6AD2]/20 border border-[#5E6AD2]/30 flex items-center justify-center text-xs font-semibold text-[#5E6AD2]">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#EDEDEF]">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-[#8A8F98]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
