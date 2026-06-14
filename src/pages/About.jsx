import { motion } from "framer-motion";
import { GraduationCap, Heart, Compass, Target } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { useTranslation } from "@/context/LocaleContext";
import { about } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const valueIcons = [Heart, Compass, Target, GraduationCap];

export default function About() {
  const t = useTranslation();

  usePageSEO({
    title: t.nav.about,
    description: t.about.story,
  });

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.story}
          />
        </div>
      </section>

      <section className="section-padding bg-zinc-50/80 dark:bg-zinc-900/30">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">
                {t.about.professionalJourney}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {about.journey}
              </p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="space-y-0"
            >
              {about.timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  variants={staggerItem}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                    {i < about.timeline.length - 1 && (
                      <div className="w-px flex-1 min-h-[60px] bg-zinc-200 dark:bg-zinc-800" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {item.year}
                    </p>
                    <h4 className="font-semibold mt-1">{item.title}</h4>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow={t.about.education}
            title={t.about.education}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {about.education.map((edu) => (
              <motion.div key={edu.degree} variants={staggerItem}>
                <Card>
                  <GraduationCap className="w-8 h-8 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm mt-1">
                    {edu.school} · {edu.year}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-sm">
                    {edu.detail}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-zinc-50/80 dark:bg-zinc-900/30">
        <div className="container-wide mx-auto">
          <SectionHeading eyebrow={t.about.values} title={t.about.values} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {about.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div key={value.title} variants={staggerItem}>
                  <Card className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                align="left"
                eyebrow={t.about.expertise}
                title={t.about.expertise}
              />
              <div className="flex flex-wrap gap-2">
                {about.expertise.map((item) => (
                  <Badge key={item} className="text-sm px-4 py-2">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow={t.about.future}
                title={t.about.future}
              />
              <ul className="space-y-4">
                {about.goals.map((goal, i) => (
                  <motion.li
                    key={goal}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
