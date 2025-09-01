import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury interior design showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-luxury-fade">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-background mb-8 tracking-tight">
          Crafting Spaces of{' '}
          <span className="block font-serif italic text-gold">Timeless Elegance</span>
        </h1>
        
        <p className="font-serif text-xl md:text-2xl text-background/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Where sophisticated design meets unparalleled craftsmanship, creating interiors that inspire and endure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={scrollToPortfolio}
            variant="secondary"
            size="lg"
            className="bg-background/95 text-primary hover:bg-background hover:shadow-gold transition-all duration-500 px-12 py-6 text-lg font-display tracking-wide"
          >
            View Portfolio
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="border-background/50 text-background hover:bg-background/10 hover:border-background transition-all duration-500 px-12 py-6 text-lg font-display tracking-wide"
          >
            Our Services
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-background/70 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;