
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 pt-16 pb-20">
      {/* Animated background elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary/20">Transform</span> Your Space With <span className="text-secondary">Premium</span> Colors
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-xl mx-auto lg:mx-0">
              Welcome to Lamahi Paint Palace - Authorized Dealer of Reliance Paints in Province No.5, Lamahi-Dang, Nepal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6 transform transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Large Reliance Logo */}
              <img
                src="/lovable-uploads/8582e922-22d8-4436-a87d-100eaf7dae00.png"
                alt="Reliance Paints Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain animate-float"
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-5 left-1/4 w-6 h-48 bg-primary rounded-b-full opacity-70 animate-drip"></div>
              <div className="absolute -top-5 left-1/3 w-8 h-36 bg-secondary rounded-b-full opacity-60 animate-drip-delayed"></div>
              <div className="absolute -top-5 left-1/2 w-5 h-56 bg-accent rounded-b-full opacity-80 animate-drip"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
