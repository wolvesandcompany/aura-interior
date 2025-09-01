import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Penthouse Elegance",
      category: "Residential",
      size: "large",
      image: portfolio1,
      description: "Modern penthouse with floor-to-ceiling windows"
    },
    {
      id: 2,
      title: "Boutique Hotel",
      category: "Commercial",
      size: "medium",
      image: portfolio2,
      description: "Luxury hotel lobby design"
    },
    {
      id: 3,
      title: "Classic Revival",
      category: "Residential",
      size: "small",
      image: portfolio3,
      description: "Traditional home interior"
    },
    {
      id: 4,
      title: "Corporate Headquarters",
      category: "Commercial",
      size: "medium",
      image: portfolio4,
      description: "Executive office space"
    },
    {
      id: 5,
      title: "Art Collector's Home",
      category: "Residential",
      size: "large",
      image: portfolio5,
      description: "Gallery-style residential interior"
    },
    {
      id: 6,
      title: "Minimalist Retreat",
      category: "Residential",
      size: "small",
      image: portfolio6,
      description: "Clean minimalist interior"
    }
  ];

  const getGridClasses = (size: string, index: number) => {
    const sizeClasses = {
      large: "sm:col-span-2 lg:col-span-2 sm:row-span-2 lg:row-span-2",
      medium: "sm:col-span-2 lg:col-span-2 sm:row-span-1 lg:row-span-1", 
      small: "sm:col-span-1 lg:col-span-1 sm:row-span-1 lg:row-span-1"
    };
    
    return `${sizeClasses[size as keyof typeof sizeClasses]} aspect-square sm:aspect-auto`;
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 bg-warm-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-luxury-fade">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-4 md:mb-6 tracking-tight">
            Our Portfolio
          </h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated selection of our finest work, showcasing our commitment to exceptional design and craftsmanship.
          </p>
        </div>
        
        {/* Bentogrid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] sm:auto-rows-[200px] lg:auto-rows-[300px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`bento-item relative overflow-hidden rounded-lg cursor-pointer ${getGridClasses(project.size, index)}`}
              onMouseEnter={() => setHoveredItem(project.id)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <img 
                src={project.image}
                alt={project.description}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-all duration-500 ${
                hoveredItem === project.id ? 'opacity-90' : 'opacity-60'
              }`} />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-end text-background">
                <div className={`transition-all duration-500 ${
                  hoveredItem === project.id ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-80'
                }`}>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs md:text-sm font-display tracking-wide rounded-full mb-2 md:mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="font-display text-lg md:text-xl lg:text-2xl font-medium mb-1 md:mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="font-serif text-xs md:text-sm opacity-90">
                    {project.description}
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