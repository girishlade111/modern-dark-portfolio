"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { GradientText } from "./gradient-text";

export function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-gradient-to-b from-white/[0.08] to-white/[0.02]"
        >
          {/* Inner glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#5E6AD2]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 md:px-20 md:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
              <GradientText>Ready to build faster?</GradientText>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#8A8F98] max-w-xl mx-auto leading-relaxed mb-10">
              Join thousands of developers who ship better software, faster.
              Start for free — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#5E6AD2] px-6 py-3 rounded-lg hover:bg-[#6872D9] transition-all duration-200 shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_1px_rgba(94,106,210,0.6),0_6px_16px_rgba(94,106,210,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:scale-[0.98] group"
              >
                Start Building Free
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#EDEDEF] bg-white/[0.05] px-6 py-3 rounded-lg hover:bg-white/[0.08] transition-all duration-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_0_20px_rgba(94,106,210,0.1)] active:scale-[0.98]"
              >
                Talk to Sales
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
