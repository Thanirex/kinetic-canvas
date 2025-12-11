import { Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 md:px-8 pt-20 pb-32">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="bento-card overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-2">
                <p className="text-primary font-medium tracking-wider uppercase text-sm md:text-base animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  Creative Director & Video Editor
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <span className="text-glow-white">THANEESH</span>
                  <br />
                  <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">VARMA</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
                End-to-End Content Creator crafting visual stories that captivate, convert, and leave lasting impressions.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <button className="group flex items-center gap-3 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-glow-lg hover:scale-105">
                  <Play className="w-5 h-5" />
                  <span>View Showreel</span>
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 rounded-full glass-card border border-white/20 font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
                >
                  Get in Touch
                </button>
              </div>


              <div className="flex gap-8 pt-4 animate-fade-in" style={{ animationDelay: "1s" }}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold">4+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">Self Learnt</p>
                  <p className="text-sm text-muted-foreground">Freelancer</p>
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden animate-scale-in" style={{ animationDelay: "0.5s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Timeline visualization */}
                <div className="w-full h-full p-6 flex flex-col justify-center gap-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`h-2 rounded-full ${i === 2 ? 'bg-primary' : 'bg-white/20'}`} style={{ width: `${30 + Math.random() * 50}%` }} />
                      <div className={`h-2 rounded-full ${i === 2 ? 'bg-accent' : 'bg-white/10'}`} style={{ width: `${20 + Math.random() * 30}%` }} />
                      <div className={`h-2 rounded-full bg-white/${i === 2 ? '30' : '5'}`} style={{ width: `${10 + Math.random() * 20}%` }} />
                    </div>
                  ))}
                  <div className="absolute bottom-6 left-6 right-6 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-primary rounded-full animate-shimmer" style={{ backgroundSize: "200% 100%", backgroundImage: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))" }} />
                  </div>
                </div>
              </div>
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full glass-card-strong flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-glow group">
                  <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section >
  );
};

export default HeroSection;
