const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 85 },
  { name: "React.js", level: 85 },
  { name: "Vue.js", level: 82 },
  { name: "Next.js", level: 78 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Bootstrap", level: 85 },
  { name: "Redux", level: 80 },
  { name: "Zustand", level: 78 },
  { name: "Node.js", level: 70 },
  { name: "Git/GitHub", level: 88 },
  { name: "Firebase", level: 75 },
  { name: "MySQL", level: 72 },
  { name: "Pinia", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="reveal text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">Expertise</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 text-foreground">
            Tech <span className="text-gradient">Stack</span>
          </h2>
        </div>

        {/* Marquee */}
        <div className="reveal overflow-hidden mb-16" style={{ transitionDelay: "0.2s" }}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="mx-4 px-6 py-2.5 rounded-full glass border-glow text-sm font-medium text-lavender shrink-0"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal p-4 rounded-xl glass border-glow text-center group hover:scale-105 transition-transform duration-300"
              style={{ transitionDelay: `${(i % 8) * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-neon-purple/10 flex items-center justify-center mx-auto mb-3 group-hover:animate-pulse-glow transition-all">
                <span className="text-neon-purple font-bold text-xs">{skill.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <p className="text-foreground text-sm font-medium">{skill.name}</p>
              <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-neon-purple to-lavender"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
