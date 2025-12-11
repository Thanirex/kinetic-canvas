import { Youtube, Eye, ThumbsUp } from "lucide-react";
import VideoCard from "./VideoCard";

// Helper function to extract YouTube ID
const getYouTubeId = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Helper function to get YouTube thumbnail
const getYouTubeThumbnail = (url: string) => {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : url;
};

const youtubeVideos = [
  {
    title: "Is the Soul Just a Self-Learning Algorithm? | Hinduism Meets AI",
    url: "https://www.youtube.com/watch?v=_qmm46LD9cU&t=28s", // PASTE YOUR LINK HERE
    views: "",
    likes: "",
    duration: "4:53",
  },
  {
    title: "Age 21 is weird.",
    url: "https://www.youtube.com/watch?v=000uv0KkogQ", // PASTE YOUR LINK HERE
    views: "",
    likes: "",
    duration: "1:58",
  },
  {
    title: "Ethnic day 2023 Gitam Hyderabad!",
    url: "https://www.youtube.com/watch?v=nm32igmdQW0&t=147s", // PASTE YOUR LINK HERE
    views: "",
    likes: "",
    duration: "5:30",
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
                <p className="text-primary font-medium tracking-wider uppercase text-sm">My YouTube Channel</p>
              </div>
              <h2 className="section-title mb-4">
                <span className="text-glow-white">ThaniRex</span>{" "}
                <span className="text-glow bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"></span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                My personal channel where I share my thoughts, insights, and experiences.
              </p>
            </div>

            <a
              href="https://www.youtube.com/@ThaniRex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white font-semibold transition-all duration-300 hover:bg-[#CC0000] hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              <span>Subscribe</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video, index) => (
              <div
                key={video.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <VideoCard
                  title={video.title}
                  thumbnail={getYouTubeThumbnail(video.url)}
                  views={video.views}
                  duration={video.duration}
                  aspectRatio="video"
                  link={video.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalChannelSection;
