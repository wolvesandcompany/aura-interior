import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-luxury-fade">
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary mb-8 tracking-tight">
              Our Philosophy
            </h2>
            
            <div className="space-y-6 font-serif text-lg text-muted-foreground leading-relaxed">
              <p>
                At Aura Interiors, we believe that exceptional design transcends trends and creates spaces that resonate with the soul. Our approach combines timeless elegance with contemporary sensibilities, resulting in interiors that are both sophisticated and deeply personal.
              </p>
              
              <p>
                Each project begins with understanding our clients' unique vision and lifestyle. We then weave together carefully curated elements—from bespoke furniture to artisanal finishes—creating harmonious environments that reflect individual stories while maintaining our signature aesthetic of refined luxury.
              </p>
              
              <p>
                With over a decade of experience in luxury residential and commercial design, we've cultivated relationships with the finest craftspeople and suppliers worldwide, ensuring every detail meets our exacting standards.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="mt-10 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-500 px-10 py-6 font-display tracking-wide"
            >
              Learn More About Us
            </Button>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative animate-scale-luxury">
            <div className="aspect-[4/5] bg-warm-light rounded-lg shadow-card overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-warm-medium to-warm-light flex items-center justify-center">
                <p className="font-serif text-lg text-muted-foreground">
                  Studio Portrait
                </p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-gold rounded-full opacity-60 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;