
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-50 to-slate-100 pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
              <img
                src="/lovable-uploads/8582e922-22d8-4436-a87d-100eaf7dae00.png"
                alt="Oman Traders Logo"
                className="h-20 w-20 rounded-full object-cover"
              />
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="text-primary">Oman</span> <span className="text-secondary">Traders</span>
              </h1>
            </div>
            <p className="text-lg mb-8 text-gray-700 max-w-xl mx-auto lg:mx-0">
              Your trusted partner for quality products and exceptional service. We deliver excellence in every product and service we offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 px-8 py-6"
              >
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="/lovable-uploads/8582e922-22d8-4436-a87d-100eaf7dae00.png"
                alt="Oman Traders Logo"
                className="w-full h-full object-contain rounded-full shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
