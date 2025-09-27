import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-biomedical.jpg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Delivering Values Through Solutions",
      subtitle: "in Biomedical & Life Sciences",
      description: "Advanced equipment and innovative technologies for modern healthcare research and pharmaceutical development.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Watch Demo"
    },
    {
      image: heroImage,
      title: "Precision. Innovation. Excellence.",
      subtitle: "42+ Years of Biomedical Expertise",
      description: "Trusted by leading research institutions and pharmaceutical companies worldwide for cutting-edge laboratory solutions.",
      ctaPrimary: "Our Solutions",
      ctaSecondary: "Contact Us"
    },
    {
      image: heroImage,
      title: "Future-Ready Laboratory",
      subtitle: "Equipment & Storage Solutions",
      description: "From ultra-low temperature storage to molecular biology systems, we provide comprehensive biomedical solutions.",
      ctaPrimary: "View Catalog",
      ctaSecondary: "Get Quote"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Biomedical Laboratory"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
        <div className="absolute inset-0 scientific-pattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {slides[currentSlide].title}
            <br />
            <span className="text-accent bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-primary hover-lift"
            >
              {slides[currentSlide].ctaPrimary}
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-white/10"
            >
              <Play className="w-5 h-5 mr-2" />
              {slides[currentSlide].ctaSecondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125 shadow-glow' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;