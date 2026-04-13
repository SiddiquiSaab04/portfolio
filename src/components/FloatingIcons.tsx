const techIcons = [
  { name: "HTML", icon: "⟨/⟩", x: "5%", y: "15%", anim: "animate-float-1", delay: "0s" },
  { name: "CSS", icon: "{ }", x: "90%", y: "20%", anim: "animate-float-2", delay: "0.5s" },
  { name: "JS", icon: "JS", x: "15%", y: "70%", anim: "animate-float-3", delay: "1s" },
  { name: "TS", icon: "TS", x: "85%", y: "75%", anim: "animate-float-1", delay: "1.5s" },
  { name: "React", icon: "⚛", x: "8%", y: "45%", anim: "animate-float-2", delay: "2s" },
  { name: "Vue", icon: "V", x: "92%", y: "48%", anim: "animate-float-3", delay: "0.3s" },
  { name: "Next", icon: "N", x: "20%", y: "85%", anim: "animate-float-1", delay: "0.7s" },
  { name: "TW", icon: "~", x: "78%", y: "10%", anim: "animate-float-2", delay: "1.2s" },
  { name: "BS", icon: "B", x: "75%", y: "88%", anim: "animate-float-3", delay: "0.9s" },
  { name: "Redux", icon: "Rx", x: "35%", y: "8%", anim: "animate-float-1", delay: "1.8s" },
  { name: "Zustand", icon: "🐻", x: "60%", y: "90%", anim: "animate-float-2", delay: "2.2s" },
];

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {techIcons.map((tech) => (
        <div
          key={tech.name}
          className={`absolute ${tech.anim}`}
          style={{
            left: tech.x,
            top: tech.y,
            animationDelay: tech.delay,
          }}
        >
          <div className="w-12 h-12 rounded-xl glass flex items-center justify-center border-glow opacity-40 hover:opacity-80 transition-opacity">
            <span className="text-lavender text-xs font-bold font-body">
              {tech.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;
