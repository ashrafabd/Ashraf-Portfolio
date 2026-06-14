import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Shield,
  Target,
  Zap,
  Quote,
  ExternalLink,
} from 'lucide-react'
import heroGraphic from '@/assets/hero.png'
import { usePageSEO } from '@/hooks/usePageSEO'
import {
  siteConfig,
  stats,
  featuredSkills,
  projects,
  achievements,
  testimonials,
} from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatCard } from '@/components/ui/SkillBar'
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  slideInLeft,
  slideInRight,
  viewportOnce,
} from '@/lib/motion'

const iconMap = { shield: Shield, target: Target, zap: Zap }

export default function Home() {
  usePageSEO()

  const featuredProjects = projects.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding min-h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInLeft}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge className="mb-6">Available for opportunities</Badge>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 dark:text-white leading-[1.05]">
                {siteConfig.name.split(' ')[0]}
                <br />
                <span className="text-gradient">{siteConfig.name.split(' ')[1]}</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 font-medium">
                {siteConfig.title}
              </p>
              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                I help technology companies ship with confidence — building automation frameworks,
                API test suites, and quality cultures that scale with your product.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href={siteConfig.resumeUrl} download>
                  <Button size="lg">
                    <Download className="w-5 h-5" />
                    Download Resume
                  </Button>
                </a>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Get in Touch
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInRight}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass-card p-1">
                  <div className="w-full h-full rounded-[1.35rem] bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-zinc-900 flex items-end justify-center overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={heroGraphic}
                        alt=""
                        className="w-48 h-48 object-contain opacity-80"
                      />
                    </div>
                    <div className="relative z-10 w-full p-6 bg-gradient-to-t from-zinc-950/90 to-transparent">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-2xl font-bold text-white font-display shadow-lg">
                          A
                        </div>
                        <div>
                          <p className="font-semibold text-white">{siteConfig.name}</p>
                          <p className="text-sm text-zinc-400">{siteConfig.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 glass-card px-4 py-2 text-sm font-medium"
                >
                  7+ Years
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-2 text-sm font-medium"
                >
                  ISTQB Certified
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-zinc-50/80 dark:bg-zinc-900/30">
        <div className="container-wide mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem}>
                <StatCard label={stat.label} value={stat.value} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Expertise"
            title="Featured Skills"
            description="Core competencies honed across enterprise SaaS, fintech, and cloud platforms."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3"
          >
            {featuredSkills.map((skill) => (
              <motion.div key={skill} variants={staggerItem}>
                <Badge className="text-sm px-5 py-2.5">{skill}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-zinc-50/80 dark:bg-zinc-900/30">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Work"
            title="Featured Projects"
            description="Selected work demonstrating automation architecture, API quality, and engineering impact."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Card className="h-full flex flex-col">
                  <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 mb-5 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-indigo-500/40">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <Badge variant="outline" className="w-fit mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-zinc-500 dark:text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Impact"
            title="Featured Achievements"
            description="Measurable outcomes from quality engineering initiatives."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {achievements.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <motion.div key={item.title} variants={staggerItem}>
                  <Card>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-zinc-50/80 dark:bg-zinc-900/30">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Leaders Say"
            description="Feedback from engineering managers and directors I've partnered with."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.author} variants={staggerItem}>
                <Card hover={false} className="h-full">
                  <Quote className="w-8 h-8 text-indigo-500/30 mb-4" />
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold">{t.author}</p>
                    <p className="text-sm text-zinc-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                Let&apos;s build quality together
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8">
                Open to senior QA roles, consulting engagements, and speaking opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">
                    Start a Conversation
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
                <a href={siteConfig.resumeUrl} download>
                  <Button variant="outline" size="lg">
                    <Download className="w-4 h-4" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
