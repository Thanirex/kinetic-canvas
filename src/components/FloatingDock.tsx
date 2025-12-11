import { Youtube, Instagram, Linkedin, Film, FolderOpen } from "lucide-react";

const dockItems = [
  { icon: Youtube, label: "YouTube", href: "#", color: "#FF0000" },
  { icon: Instagram, label: "Instagram", href: "#", color: "#E4405F" },
  { icon: Film, label: "Productions", href: "#", color: "hsl(var(--primary))" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "#0A66C2" },
  { icon: FolderOpen, label: "Portfolio", href: "#", color: "hsl(var(--accent))" },
];

const FloatingDock = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl glass-card-strong border border-white/20 shadow-2xl">
        {dockItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="dock-icon group relative flex flex-col items-center"
            title={item.label}
          >
            {/* Tooltip */}
            <span className="absolute -top-10 px-3 py-1.5 rounded-lg glass-card-strong text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
            
            {/* Icon container */}
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:shadow-lg"
              style={{ 
                backgroundColor: `color-mix(in srgb, ${item.color} 20%, transparent)`,
              }}
            >
              <item.icon 
                className="w-6 h-6 transition-colors duration-200" 
                style={{ color: item.color }}
              />
            </div>
            
            {/* Active indicator dot */}
            <div className="w-1 h-1 rounded-full bg-white/50 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FloatingDock;
