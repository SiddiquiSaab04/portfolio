import FloatingIcons from "./FloatingIcons";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lavender/10 rounded-full blur-[100px]" />

      <FloatingIcons />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="reveal" style={{ transitionDelay: "0.1s" }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-neon-purple/30 text-sm text-lavender mb-8 glass">
            Frontend Developer
          </span>
        </div>

        <h1 className="reveal font-heading text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6" style={{ transitionDelay: "0.2s" }}>
          <span className="text-foreground">Hi, I'm</span>
          <br />
          <span className="text-gradient">Laiba Siddiqui</span>
        </h1>

        <p className="reveal text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ transitionDelay: "0.4s" }}>
          Crafting responsive, scalable & user-friendly web experiences with modern technologies.
          1.5+ years of turning designs into pixel-perfect reality.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: "0.6s" }}>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-neon-purple text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform duration-300 neon-shadow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-neon-purple/30 text-foreground font-semibold text-sm hover:bg-neon-purple/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2" style={{ transitionDelay: "0.8s" }}>
        </div>
      </div>
    </section>
  );
};

export default Hero;
