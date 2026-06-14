import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Clock } from "lucide-react";
import { useTranslation } from "@/context/LocaleContext";
import { usePageSEO } from "@/hooks/usePageSEO";
import { courses } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Courses() {
  const t = useTranslation();

  usePageSEO({
    title: t.nav.courses,
    description: t.courses.description,
  });

  const completed = courses.filter((c) => c.progress === 100).length;
  const inProgress = courses.filter((c) => c.progress < 100).length;

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow={t.courses.eyebrow}
            title={t.courses.title}
            description={t.courses.description}
          />

          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-14">
            {[
              { label: t.courses.totalCourses, value: courses.length },
              { label: t.courses.completed, value: completed },
              { label: t.courses.inProgress, value: inProgress },
            ].map((stat) => (
              <Card key={stat.label} hover={false} className="!p-4 text-center">
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{stat.label}</p>
              </Card>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-0"
          >
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                variants={staggerItem}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      course.progress === 100
                        ? "bg-indigo-500 text-white"
                        : "bg-zinc-200 dark:bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {course.progress === 100 ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>
                  {i < courses.length - 1 && (
                    <div className="w-px flex-1 min-h-[80px] bg-zinc-200 dark:bg-zinc-800" />
                  )}
                </div>

                <Card hover={false} className="flex-1 mb-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{course.name}</h3>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">
                        {course.provider} · {course.date}
                      </p>
                    </div>
                    {course.certificate && (
                      <Badge>
                        <BookOpen className="w-3 h-3 mr-1" />
                        {t.courses.certified}
                      </Badge>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
                      <span>{t.courses.progressLabel}</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${course.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
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
