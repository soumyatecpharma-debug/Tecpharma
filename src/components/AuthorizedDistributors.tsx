import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Award, CheckCircle } from 'lucide-react';

const AuthorizedDistributors = () => {
  const [activeDistributor, setActiveDistributor] = useState(0);

  const distributors = [
    {
      id: 0,
      name: "Haier Biomedical",
      logo: "HB",
      description: "Global leader in biomedical cold chain solutions",
      specialties: ["Ultra-Low Temperature Freezers", "Laboratory Refrigerators", "Blood Bank Solutions"],
      years: "15+ Years Partnership",
      rating: 4.9,
      color: "primary"
    },
    {
      id: 1,
      name: "HBIO",
      logo: "HB",
      description: "Innovative biotechnology equipment manufacturer",
      specialties: ["Cell Culture Systems", "Incubators", "Biosafety Cabinets"],
      years: "12+ Years Partnership",
      rating: 4.8,
      color: "secondary"
    },
    {
      id: 2,
      name: "LTEX",
      logo: "LX",
      description: "Advanced laboratory technology solutions",
      specialties: ["Molecular Biology", "Spectroscopy", "Sample Processing"],
      years: "10+ Years Partnership",
      rating: 4.9,
      color: "accent"
    },
    {
      id: 3,
      name: "Uvitec",
      logo: "UV",
      description: "Precision instruments for life sciences",
      specialties: ["Gel Documentation", "UV Analysis", "Imaging Systems"],
      years: "8+ Years Partnership",
      rating: 4.7,
      color: "primary"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDistributor((prev) => (prev + 1) % distributors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary text-primary-foreground';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground';
      case 'accent':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  const getGradientClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'from-primary/20 to-primary-light/20';
      case 'secondary':
        return 'from-secondary/20 to-secondary-light/20';
      case 'accent':
        return 'from-accent/20 to-accent-light/20';
      default:
        return 'from-primary/20 to-primary-light/20';
    }
  };

  return (
    <section id="brands" className="py-20 bg-gradient-biomedical scientific-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Trusted Partners & Distributors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with world-class manufacturers to deliver cutting-edge biomedical 
            equipment and innovative solutions to research institutions globally.
          </p>
        </div>

        {/* Featured Distributor */}
        <div className="mb-16">
          <Card className={`overflow-hidden border-2 border-primary/30 shadow-primary hover-lift`}>
            <div className={`bg-gradient-to-r from-primary/20 to-primary-light/20 p-8`}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full ${getColorClasses(distributors[activeDistributor].color)} flex items-center justify-center text-2xl font-bold shadow-primary`}>
                      {distributors[activeDistributor].logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {distributors[activeDistributor].name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(distributors[activeDistributor].rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {distributors[activeDistributor].rating}/5.0
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground">
                    {distributors[activeDistributor].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Specializations
                    </h4>
                    {distributors[activeDistributor].specialties.map((specialty, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center lg:text-right">
                  <Badge className={`${getColorClasses(distributors[activeDistributor].color)} mb-4 text-lg px-4 py-2`}>
                    Featured Partner
                  </Badge>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {distributors[activeDistributor].years}
                  </div>
                  <p className="text-muted-foreground">
                    Trusted collaboration delivering excellence
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* All Distributors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {distributors.map((distributor, index) => (
            <Card
              key={distributor.id}
              className={`cursor-pointer transition-all duration-300 overflow-hidden border-2 ${
                index === activeDistributor 
                  ? `border-${distributor.color} shadow-primary transform scale-105` 
                  : 'border-border/50 hover:border-primary/30 hover:shadow-card'
              } hover-lift`}
              onClick={() => setActiveDistributor(index)}
            >
              <div className="p-6 text-center">
                <div className={`w-12 h-12 rounded-full ${getColorClasses(distributor.color)} flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-card`}>
                  {distributor.logo}
                </div>
                <h3 className="font-bold text-foreground mb-2">{distributor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{distributor.description}</p>
                <div className="flex justify-center items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(distributor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorizedDistributors;