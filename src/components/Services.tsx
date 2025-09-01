import { Home, Building2, Armchair } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Design",
      description: "Transform your home into a sanctuary of elegance with our bespoke residential design services. From concept to completion, we create spaces that reflect your personality while maintaining our signature sophisticated aesthetic."
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Elevate your business environment with designs that inspire productivity and impress clients. Our commercial projects seamlessly blend functionality with luxury, creating memorable experiences for all who enter."
    },
    {
      icon: Armchair,
      title: "Furniture Curation",
      description: "Access our exclusive collection of handpicked furniture and accessories from renowned artisans worldwide. Each piece is selected for its craftsmanship, beauty, and ability to enhance your space's narrative."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-luxury-fade">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-4 md:mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive design solutions tailored to your unique vision and lifestyle, ensuring every project exceeds expectations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="border-0 shadow-card bg-card hover:shadow-luxury transition-all duration-700 animate-scale-luxury group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 md:p-8 lg:p-10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 md:mb-8 bg-gradient-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 md:w-10 md:h-10 text-gold-foreground" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-xl md:text-2xl font-medium text-primary mb-4 md:mb-6 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="font-serif text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;