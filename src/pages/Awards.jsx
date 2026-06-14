import { motion } from "framer-motion";
import { Trophy, Star } from "lucide-react";
import { useTranslation } from "@/context/LocaleContext";
import { usePageSEO } from "@/hooks/usePageSEO";
import { awards, awardStats } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/SkillBar";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const levelColors = {
  Company: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Department: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  Team: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  Community: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
};

export default function Awards() {
  const t = useTranslation();

  const formatLevel = (level) => {
    const label = t.awards.level[level.toLowerCase()];
    return label
      ? `${label} ${t.awards.levelSuffix}`
      : `${level} ${t.awards.levelSuffix}`;
  };

  usePageSEO({
    title: t.nav.awards,
    description: t.awards.description,
  });

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow={t.awards.eyebrow}
            title={t.awards.title}
            description={t.awards.description}
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {awardStats.map((stat, i) => {
              const awardStatKeys = [
                t.home.totalAwards,
                t.home.companyLevel,
                t.home.departmentLevel,
                t.home.community,
              ];
              return (
                <motion.div key={stat.label} variants={staggerItem}>
                  <StatCard label={awardStatKeys[i]} value={stat.value} />
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="space-y-6"
          >
            {awards.map((award, i) => (
              <motion.div key={award.id} variants={staggerItem}>
                <Card className="!p-0 overflow-hidden">
                  <div className="grid md:grid-cols-12">
                    <div className="md:col-span-3 h-32 md:h-auto bg-gradient-to-br from-indigo-500/20 to-violet-500/10 flex items-center justify-center">
                      <Trophy className="w-12 h-12 text-indigo-500/40" />
                    </div>
                    <div className="md:col-span-9 p-6 lg:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full ${levelColors[award.level]}`}
                        >
                          {formatLevel(award.level)}
                        </span>
                        <span className="text-sm text-zinc-500">
                          {award.date}
                        </span>
                      </div>
                      <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">
                        {award.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-4">
                        {award.organization}
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {award.description}
                      </p>
                      <div className="flex gap-1 mt-4">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 ${
                              j < 5 - (i % 2)
                                ? "text-amber-400 fill-amber-400"
                                : "text-zinc-300 dark:text-zinc-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
