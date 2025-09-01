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
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto animate-luxury-fade">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-background mb-6 md:mb-8 tracking-tight leading-tight">
          Crafting Spaces of{' '}
          <span className="block font-serif italic text-gold mt-2">Timeless Elegance</span>
        </h1>
        
        <p className="font-serif text-lg sm:text-xl md:text-2xl text-background/90 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Where sophisticated design meets unparalleled craftsmanship, creating interiors that inspire and endure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
          <Button 
            onClick={scrollToPortfolio}
            variant="hero"
            size="lg"
            className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-display tracking-wide min-w-[200px]"
          >
            View Portfolio
          </Button>
          
          <Button 
            variant="heroOutline"
            size="lg"
            className="px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-display tracking-wide min-w-[200px]"
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