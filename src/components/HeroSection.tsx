import { Play, ChevronDown } from "lucide-react";

// PASTE YOUR FULL YOUTUBE LINK HERE
// (Works with standard links like https://www.youtube.com/watch?v=... or short links like https://youtu.be/...)
const YOUTUBE_LINK = "https://youtu.be/iV8sZ38FpAg?si=8EWO-FAQd0dWYoRT";

const getYoutubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const HeroSection = () => {
  const videoId = getYoutubeId(YOUTUBE_LINK);

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
                <button
                  onClick={() => window.open(YOUTUBE_LINK, '_blank')}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full gradient-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
                >
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
                  <p className="text-3xl md:text-4xl font-bold text-primary">Freelancer</p>
                </div>
              </div>
            </div>

            {/* Right side - Visual / Video */}
            <div className="relative aspect-video rounded-2xl overflow-hidden animate-scale-in border border-white/10 shadow-2xl bg-black/50" style={{ animationDelay: "0.5s" }}>
              {videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                  title="Showreel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-white/5">
                  <p>Invalid YouTube Link</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
