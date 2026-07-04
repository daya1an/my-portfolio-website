import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { profileData } from "../data/profile";

const getAdaptiveFontSize = (text: string) => {
  const length = text.length;
  const size = 2.5 - length * 0.03;
  return `${Math.max(1.25, Math.min(2.25, size))}rem`;
};

const About: React.FC = () => {
  return (
    <SectionContainer id="about" title="About" subtitle="A bit about me and what I do.">
      <div className="grid md:grid-cols-5 gap-10 md:gap-14">
        <div className="md:col-span-3 space-y-5">
          {profileData.bio.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-muted-foreground leading-relaxed text-justify"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {profileData.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.45,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -4,
                scale: 1.03,
                boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              }}
              whileTap={{ scale: 0.98 }}
              className="border border-border rounded-lg p-3 text-center bg-background hover:bg-muted/50 transition-colors duration-300 cursor-default"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.15, duration: 0.35 }}
                style={{ fontSize: getAdaptiveFontSize(stat.value) }}
                className="font-bold text-foreground mb-1 break-words"
              >
                {stat.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.22, duration: 0.3 }}
                className="text-xs text-muted-foreground uppercase tracking-wider font-medium"
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
