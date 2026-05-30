"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { GradientText } from "./gradient-text";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-[#8A8F98] uppercase">
              Now in Public Beta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1,
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-[-0.03em] leading-[0.95] mb-6"
          >
            <GradientText>
              Build software
            </GradientText>
            <br />
            <GradientText variant="shimmer">
              at the speed of thought
            </GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="text-base sm:text-lg md:text-xl text-[#8A8F98] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Z.ai brings AI-powered intelligence to every step of your development
            workflow. Ship faster with contextual assistance, intelligent
            automation, and precision tooling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#5E6AD2] px-6 py-3 rounded-lg hover:bg-[#6872D9] transition-all duration-200 shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_1px_rgba(94,106,210,0.6),0_6px_16px_rgba(94,106,210,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:scale-[0.98] group"
            >
              Start Building
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#EDEDEF] bg-white/[0.05] px-6 py-3 rounded-lg hover:bg-white/[0.08] transition-all duration-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_0_20px_rgba(94,106,210,0.1)] active:scale-[0.98] group"
            >
              <Play className="w-4 h-4 text-[#5E6AD2]" />
              Watch Demo
            </a>
          </motion.div>

          {/* Hero visual - Mock interface */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.5,
            }}
            className="mt-16 sm:mt-20 md:mt-24 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0a0c] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_60px_rgba(0,0,0,0.6),0_0_100px_rgba(94,106,210,0.08)]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-md bg-white/[0.03] text-xs text-[#8A8F98] font-mono">
                    z.ai — workspace
                  </div>
                </div>
              </div>

              {/* Mock editor content */}
              <div className="p-6 font-mono text-sm leading-7 min-h-[300px] sm:min-h-[400px]">
                <div className="flex gap-4">
                  {/* Line numbers */}
                  <div className="text-white/10 select-none text-right w-8 shrink-0">
                    {Array.from({ length: 14 }, (_, i) => (
                      <div key={i}>{i + 1}</div>
                    ))}
                  </div>
                  {/* Code */}
                  <div className="flex-1 overflow-x-auto">
                    <div>
                      <span className="text-[#C678DD]">import</span>{" "}
                      <span className="text-[#EDEDEF]">{"{ AI }"}</span>{" "}
                      <span className="text-[#C678DD]">from</span>{" "}
                      <span className="text-[#98C379]">&apos;@z.ai/sdk&apos;</span>
                    </div>
                    <div className="text-white/5">{"\n"}</div>
                    <div>
                      <span className="text-[#C678DD]">const</span>{" "}
                      <span className="text-[#61AFEF]">agent</span>{" "}
                      <span className="text-[#EDEDEF]">=</span>{" "}
                      <span className="text-[#C678DD]">new</span>{" "}
                      <span className="text-[#E5C07B]">AI</span>
                      <span className="text-[#EDEDEF]">{"({"}</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[#E06C75]">model</span>
                      <span className="text-[#EDEDEF]">:</span>{" "}
                      <span className="text-[#98C379]">&apos;z-4-turbo&apos;</span>
                      <span className="text-[#EDEDEF]">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[#E06C75]">context</span>
                      <span className="text-[#EDEDEF]">:</span>{" "}
                      <span className="text-[#98C379]">&apos;full-repo&apos;</span>
                      <span className="text-[#EDEDEF]">,</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[#E06C75]">tools</span>
                      <span className="text-[#EDEDEF]">:</span>{" "}
                      <span className="text-[#EDEDEF]">[</span>
                      <span className="text-[#98C379]">&apos;search&apos;</span>
                      <span className="text-[#EDEDEF]">,</span>{" "}
                      <span className="text-[#98C379]">&apos;deploy&apos;</span>
                      <span className="text-[#EDEDEF]">,</span>{" "}
                      <span className="text-[#98C379]">&apos;debug&apos;</span>
                      <span className="text-[#EDEDEF]">],</span>
                    </div>
                    <div>
                      <span className="text-[#EDEDEF]">{"})"}</span>
                    </div>
                    <div className="text-white/5">{"\n"}</div>
                    <div>
                      <span className="text-[#5E6AD2]">{"// AI writes, reviews, and ships code"}</span>
                    </div>
                    <div>
                      <span className="text-[#C678DD]">const</span>{" "}
                      <span className="text-[#61AFEF]">result</span>{" "}
                      <span className="text-[#EDEDEF]">=</span>{" "}
                      <span className="text-[#C678DD]">await</span>{" "}
                      <span className="text-[#61AFEF]">agent</span>
                      <span className="text-[#EDEDEF]">.</span>
                      <span className="text-[#61AFEF]">build</span>
                      <span className="text-[#EDEDEF]">(</span>
                    </div>
                    <div className="pl-6">
                      <span className="text-[#98C379]">&apos;Add authentication flow&apos;</span>
                    </div>
                    <div>
                      <span className="text-[#EDEDEF]">)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none" />
            </div>

            {/* Ambient glow behind the mock interface */}
            <div className="absolute -inset-4 bg-[#5E6AD2]/5 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
