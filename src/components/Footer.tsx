import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Send,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Products", href: "#applications" },
        { label: "Services", href: "#services" },
        { label: "Support", href: "#support" },
        { label: "Careers", href: "#careers" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "Storage Solutions", href: "#storage" },
        { label: "Laboratory Equipment", href: "#lab" },
        { label: "Molecular Biology", href: "#molecular" },
        { label: "Safety Cabinets", href: "#safety" },
        { label: "Custom Solutions", href: "#custom" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Technical Support", href: "#tech-support" },
        { label: "Installation", href: "#installation" },
        { label: "Maintenance", href: "#maintenance" },
        { label: "Training", href: "#training" },
        { label: "Documentation", href: "#docs" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 scientific-pattern opacity-10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-background">Tecpharma</span>
                  <span className="text-xs text-background/70">Trusted Partner for World Class Equipments</span>
                </div>
              </div>
              
              <p className="text-background/80 leading-relaxed">
                Leading provider of innovative biomedical and life sciences equipment, 
                delivering cutting-edge solutions to research institutions and healthcare 
                facilities worldwide for over 42 years.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-background font-medium">+91-9505555987</p>
                    <p className="text-background/70 text-sm">24/7 Support Available</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-background font-medium">info@tecpharma.in</p>
                    <p className="text-background/70 text-sm">General Inquiries</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-background font-medium">MIG- 315,Balaji Nagar, Kukatpally</p>
                    <p className="text-background/70 text-sm">Hyderabad, Telangana.-500072</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold text-background">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-background/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-background mb-2">
                  Stay Updated
                </h3>
                <p className="text-background/70">
                  Subscribe to our newsletter for the latest biomedical equipment updates 
                  and industry insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-background/10 border-background/30 text-background placeholder:text-background/50 focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-2 rounded-full shadow-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-background/70 text-sm">
                © 2024 BioMed Solutions. All rights reserved. | Privacy Policy | Terms of Service
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5 text-background/70 hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary hover:bg-primary-dark text-primary-foreground rounded-full shadow-primary flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;