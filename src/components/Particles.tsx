"use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
};

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = 0;
    let height = 0;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const initSize = () => {
      width = canvas.clientWidth || canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.clientHeight || canvas.parentElement?.clientHeight || window.innerHeight / 3;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const createParticles = (count = 80) => {
      const particles: Particle[] = [];
      for (let i = 0; i < count; i++) {
        // much smaller particle base size
        const size = Math.random() * 0.6 + 0.18;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size,
          color: Math.random() > 0.6 ? "rgba(255,255,255,0.95)" : "rgba(200,200,200,0.55)",
        });
      }
      particlesRef.current = particles;
    };

    const onResize = () => {
      initSize();
      // reposition particles within new bounds
      particlesRef.current.forEach((p) => {
        p.x = Math.max(0, Math.min(p.x, width));
        p.y = Math.max(0, Math.min(p.y, height));
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => {
      mouseRef.current = null;
    };

    initSize();
    createParticles(100);

    window.addEventListener("resize", onResize);
    // track mouse globally so canvas doesn't block pointer events
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    const animate = () => {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, width, height);

      // apply small global drift for smooth motion
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // gentle random acceleration
        p.vx += (Math.random() - 0.5) * 0.03;
        p.vy += (Math.random() - 0.5) * 0.03;

        // cap velocity for smooth motion
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = 0.9;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // mouse interaction: repel when near
        const mouse = mouseRef.current;
        if (mouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 100;
          if (dist < radius && dist > 0.01) {
            const force = (1 - dist / radius) * 0.8; // stronger near cursor
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // draw
        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
        const c = p.color;
        g.addColorStop(0, c);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
