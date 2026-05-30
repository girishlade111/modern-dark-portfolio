"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { GradientText } from "./gradient-text";

const stats = [
  { value: "50K+", label: "Developers" },
  { value: "2M+", label: "Commits Generated" },
  { value: "99.9%", label: "Uptime" },
  { value: "<100ms", label: "Response Time" },
];

const logos = [
  "Vercel",
  "Stripe",
  "Linear",
  "Notion",
  "Figma",
  "Supabase",
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(spanRef, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Extract numeric part
    const numericMatch = target.match(/[\d.]+/);
    if (!numericMatch) {
      // Use rAF to avoid synchronous setState in effect
      requestAnimationFrame(() => {
        if (spanRef.current) spanRef.current.textContent = target;
      });
      return;
    }
    const num = parseFloat(numericMatch[0]);
    const prefix = target.substring(0, target.indexOf(numericMatch[0]));
    const remaining = target.substring(target.indexOf(numericMatch[0]) + numericMatch[0].length);
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = num * eased;

      if (spanRef.current) {
        if (Number.isInteger(num)) {
          spanRef.current.textContent = `${prefix}${Math.floor(current)}${remaining}`;
        } else {
          spanRef.current.textContent = `${prefix}${current.toFixed(1)}${remaining}`;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else if (spanRef.current) {
        spanRef.current.textContent = target;
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={spanRef}>0</span>;
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32">
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#EDEDEF] mb-2">
                <GradientText variant="accent">
                  <AnimatedCounter target={stat.value} />
                </GradientText>
              </div>
              <div className="text-sm sm:text-base text-[#8A8F98]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted by section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
          className="text-center"
        >
          <p className="text-xs font-mono tracking-widest text-[#8A8F98] uppercase mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.08,
                }}
                className="text-[#8A8F98]/50 hover:text-[#8A8F98] transition-colors duration-300 text-lg sm:text-xl font-semibold tracking-tight"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
