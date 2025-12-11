import { Pen, Video, Scissors, Sparkles, Clapperboard, Palette } from "lucide-react";

const services = [
  { icon: Pen, title: "Scripting", description: "Compelling narratives that hook viewers from the first second" },
  { icon: Clapperboard, title: "Direction", description: "Visual storytelling with cinematic precision" },
  { icon: Video, title: "Shooting", description: "Professional capture with attention to every detail" },
  { icon: Scissors, title: "Editing", description: "Seamless cuts that maintain perfect rhythm and flow" },
  { icon: Palette, title: "Color Grading", description: "Mood-defining looks that elevate your content" },
  { icon: Sparkles, title: "Post-Production", description: "VFX, sound design, and final polish" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">What I Do</p>
          <h2 className="section-title">
            Full-Stack <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Creative</span>
          </h2>
        </div>

        {/* Marquee container */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden">
            <div className="marquee flex gap-6">
              {[...services, ...services].map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 glass-card p-6 hover:border-primary/50 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl glass-card-strong flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento grid alternative view */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bento-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-card-strong flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-500">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
