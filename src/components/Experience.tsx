const experiences = [
  {
    title: "Junior Fullstack Developer",
    company: "dedev.co, Lahore",
    period: "Jul 2025 – Present",
    points: [
      "Developed scalable dashboards using React.js, Redux, and Zustand",
      "Designed and integrated secure RESTful APIs using Node.js & Express.js",
      "Worked with MongoDB, MySQL, and SQL Server for data management",
      "Deployed applications on Firebase, Netlify, and Vercel",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Teams.pk, Lahore",
    period: "Sep 2024 – Jun 2025",
    points: [
      "Rebuilt & optimized UI for POS and Kitchen Display Systems using Vue.js",
      "Developed responsive admin dashboards for operational efficiency",
      "Created reusable, modular, scalable components with Tailwind CSS",
      "Integrated RESTful APIs using Axios and managed state with Pinia",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Teams.pk, Lahore",
    period: "Jun 2024 – Sep 2024",
    points: [
      "Built responsive web interfaces using HTML5, CSS3, JavaScript & Vue.js",
      "Converted Figma mockups into pixel-perfect interfaces",
      "Gained experience with Tailwind CSS and RESTful API integration",
      "Collaborated using Git in Agile environment",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/5 rounded-full blur-[120px]" />
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="reveal text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">Career</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 text-foreground">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple/50 via-lavender/30 to-transparent" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`reveal relative mb-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
              } pl-8 md:pl-0`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-auto md:right-[-5px] top-2 w-3 h-3 rounded-full bg-neon-purple neon-shadow z-10"
                style={i % 2 !== 0 ? { left: "-5px", right: "auto" } : {}} />

              <div className="p-6 rounded-2xl glass border-glow hover:scale-[1.02] transition-transform duration-300">
                <span className="text-lavender text-xs font-medium">{exp.period}</span>
                <h3 className="font-heading text-lg font-bold text-foreground mt-1">{exp.title}</h3>
                <p className="text-neon-purple text-sm mb-3">{exp.company}</p>
                <ul className="space-y-2 text-left">
                  {exp.points.map((point, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-neon-purple mt-1 shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
