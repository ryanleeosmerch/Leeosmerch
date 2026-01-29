"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  y = 8,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
