"use client";

import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { Magnet } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BaseButtonProps = Omit<React.ComponentProps<typeof Button>, "asChild">;

interface MagnetizeButtonProps extends BaseButtonProps {
  particleCount?: number;
  attractRadius?: number;
  children?: React.ReactNode;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

function MagnetizeButton({
  className,
  particleCount = 12,
  attractRadius = 50,
  children,
  ...props
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = React.useState(false);
  const [particles, setParticles] = React.useState<Particle[]>([]);
  const particlesControl = useAnimation();

  React.useEffect(() => {
    const spread = attractRadius * 2;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * spread - attractRadius,
      y: Math.random() * spread - attractRadius,
    }));
    setParticles(newParticles);
  }, [particleCount, attractRadius]);

  const handleInteractionStart = React.useCallback(async () => {
    setIsAttracting(true);
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [particlesControl]);

  const handleInteractionEnd = React.useCallback(async () => {
    setIsAttracting(false);
    await particlesControl.start((index) => {
      const particle = particles[index];
      return {
        x: particle?.x ?? 0,
        y: particle?.y ?? 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      };
    });
  }, [particlesControl, particles]);

  return (
    <Button
      className={cn(
        "min-w-40 relative touch-none",
        "bg-violet-100 dark:bg-violet-900",
        "hover:bg-violet-200 dark:hover:bg-violet-800",
        "text-violet-600 dark:text-violet-300",
        "border border-violet-300 dark:border-violet-700",
        "transition-all duration-300",
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={particle.id}
          custom={index}
          initial={{ x: particle.x, y: particle.y }}
          animate={particlesControl}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            "bg-violet-400 dark:bg-violet-300",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40"
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        <Magnet
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isAttracting && "scale-110"
          )}
        />
        {children ?? (isAttracting ? "Attracting" : "Hover me")}
      </span>
    </Button>
  );
}

export { MagnetizeButton };
