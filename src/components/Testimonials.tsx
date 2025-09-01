import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Eleanor Whitman",
      title: "Private Collector",
      content: "Aura Interiors transformed our penthouse into a masterpiece that perfectly balances our art collection with livable luxury. Their attention to detail and understanding of our lifestyle is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "CEO, Zenith Holdings",
      content: "The commercial space they designed for our headquarters has become a talking point for every client visit. The sophisticated ambiance has elevated our brand perception tremendously.",
      rating: 5
    },
    {
      id: 3,
      name: "Isabella Rodriguez",
      title: "Hospitality Executive",
      content: "Working with Aura Interiors on our boutique hotel was an absolute pleasure. They captured the essence of timeless elegance while creating spaces that our guests find both inspiring and comfortable.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-luxury-fade">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary mb-4 md:mb-6 tracking-tight">
            Client Testimonials
          </h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground">
            The voices of those who have experienced our dedication to excellence.
          </p>
        </div>

        {/* Carousel */}        
        <div className="relative">
          <Card className="border-0 shadow-luxury bg-card/95 backdrop-blur-sm">
            <CardContent className="p-8 md:p-10 lg:p-12 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6 md:mb-8">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 md:w-6 md:h-6 text-gold fill-current" />
                ))}
              </div>
              
              {/* Quote */}  
              <blockquote className="font-serif text-lg md:text-xl lg:text-2xl text-primary leading-relaxed mb-8 md:mb-10 italic">
                "{testimonials[currentSlide].content}"
              </blockquote>
              
              {/* Author */}
              <div className="font-display">
                <p className="text-base md:text-lg font-medium text-primary mb-1">
                  {testimonials[currentSlide].name}
                </p>
                <p className="text-sm md:text-base text-muted-foreground tracking-wide">
                  {testimonials[currentSlide].title}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 space-x-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-warm-medium hover:bg-accent text-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-accent scale-125' : 'bg-warm-medium'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-warm-medium hover:bg-accent text-accent hover:text-accent-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;