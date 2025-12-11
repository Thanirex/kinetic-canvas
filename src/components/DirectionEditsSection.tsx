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

// REPLACE THE LINKS BELOW WITH YOUR YOUTUBE VIDEOS
// REPLACE THE LINKS BELOW WITH YOUR YOUTUBE VIDEOS
const videos = [
  {
    title: "Hari Om Hari ShortFilm || Utsavam",
    url: "https://youtu.be/Iyq8DS9ArVw?si=DNuH7EPjZnq89Pdg", // PASTE YOUR LINK HERE
    views: "1.5k",
    duration: "24:11"
  },
  {
    title: "Award winning shorrtilm || 48-Hour Challenge",
    url: "https://www.youtube.com/watch?v=kTS2-21Y8H0", // PASTE YOUR LINK HERE
    views: "2k",
    duration: "4:54"
  },
  {
    title: "Echo Telugu Shortfilm || Utsavam",
    url: "https://www.youtube.com/watch?v=fzdkSlBW-t4&t=118s", // PASTE YOUR LINK HERE
    views: "6.3k",
    duration: "28:56"
  },
  {
    title: "Strike Four | Episode-1 | Short film Series",
    url: "https://www.youtube.com/watch?v=v8Q9lQ8rwaQ", // PASTE YOUR LINK HERE
    views: "1.5k",
    duration: "11:30"
  },
  {
    title: "VISTA | Telugu-English Shortfilm (2025)",
    url: "https://youtu.be/gbpF0dgtotg?si=F1ChWEmarPghl_Kx", // PASTE YOUR LINK HERE
    views: "4k",
    duration: "14:58",
    thumbnail: "https://img.youtube.com/vi/gbpF0dgtotg/hqdefault.jpg" // Manually override thumbnail
  },
  {
    title: "Playlist Shortfilm",
    url: "https://www.youtube.com/watch?v=elNSucwPfuU&t=109s", // PASTE YOUR LINK HERE
    views: "6.3k",
    duration: "18:30"
  },
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
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <VideoCard
                title={video.title}
                thumbnail={video.thumbnail || getYouTubeThumbnail(video.url)}
                views={video.views}
                duration={video.duration}
                aspectRatio="video"
                link={video.url}
              />
            </div>
          ))}
        </div>
      </div>

    </section >
  );
};

export default DirectionEditsSection;
