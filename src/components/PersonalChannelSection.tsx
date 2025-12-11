import { Youtube, Eye, ThumbsUp } from "lucide-react";

const youtubeVideos = [
  {
    title: "How I Edit Videos That Get Millions of Views",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    views: "2.1M",
    likes: "89K",
    duration: "18:24",
  },
  {
    title: "My Complete Video Editing Workflow Revealed",
    thumbnail: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80",
    views: "1.4M",
    likes: "67K",
    duration: "24:15",
  },
  {
    title: "Color Grading Like Hollywood: A Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80",
    views: "987K",
    likes: "52K",
    duration: "31:42",
  },
];

const PersonalChannelSection = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 relative">
      {/* Different background treatment */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bento-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <p className="text-primary font-medium tracking-wider uppercase text-sm">YouTube Channel</p>
              </div>
              <h2 className="section-title mb-4">
                <span className="text-glow-white">My</span>{" "}
                <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Channel</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Tutorials, behind-the-scenes, and insights from 8+ years in the industry.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white font-semibold transition-all duration-300 hover:bg-[#CC0000] hover:scale-105">
              <Youtube className="w-5 h-5" />
              <span>Subscribe</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video, index) => (
              <div
                key={video.title}
                className="group relative rounded-2xl overflow-hidden bg-card/50 video-card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Duration */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium">
                    {video.duration}
                  </div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-[#FF0000] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                      <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalChannelSection;
