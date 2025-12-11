import VideoCard from "./VideoCard";

const videos = [
  { title: "Brand Documentary: The Vision Behind Innovation", thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80", views: "2.4M", duration: "12:34" },
  { title: "Music Video: Echoes of Tomorrow", thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80", views: "5.1M", duration: "4:20" },
  { title: "Corporate Narrative: Building the Future", thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80", views: "890K", duration: "8:45" },
  { title: "Short Film: Parallel Lives", thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80", views: "1.2M", duration: "18:22" },
  { title: "Product Launch: Revolution in Motion", thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80", views: "3.7M", duration: "2:15" },
  { title: "Documentary Series: Urban Stories", thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&q=80", views: "1.8M", duration: "45:00" },
];

const DirectionEditsSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">Portfolio</p>
          <h2 className="section-title mb-4">
            Narrative & <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Direction</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Long-form content that tells compelling stories and drives engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail}
                views={video.views}
                duration={video.duration}
                aspectRatio="video"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionEditsSection;
