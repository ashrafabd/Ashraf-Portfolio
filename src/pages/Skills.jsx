import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useTranslation } from "@/context/LocaleContext";
import { usePageSEO } from "@/hooks/usePageSEO";
import { skillCategories, certifications } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { SkillBar } from "@/components/ui/SkillBar";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Skills() {
  const t = useTranslation();

  usePageSEO({
    title: t.nav.skills,
    description: t.skills.description,
  });

  const relatedCerts = certifications.slice(0, 4);

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />

          <div className="space-y-16">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <motion.div
                key={category}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
              >
                <h3 className="font-display text-2xl font-semibold mb-8 text-center">
                  {category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {skills.map((skill, i) => (
                    <motion.div key={skill.name} variants={staggerItem}>
                      <Card hover={false}>
                        <SkillBar
                          name={skill.name}
                          level={skill.level}
                          delay={i * 0.05}
                        />
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow={t.skills.skillCards}
              title={t.skills.skillCards}
              description={t.skills.skillCardsDescription}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Object.values(skillCategories)
                .flat()
                .slice(0, 6)
                .map((skill) => (
                  <motion.div key={skill.name} variants={staggerItem}>
                    <Card className="text-center group cursor-default">
                      <div className="text-4xl font-display font-bold text-gradient mb-2">
                        {skill.level}%
                      </div>
                      <h4 className="font-semibold">{skill.name}</h4>
                      <div className="mt-4 h-1 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow={t.skills.verified}
              title={t.skills.verified}
              description={t.skills.verifiedDescription}
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {relatedCerts.map((cert) => (
                <motion.div key={cert.id} variants={staggerItem}>
                  <Card className="text-center">
                    <div className="w-14 h-14 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 font-bold text-indigo-600 dark:text-indigo-400 text-sm">
                      {cert.logo}
                    </div>
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <p className="text-xs text-zinc-500 mt-1">
                      {cert.organization}
                    </p>
                    <Badge variant="outline" className="mt-3">
                      <Award className="w-3 h-3 mr-1" />
                      {cert.date}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
