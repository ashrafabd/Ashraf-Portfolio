import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { useTranslation } from "@/context/LocaleContext";
import { usePageSEO } from "@/hooks/usePageSEO";
import { certifications, certProviders } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Certifications() {
  const t = useTranslation();

  usePageSEO({
    title: t.nav.certifications,
    description: t.certifications.description,
  });

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? certifications
      : certifications.filter((c) => c.provider === filter);

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow={t.certifications.eyebrow}
            title={t.certifications.title}
            description={t.certifications.description}
          />

          <FilterTabs
            filters={certProviders}
            active={filter}
            onChange={setFilter}
            className="mb-14"
          />

          <motion.div
            key={filter}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((cert) => (
              <motion.div key={cert.id} variants={staggerItem}>
                <Card className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400">
                      {cert.logo}
                    </div>
                    <Badge variant="outline">{cert.date}</Badge>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">
                    {cert.organization}
                  </p>

                  <div className="mt-auto space-y-3">
                    <p className="text-xs text-zinc-500 font-mono">
                      ID: {cert.credentialId}
                    </p>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" size="sm" className="w-full">
                        <Award className="w-4 h-4" />
                        {t.certifications.verify}
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </a>
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
