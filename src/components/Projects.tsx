import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Kwiikpay",
    description: "A comprehensive Point of Sale and payment system with real-time dashboards, KDS, and admin panels built for operational efficiency.",
    tech: ["Vue.js", "Tailwind CSS", "Pinia", "REST API"],
    link: "https://kwiikpay.io/",
    featured: true,
  },
  {
    title: "Snoonews",
    description: "A modern news aggregation platform with clean UI, responsive design, and optimized performance for fast content delivery.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    link: "https://snoonews.vercel.app/",
    featured: true,
  },
  {
    title: "Beatyou App",
    description: "A lifestyle and fitness application with engaging user interface, smooth animations, and cross-platform compatibility.",
    tech: ["React.js", "TypeScript", "Tailwind CSS"],
    link: "https://beatyou.app/",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-lavender/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="reveal text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal block group ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="p-8 rounded-2xl glass border-glow hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-heading text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neon-purple transition-colors" />
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-[10px] font-semibold uppercase">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 max-w-xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-xl bg-neon-purple/10 flex items-center justify-center shrink-0 group-hover:neon-shadow transition-all duration-300">
                    <span className="text-neon-purple font-heading font-bold text-lg">{project.title[0]}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
