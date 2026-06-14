import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons'
import { usePageSEO } from '@/hooks/usePageSEO'
import { siteConfig } from '@/data/portfolio'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { fadeInUp, viewportOnce } from '@/lib/motion'

function WorldMap() {
  const locations = [
    { x: 22, y: 38, label: 'New York' },
    { x: 48, y: 32, label: 'London' },
    { x: 72, y: 45, label: 'Dubai' },
    { x: 85, y: 52, label: 'Singapore' },
    { x: 15, y: 55, label: 'Remote' },
  ]

  return (
    <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60">
      <svg viewBox="0 0 100 50" className="w-full h-full" aria-hidden="true">
        <defs>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[...Array(20)].map((_, i) => (
          <ellipse
            key={i}
            cx={10 + (i % 5) * 20}
            cy={10 + Math.floor(i / 5) * 12}
            rx="8"
            ry="5"
            fill="currentColor"
            className="text-zinc-200 dark:text-zinc-800"
          />
        ))}
        {locations.map((loc) => (
          <g key={loc.label}>
            <circle cx={loc.x} cy={loc.y} r="4" fill="url(#glow)" />
            <circle cx={loc.x} cy={loc.y} r="1.2" fill="#6366f1" />
          </g>
        ))}
      </svg>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <MapPin className="w-4 h-4 text-indigo-500" />
        {siteConfig.location}
      </div>
    </div>
  )
}

export default function Contact() {
  usePageSEO({
    title: 'Contact',
    description: 'Get in touch with Ashraf Abd for opportunities and collaborations.',
  })

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Connect"
            title="Contact"
            description="Have a role, project, or collaboration in mind? I'd love to hear from you."
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              {submitted ? (
                <Card hover={false} className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Thank you for reaching out. I&apos;ll get back to you within 48 hours.
                  </p>
                </Card>
              ) : (
                <Card hover={false}>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name
                        </label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={update('name')}
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={update('email')}
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="text-sm font-medium mb-2 block">
                        Company
                      </label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={update('company')}
                        placeholder="Your company (optional)"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        required
                        value={form.subject}
                        onChange={update('subject')}
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={form.message}
                        onChange={update('message')}
                        placeholder="Tell me about the opportunity..."
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              )}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.15 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-semibold text-lg mb-4">Social Links</h3>
                <div className="space-y-3">
                  {[
                    { icon: LinkedinIcon, label: 'LinkedIn', href: siteConfig.social.linkedin },
                    { icon: GithubIcon, label: 'GitHub', href: siteConfig.social.github },
                    { icon: Mail, label: 'Email', href: siteConfig.social.email },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-indigo-500/30 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-zinc-500">
                          {label === 'Email' ? siteConfig.email : 'Connect with me'}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Global Reach</h3>
                <WorldMap />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
