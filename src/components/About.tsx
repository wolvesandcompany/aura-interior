import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-luxury-fade order-2 lg:order-1">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-6 md:mb-8 tracking-tight">
              Our Philosophy
            </h2>
            
            <div className="space-y-4 md:space-y-6 font-serif text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                At Aura Interiors, we believe that exceptional design transcends trends and creates spaces that resonate with the soul. Our approach combines timeless elegance with contemporary sensibilities, resulting in interiors that are both sophisticated and deeply personal.
              </p>
              
              <p>
                Each project begins with understanding our clients' unique vision and lifestyle. We then weave together carefully curated elements—from bespoke furniture to artisanal finishes—creating harmonious environments that reflect individual stories while maintaining our signature aesthetic of refined luxury.
              </p>
              
              <p className="hidden sm:block">
                With over a decade of experience in luxury residential and commercial design, we've cultivated relationships with the finest craftspeople and suppliers worldwide, ensuring every detail meets our exacting standards.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="mt-8 md:mt-10 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-8 md:px-10 py-4 md:py-6 font-display tracking-wide"
            >
              Learn More About Us
            </Button>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative animate-scale-luxury order-1 lg:order-2">
            <div className="aspect-[4/5] bg-warm-light rounded-lg shadow-card overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-warm-medium to-warm-light flex items-center justify-center">
                <p className="font-serif text-base md:text-lg text-muted-foreground">
                  Studio Portrait
                </p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-16 h-16 md:w-24 md:h-24 bg-gradient-gold rounded-full opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;