import VideoCard from "./VideoCard";
import { Smartphone } from "lucide-react";

const shortFormVideos = [
  {
    title: "Viral Product Reveal",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
    url: "https://www.instagram.com/", // PASTE YOUR INSTAGRAM REEL LINK HERE
    views: "8.2M"
  },
  {
    title: "Behind The Scenes",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80",
    url: "https://www.instagram.com/", // PASTE YOUR INSTAGRAM REEL LINK HERE
    views: "4.5M"
  },
  {
    title: "Day in My Life",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
    url: "https://www.instagram.com/", // PASTE YOUR INSTAGRAM REEL LINK HERE
    views: "12.1M"
  },
  {
    title: "Quick Tutorial",
    thumbnail: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=400&q=80",
    url: "https://www.instagram.com/", // PASTE YOUR INSTAGRAM REEL LINK HERE
    views: "6.7M"
  },
  {
    title: "Trending Edit",
    thumbnail: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400&q=80",
    url: "https://www.instagram.com/", // PASTE YOUR INSTAGRAM REEL LINK HERE
    views: "15.3M"
  },
];

const ClientWorksSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-5 h-5 text-primary" />
            <p className="text-primary font-medium tracking-wider uppercase text-sm">Short-Form</p>
          </div>
          <h2 className="section-title mb-4">
            Client <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Reels</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Instagram, TikTok, and YouTube Shorts that break through the noise.
          </p>
        </div>

        {/* iPhone mockup container */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {shortFormVideos.map((video, index) => (
            <div
              key={video.title}
              className="flex-shrink-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* iPhone frame */}
              <div className="relative p-2 rounded-[2.5rem] bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm">
                <div className="relative rounded-[2rem] overflow-hidden bg-card w-48 md:w-56">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-20" />

                  <VideoCard
                    title={video.title}
                    thumbnail={video.thumbnail}
                    views={video.views}
                    aspectRatio="portrait"
                    link={video.url}
                  />
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWorksSection;
