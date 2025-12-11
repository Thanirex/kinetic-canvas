import { Play, Eye } from "lucide-react";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  views?: string;
  duration?: string;
  aspectRatio?: "video" | "portrait" | "cinema";
  className?: string;
}

const VideoCard = ({ title, thumbnail, views, duration, aspectRatio = "video", className = "" }: VideoCardProps) => {
  const aspectClasses = {
    video: "aspect-video",
    portrait: "aspect-[9/16]",
    cinema: "aspect-[21/9]",
  };

  return (
    <div className={`group relative rounded-3xl overflow-hidden video-card-hover ${className}`}>
      <div className={`relative ${aspectClasses[aspectRatio]} bg-card`}>
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 rounded-full glass-card-strong flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-primary ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration badge */}
        {duration && (
          <div className="absolute top-4 right-4 px-2 py-1 rounded-lg glass-card-strong text-xs font-medium">
            {duration}
          </div>
        )}

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <h3 className="font-bold text-sm md:text-base lg:text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          {views && (
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm">
              <Eye className="w-3.5 h-3.5" />
              <span>{views} views</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
