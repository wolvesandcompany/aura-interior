import { useState } from "react";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Penthouse Elegance",
      category: "Residential",
      size: "large",
      image: "Modern penthouse with floor-to-ceiling windows"
    },
    {
      id: 2,
      title: "Boutique Hotel",
      category: "Commercial",
      size: "medium",
      image: "Luxury hotel lobby design"
    },
    {
      id: 3,
      title: "Classic Revival",
      category: "Residential",
      size: "small",
      image: "Traditional home interior"
    },
    {
      id: 4,
      title: "Corporate Headquarters",
      category: "Commercial",
      size: "medium",
      image: "Executive office space"
    },
    {
      id: 5,
      title: "Art Collector's Home",
      category: "Residential",
      size: "large",
      image: "Gallery-style residential interior"
    },
    {
      id: 6,
      title: "Minimalist Retreat",
      category: "Residential",
      size: "small",
      image: "Clean minimalist interior"
    }
  ];

  const getGridClasses = (size: string, index: number) => {
    const sizeClasses = {
      large: "md:col-span-2 md:row-span-2",
      medium: "md:col-span-2 md:row-span-1", 
      small: "md:col-span-1 md:row-span-1"
    };
    
    return `${sizeClasses[size as keyof typeof sizeClasses]} aspect-square md:aspect-auto`;
  };

  return (
    <section id="portfolio" className="py-24 px-6 bg-warm-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-luxury-fade">
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <p className="font-serif text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated selection of our finest work, showcasing our commitment to exceptional design and craftsmanship.
          </p>
        </div>
        
        {/* Bentogrid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bento-item relative overflow-hidden rounded-lg bg-gradient-to-br from-warm-medium to-muted cursor-pointer ${getGridClasses(project.size, index)}`}
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-warm-medium" />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-all duration-500 ${
                hoveredItem === project.id ? 'opacity-90' : 'opacity-60'
              }`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-background">
                <div className={`transition-all duration-500 ${
                  hoveredItem === project.id ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'
                }`}>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm font-display tracking-wide rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-xl md:text-2xl font-medium mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="font-serif text-sm opacity-90">
                    {project.image}
                  </p>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 border-2 border-gold transition-opacity duration-500 ${
                hoveredItem === project.id ? 'opacity-50' : 'opacity-0'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;