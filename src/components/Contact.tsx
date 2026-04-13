import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="reveal">
          <span className="text-neon-purple text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 text-foreground">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-lg mx-auto">
            Looking for a dedicated frontend developer? I'd love to hear about your project.
          </p>
        </div>

        <div className="reveal mt-12 p-8 rounded-2xl glass border-glow" style={{ transitionDelay: "0.2s" }}>
          <div className="grid sm:grid-cols-2 gap-6">
            <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" value="devlaiba04@gmail.com" href="mailto:devlaiba04@gmail.com" />
            <ContactItem icon={<MapPin className="w-5 h-5" />} label="Location" value="Lahore, Pakistan" />
            <ContactItem icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" value="Laiba Siddiqui" href="https://www.linkedin.com/in/laiba-siddiqui-29408a265/" />
            <ContactItem icon={<Github className="w-5 h-5" />} label="GitHub" value="SiddiquiSaab04" href="https://github.com/SiddiquiSaab04" />
          </div>
        </div>

        <div className="reveal mt-10" style={{ transitionDelay: "0.4s" }}>
          <a
            href="mailto:devlaiba04@gmail.com"
            className="inline-block px-10 py-4 rounded-full bg-neon-purple text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 neon-shadow text-sm"
          >
            Say Hello 👋
          </a>
        </div>
      </div>

    </section>
  );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors text-left group">
      <div className="w-10 h-10 rounded-lg bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:neon-shadow transition-all shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-muted-foreground text-xs">{label}</p>
        <p className="text-foreground text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <div>{content}</div>
  );
};

export default Contact;
