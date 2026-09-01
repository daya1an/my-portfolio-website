import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionContainer from "./gaming-ui/SectionContainer";
import { skillsData, getIconUrl } from "../data/skills";

const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <SectionContainer
      id="skills"
      title="Technical Skills"
      subtitle="Technologies & tools I work with. (Touch/Hover for details)"
    >
      <div className="space-y-10">
        {skillsData.categories.map((category, catIdx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 16 }}  
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.06, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3
              className="text-xs tracking-widest uppercase mb-5 cursor-default transition-colors duration-300 font-semibold flex items-center gap-3"
              onMouseEnter={() => setHoveredCategory(category.name)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <span
                className={`transition-colors duration-300 ${
                  hoveredCategory === category.name ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {category.name}
              </span>
              <span className="flex-1 h-px bg-border" />
            </h3>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4">
              {category.skills.map((skill, skillIndex) => {
                const skillId = `${category.name}-${skill.name}`;
                const iconUrl = getIconUrl(skill);
                const isHovered = hoveredSkill === skillId;
                const isCategoryHovered = hoveredCategory === category.name;
                const showLabel = true;
                const isActive = isHovered || isCategoryHovered;

                return (
                  <motion.div
                    key={skill.name}
                    layout
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    animate={
                      isActive
                        ? { y: -4, scale: 1.03 }
                        : {
                            y: [0, -4, 0, -2, 0],
                            scale: [1, 1.03, 1, 1.02, 1],
                          }
                    }
                    transition={
                      isActive
                        ? { type: "spring", stiffness: 260, damping: 18 }
                        : {
                            duration: 2.6 + skillIndex * 0.13,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                            delay: skillIndex * 0.1,
                          }
                    }
                    className="flex flex-col items-center gap-2"
                    onMouseEnter={() => setHoveredSkill(skillId)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div
                      animate={
                        isActive
                          ? {
                              scale: 1.12,
                              y: -4,
                              rotate: 2.4,
                              borderColor: "rgba(255,255,255,0.32)",
                              backgroundColor: "rgba(148, 163, 184, 0.12)",
                              boxShadow: "0 0 0 1px rgba(148,163,184,0.18), 0 16px 34px rgba(59,130,246,0.18)",
                            }
                          : {
                              scale: [1, 1.08, 1.02, 1.1, 1],
                              y: [0, -3, 0, -2, 0],
                              rotate: [0, 1.2, 0, -1.2, 0],
                              borderColor: ["rgba(255,255,255,0.08)", "rgba(148,163,184,0.24)", "rgba(255,255,255,0.08)", "rgba(148,163,184,0.18)", "rgba(255,255,255,0.08)"],
                              backgroundColor: ["rgba(15, 23, 42, 0.08)", "rgba(59, 130, 246, 0.09)", "rgba(15, 23, 42, 0.08)", "rgba(96, 165, 250, 0.08)", "rgba(15, 23, 42, 0.08)"],
                            }
                      }
                      transition={
                        isActive
                          ? { duration: 0.28, ease: "easeOut" }
                          : {
                              duration: 2.8 + skillIndex * 0.18,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: skillIndex * 0.08,
                            }
                      }
                      className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg border flex items-center justify-center cursor-pointer"
                    >
                      <motion.div
                        animate={{
                          filter: isActive ? "brightness(1.12) saturate(1.15)" : "brightness(0.96) saturate(1)",
                          opacity: showLabel ? 1 : 0.72,
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex items-center justify-center"
                      >
                        {iconUrl ? (
                          <img
                            src={iconUrl}
                            alt={skill.name}
                            className="w-7 h-7 md:w-8 md:h-8 transition-all duration-300"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = "none";
                              (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                            }}
                          />
                        ) : null}
                        <span className={`text-xs font-semibold text-muted-foreground ${iconUrl ? "hidden" : ""}`}>
                          {skill.name.slice(0, 2).toUpperCase()}
                        </span>
                      </motion.div>
                    </motion.div>

                    <motion.span
                      initial={false}
                      animate={{
                        opacity: showLabel ? 1 : 1,
                        y: isActive ? -2 : [0, -2.5, 0, -1.5, 0],
                        color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                        letterSpacing: isActive ? "0.06em" : "0",
                      }}
                      transition={
                        isActive
                          ? { duration: 0.25, ease: "easeOut" }
                          : {
                              duration: 2.6 + skillIndex * 0.14,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: skillIndex * 0.09,
                            }
                      }
                      className="text-[11px] text-center font-medium leading-tight"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;
