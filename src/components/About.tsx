const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="reveal mb-16">
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">About Me</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 text-foreground">
            Passionate About <span className="text-gradient">Frontend Craft</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-left space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Frontend Developer with 1.5 years of hands-on experience building responsive, 
              scalable, and user-friendly web applications. Proficient in modern technologies including 
              HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Vue.js, and Next.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Experienced in developing reusable components, integrating RESTful APIs, and optimizing 
              performance to enhance user experience. Proven track record of delivering high-quality 
              solutions such as Point of Sale (POS) systems, Kitchen Display Systems (KDS), and admin dashboards.
            </p>
            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <span className="text-3xl font-bold text-gradient font-heading">1.5+</span>
                <p className="text-muted-foreground text-sm mt-1">Years Exp.</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-gradient font-heading">3+</span>
                <p className="text-muted-foreground text-sm mt-1">Projects</p>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-gradient font-heading">3.0</span>
                <p className="text-muted-foreground text-sm mt-1">GPA</p>
              </div>
            </div>
          </div>

          <div className="reveal-right">
            <div className="relative p-8 rounded-2xl glass border-glow">
              <div className="space-y-4">
                <InfoRow label="Name" value="Laiba Siddiqui" />
                <InfoRow label="Location" value="Lahore, Pakistan" />
                <InfoRow label="Education" value="BS Information Technology" />
                <InfoRow label="University" value="University of Punjab" />
                <InfoRow label="Current Role" value="Jr. Fullstack Developer @ dedev.co" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center border-b border-border/50 pb-3">
    <span className="text-muted-foreground text-sm">{label}</span>
    <span className="text-foreground font-medium text-sm">{value}</span>
  </div>
);

export default About;
