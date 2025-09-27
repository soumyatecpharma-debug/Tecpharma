import { useEffect, useState } from 'react';
import { Users, Trophy, Settings, Heart } from 'lucide-react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    equipment: 0,
    satisfaction: 0
  });

  const stats = [
    {
      icon: Trophy,
      number: 42,
      suffix: '+',
      label: 'Years of Experience',
      description: 'Decades of expertise in biomedical solutions',
      color: 'accent'
    },
    {
      icon: Settings,
      number: 500,
      suffix: '+',
      label: 'Successful Projects',
      description: 'Research facilities equipped worldwide',
      color: 'primary'
    },
    {
      icon: Users,
      number: 200,
      suffix: '+',
      label: 'Types of Equipment',
      description: 'Comprehensive biomedical solutions',
      color: 'secondary'
    },
    {
      icon: Heart,
      number: 95,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Trusted by leading institutions',
      color: 'accent'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateNumbers = () => {
        stats.forEach((stat, index) => {
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = stat.number / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.number) {
              current = stat.number;
              clearInterval(timer);
            }
            
            setCounts(prev => ({
              ...prev,
              [index === 0 ? 'experience' : index === 1 ? 'projects' : index === 2 ? 'equipment' : 'satisfaction']: Math.floor(current)
            }));
          }, duration / steps);
        });
      };

      // Delay the animation slightly for better effect
      const timeout = setTimeout(animateNumbers, 200);
      return () => clearTimeout(timeout);
    }
  }, [isVisible]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary text-primary-foreground shadow-primary';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground shadow-card';
      case 'accent':
        return 'bg-accent text-accent-foreground shadow-primary';
      default:
        return 'bg-primary text-primary-foreground shadow-primary';
    }
  };

  const getCurrentCount = (index: number) => {
    switch (index) {
      case 0: return counts.experience;
      case 1: return counts.projects;
      case 2: return counts.equipment;
      case 3: return counts.satisfaction;
      default: return 0;
    }
  };

  return (
    <section id="stats-section" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Overview in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our track record of delivering 
            innovative biomedical solutions to research institutions worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                <div className={`w-20 h-20 rounded-full ${getColorClasses(stat.color)} flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300`}>
                  <stat.icon className="w-10 h-10" />
                </div>
                
                <div className="counter text-5xl md:text-6xl font-bold text-white mb-2 tabular-nums">
                  {isVisible ? getCurrentCount(index) : 0}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;