"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  GitBranch,
  Brain,
  Terminal,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SpotlightCard } from "./spotlight-card";
import { GradientText } from "./gradient-text";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Brain,
    title: "Context-Aware AI",
    description:
      "Understands your entire codebase, dependencies, and team patterns. Every suggestion is relevant, every fix is precise.",
    span: "col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2",
    size: "large",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description:
      "Sub-100ms inference with streaming. No waiting, no lag. Just flow.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    size: "small",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "SOC2 compliant. Your code never leaves your environment. Zero data retention.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    size: "small",
  },
  {
    icon: GitBranch,
    title: "Git Native",
    description:
      "Creates branches, writes commits, opens PRs. Works the way you already work.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    size: "small",
  },
  {
    icon: Terminal,
    title: "CLI & API",
    description:
      "Full programmatic access. Automate your workflow, integrate with your stack.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    size: "small",
  },
  {
    icon: Layers,
    title: "Multi-Model Support",
    description:
      "Switch between models seamlessly. Use the right AI for the right task.",
    span: "col-span-1 md:col-span-2 lg:col-span-2",
    size: "small",
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

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32"
    >
      {/* Section separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <span className="inline-flex items-center text-xs font-mono tracking-widest text-[#5E6AD2] uppercase mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
            <GradientText>Everything you need.</GradientText>
            <br />
            <span className="text-[#8A8F98]">
              Nothing you don&apos;t.
            </span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={feature.span}
            >
              <SpotlightCard
                className={cn(
                  "h-full",
                  feature.size === "large" ? "min-h-[320px] sm:min-h-[400px]" : "min-h-[200px] sm:min-h-[240px]"
                )}
                gradientBorder={feature.size === "large"}
              >
                <div
                  className={cn(
                    "flex flex-col h-full",
                    feature.size === "large" ? "p-6 sm:p-8" : "p-5 sm:p-6"
                  )}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center mb-4 sm:mb-5">
                    <feature.icon className="w-5 h-5 text-[#5E6AD2]" />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "font-semibold tracking-tight text-[#EDEDEF] mb-2",
                      feature.size === "large"
                        ? "text-xl sm:text-2xl"
                        : "text-lg"
                    )}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-[#8A8F98] leading-relaxed",
                      feature.size === "large" ? "text-base sm:text-lg" : "text-sm"
                    )}
                  >
                    {feature.description}
                  </p>

                  {/* CTA for large card */}
                  {feature.size === "large" && (
                    <div className="mt-auto pt-6">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1.5 text-sm text-[#5E6AD2] hover:text-[#6872D9] transition-colors group"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
