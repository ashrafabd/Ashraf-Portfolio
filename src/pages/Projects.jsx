import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Search } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { usePageSEO } from "@/hooks/usePageSEO";
import { projects, projectFilters } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { SearchInput } from "@/components/ui/SearchInput";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export default function Projects() {
  usePageSEO({
    title: "Projects",
    description:
      "QA and automation projects by Ashraf Muneer Abd Alkhaliq — frameworks, APIs, and quality tooling.",
  });

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchFilter = filter === "All" || p.category === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  return (
    <div>
      <section className="section-padding pt-24 lg:pt-32">
        <div className="container-wide mx-auto">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects"
            description="A curated showcase of automation frameworks, API testing suites, and quality engineering tools."
          />

          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10 max-w-3xl mx-auto">
            <FilterTabs
              filters={projectFilters}
              active={filter}
              onChange={setFilter}
            />
          </div>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search projects, technologies..."
            className="max-w-md mx-auto mb-14"
          />

          <motion.div
            key={filter + search}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filtered.map((project) => (
              <motion.div key={project.id} variants={staggerItem}>
                <Card className="h-full !p-0 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-transparent flex items-center justify-center relative">
                    <span className="text-6xl font-display font-bold text-indigo-500/20">
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                    <Badge className="absolute top-4 left-4">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-3 mb-6 text-sm">
                      <div>
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          Challenge:{" "}
                        </span>
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {project.challenges}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">
                          Solution:{" "}
                        </span>
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {project.solutions}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-indigo-600 dark:text-indigo-400">
                          Result:{" "}
                        </span>
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {project.results}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="secondary" size="sm">
                            <GithubIcon className="w-4 h-4" />
                            GitHub
                          </Button>
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo}>
                          <Button size="sm">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-zinc-500">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No projects match your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
