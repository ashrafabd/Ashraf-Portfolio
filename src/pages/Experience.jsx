import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Calendar, ChevronRight } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { experiences, experienceFilters } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { viewportOnce } from "@/lib/motion";

export default function Experience() {
  usePageSEO({
    title: "Experience",
    description:
      "Professional experience timeline for Ashraf Muneer Abd Alkhaliq, Software Quality Assurance Engineer.",
  });

  const [filter, setFilter] = useState("All");
  const [activeId, setActiveId] = useState(experiences[0].id);

  const filtered =
    filter === "All"
      ? experiences
      : experiences.filter((e) => e.category === filter);

  const active = experiences.find((e) => e.id === activeId) || filtered[0];

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Career"
            title="Experience"
            description="A track record of elevating quality across startups and enterprise technology companies."
          />

          <FilterTabs
            filters={experienceFilters}
            active={filter}
            onChange={(f) => {
              setFilter(f);
              const next =
                f === "All"
                  ? experiences[0]
                  : experiences.find((e) => e.category === f);
              if (next) setActiveId(next.id);
            }}
            className="mb-14"
          />

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {filtered.map((exp) => (
                <motion.button
                  key={exp.id}
                  type="button"
                  onClick={() => setActiveId(exp.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-200 ${
                    activeId === exp.id
                      ? "glass-card border-indigo-500/30 shadow-md"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{exp.role}</p>
                      <p className="text-sm text-zinc-500 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        activeId === exp.id
                          ? "text-indigo-500 rotate-90"
                          : "text-zinc-400"
                      }`}
                    />
                  </div>
                  <p className="text-xs text-zinc-500 mt-2">{exp.duration}</p>
                </motion.button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card hover={false} className="!p-8 lg:!p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <Badge>{active.category}</Badge>
                      <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                        <Building2 className="w-4 h-4" />
                        {active.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-zinc-500">
                        <Calendar className="w-4 h-4" />
                        {active.duration}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-6">
                      {active.role}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {active.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-500 mb-4">
                          Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {active.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2"
                            >
                              <span className="text-indigo-500 shrink-0">
                                ·
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-zinc-500 mb-4">
                          Achievements
                        </h4>
                        <ul className="space-y-3">
                          {active.achievements.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2"
                            >
                              <span className="text-indigo-500 shrink-0">
                                ✓
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportOnce}
            className="hidden lg:block mt-16 relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent" />
            <div className="pl-16 space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[3.25rem] w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-zinc-950" />
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                    {exp.duration}
                  </p>
                  <p className="font-semibold">
                    {exp.role} at {exp.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
