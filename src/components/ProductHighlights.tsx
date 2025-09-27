import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Thermometer, FlaskConical, Dna, ChevronRight } from 'lucide-react';
import storageImage from '@/assets/storage-equipment.jpg';
import labImage from '@/assets/lab-equipment.jpg';
import molecularImage from '@/assets/molecular-equipment.jpg';

const ProductHighlights = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      icon: Thermometer,
      title: "Biomedical Sample Storage Solutions",
      description: "Advanced refrigeration and cryogenic storage systems for biomedical samples",
      image: storageImage,
      products: [
        "Ultra-Low Temperature Freezers (-80°C to -150°C)",
        "Laboratory Refrigerators (2°C to 8°C)",
        "Deep Freezers (-20°C to -40°C)",
        "Liquid Nitrogen Storage Systems",
        "Plasma Freezers",
        "Blood Bank Refrigerators"
      ],
      color: "primary",
      gradient: "from-primary to-primary-light"
    },
    {
      id: 1,
      icon: FlaskConical,
      title: "Laboratory Equipment",
      description: "Essential laboratory instruments for research and development",
      image: labImage,
      products: [
        "CO2 Incubators",
        "Vacuum Drying Ovens",
        "Incubator Shakers",
        "Stability Chambers",
        "Biological Safety Cabinets",
        "Laminar Air Flow Cabinets"
      ],
      color: "secondary",
      gradient: "from-secondary to-secondary-light"
    },
    {
      id: 2,
      icon: Dna,
      title: "Molecular Biology Systems",
      description: "Cutting-edge molecular analysis and processing equipment",
      image: molecularImage,
      products: [
        "High-Speed Homogenizers",
        "Nucleic Acid Purification Systems",
        "Micro Spectrometers",
        "Microplate Readers",
        "PCR Thermal Cyclers",
        "Gel Documentation Systems"
      ],
      color: "accent",
      gradient: "from-accent to-accent-light"
    }
  ];

  const getColorClasses = (color: string, isActive: boolean) => {
    if (!isActive) return 'text-muted-foreground hover:text-primary';
    
    switch (color) {
      case 'primary':
        return 'text-primary bg-primary/10';
      case 'secondary':
        return 'text-secondary bg-secondary/10';
      case 'accent':
        return 'text-accent bg-accent/10';
      default:
        return 'text-primary bg-primary/10';
    }
  };

  const getButtonColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary hover:bg-primary-dark text-primary-foreground';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary-light text-secondary-foreground';
      case 'accent':
        return 'bg-accent hover:bg-accent-light text-accent-foreground';
      default:
        return 'bg-primary hover:bg-primary-dark text-primary-foreground';
    }
  };

  return (
    <section id="applications" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Product Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive biomedical solutions spanning storage, laboratory instrumentation, 
            and molecular biology systems for advanced research applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? `border-${category.color} ${getColorClasses(category.color, true)}`
                  : 'border-border hover:border-primary/30 text-muted-foreground hover:text-primary'
              }`}
            >
              <category.icon className="w-6 h-6" />
              <span className="font-semibold text-sm lg:text-base">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative group animate-fade-in">
            <div className="overflow-hidden rounded-2xl shadow-card">
              <img
                src={categories[activeCategory].image}
                alt={categories[activeCategory].title}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-tr ${categories[activeCategory].gradient} opacity-20`}></div>
            </div>
            <Badge 
              className={`absolute top-4 left-4 ${getButtonColor(categories[activeCategory].color)} shadow-primary`}
            >
              Latest Technology
            </Badge>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {categories[activeCategory].title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {categories[activeCategory].description}
              </p>
            </div>

            {/* Product List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories[activeCategory].products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className={`w-2 h-2 rounded-full bg-${categories[activeCategory].color}`}></div>
                  <span className="text-foreground font-medium">{product}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className={`${getButtonColor(categories[activeCategory].color)} hover-lift shadow-primary rounded-full px-8 py-6 text-lg font-semibold`}
              >
                View All Products
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline"
                className="border-2 hover:bg-muted/50 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;