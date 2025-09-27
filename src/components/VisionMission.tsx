import { Target, Eye, Heart, Lightbulb } from 'lucide-react';

const VisionMission = () => {
  const items = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading global provider of innovative biomedical and life sciences equipment, empowering research institutions and healthcare facilities worldwide.",
      color: "primary"
    },
    {
      icon: Target,
      title: "Our Mission", 
      description: "Delivering cutting-edge solutions that advance scientific research, improve healthcare outcomes, and support the development of life-saving technologies.",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Commitment to quality, integrity, and customer satisfaction. We believe in building lasting partnerships through reliable service and innovative solutions.",
      color: "accent"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving with the latest technological advancements to provide state-of-the-art equipment for modern biomedical research.",
      color: "primary"
    }
  ];

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

  return (
    <section id="about" className="py-20 bg-gradient-biomedical scientific-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vision & Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by innovation and excellence, we're committed to advancing biomedical research
            through cutting-edge equipment and unparalleled service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group product-card p-6 text-center animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full ${getColorClasses(item.color)} flex items-center justify-center mx-auto mb-6 shadow-primary group-hover:animate-pulse-glow`}>
                <item.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;