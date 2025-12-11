import { Film, Play } from "lucide-react";

const trailers = [
  {
    title: "ECHOES OF ETERNITY",
    subtitle: "Official Theatrical Trailer",
    thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&q=80",
    year: "2024",
  },
  {
    title: "SHADOW PROTOCOL",
    subtitle: "Final Trailer",
    thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&q=80",
    year: "2023",
  },
  {
    title: "THE LAST FRONTIER",
    subtitle: "Teaser Trailer",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80",
    year: "2024",
  },
];

const TrailerCutsSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Moody background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-wider uppercase text-sm">Cinema</p>
          </div>
          <h2 className="section-title mb-4">
            <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trailer</span> Cuts
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cinematic trailers that capture the essence of storytelling.
          </p>
        </div>

        <div className="space-y-8">
          {trailers.map((trailer, index) => (
            <div
              key={trailer.title}
              className="group relative rounded-3xl overflow-hidden video-card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-[21/9]">
                <img
                  src={trailer.thumbnail}
                  alt={trailer.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
                
                {/* Film grain effect */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 400 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-between p-8 md:p-12">
                  <div className="space-y-2">
                    <p className="text-primary font-medium text-sm tracking-widest">{trailer.year}</p>
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">
                      {trailer.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base">{trailer.subtitle}</p>
                  </div>
                  
                  {/* Play button */}
                  <button className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center transition-all duration-500 group-hover:border-primary group-hover:scale-110 group-hover:shadow-glow">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-primary ml-1 transition-colors" fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrailerCutsSection;
