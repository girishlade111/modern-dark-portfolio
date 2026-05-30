"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "Blog", href: "#blog" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          isScrolled
            ? "bg-[#050506]/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-[#5E6AD2] flex items-center justify-center shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3)]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M7 1L13 4V10L7 13L1 10V4L7 1Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-[#EDEDEF] font-semibold text-base tracking-tight">
                Z.ai
              </span>
            </a>

            {/* Desktop navigation links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200 rounded-md hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors duration-200 px-3 py-1.5"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-[#5E6AD2] px-4 py-2 rounded-lg hover:bg-[#6872D9] transition-all duration-200 shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_1px_rgba(94,106,210,0.6),0_6px_16px_rgba(94,106,210,0.4),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-[#8A8F98] hover:text-[#EDEDEF] transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#050506]/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors rounded-md hover:bg-white/[0.05]"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/[0.06] my-2" />
              <a
                href="#"
                className="px-3 py-2.5 text-sm text-[#8A8F98] hover:text-[#EDEDEF] transition-colors"
              >
                Sign in
              </a>
              <a
                href="#"
                className="mt-1 inline-flex items-center justify-center gap-1.5 text-sm font-medium text-white bg-[#5E6AD2] px-4 py-2.5 rounded-lg hover:bg-[#6872D9] transition-all duration-200 shadow-[0_0_0_1px_rgba(94,106,210,0.5),0_4px_12px_rgba(94,106,210,0.3),inset_0_1px_0_0_rgba(255,255,255,0.2)] active:scale-[0.98]"
              >
                Get Started
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
