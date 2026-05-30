"use client";

import { useEffect, useRef } from "react";

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Layer 1: Base radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

      {/* Layer 2: Noise texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Layer 3: Animated gradient blobs */}
      {/* Primary blob - top center */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[1400px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(ellipse, rgba(94,106,210,0.4) 0%, rgba(94,106,210,0) 70%)",
          filter: "blur(150px)",
          animation: "float-primary 10s ease-in-out infinite",
        }}
      />

      {/* Secondary blob - left side */}
      <div
        className="absolute top-[10%] left-[-5%] w-[600px] h-[800px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.4) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)",
          filter: "blur(120px)",
          animation: "float-secondary 12s ease-in-out infinite",
        }}
      />

      {/* Tertiary blob - right side */}
      <div
        className="absolute top-[20%] right-[-5%] w-[500px] h-[700px] rounded-full opacity-12"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.35) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)",
          filter: "blur(100px)",
          animation: "float-tertiary 9s ease-in-out infinite",
        }}
      />

      {/* Bottom accent - pulsing */}
      <div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(94,106,210,0.25) 0%, transparent 70%)",
          filter: "blur(100px)",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
      />

      {/* Layer 4: Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Canvas for potential future effects */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-0" />
    </div>
  );
}
