
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 pt-16 pb-20">
      {/* Background color splash elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-accent/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-primary">Transform</span> Your Space With <span className="text-secondary">Premium</span> Colors
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Welcome to Lamahi Paint Palace - Authorized Dealer of Reliance Paints in Province No.5, Lamahi-Dang, Nepal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6">Explore Products</Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6">Contact Us</Button>
            </div>
          </div>
          
          {/* Paint cans & color splash illustration */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Paint drips */}
              <div className="absolute -top-5 left-1/4 w-6 h-48 bg-primary rounded-b-full"></div>
              <div className="absolute -top-5 left-1/3 w-8 h-36 bg-secondary rounded-b-full"></div>
              <div className="absolute -top-5 left-1/2 w-5 h-56 bg-accent rounded-b-full"></div>
              <div className="absolute -top-5 left-2/3 w-7 h-40 bg-blue-500 rounded-b-full"></div>
              
              {/* Paint cans */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-6">
                <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-300 rounded-md relative">
                  <div className="absolute top-2 left-2 right-2 bottom-6 bg-primary rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">RELIANCE</span>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-300 rounded-md relative">
                  <div className="absolute top-2 left-2 right-2 bottom-6 bg-secondary rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">RELIANCE</span>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <div className="w-24 h-28 bg-gradient-to-b from-gray-200 to-gray-300 rounded-md relative">
                  <div className="absolute top-2 left-2 right-2 bottom-6 bg-accent rounded-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">RELIANCE</span>
                  </div>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Color swatches */}
            <div className="absolute -bottom-4 -right-4 flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary shadow-lg"></div>
              <div className="w-8 h-8 rounded-full bg-secondary shadow-lg"></div>
              <div className="w-8 h-8 rounded-full bg-accent shadow-lg"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-500 shadow-lg"></div>
              <div className="w-8 h-8 rounded-full bg-red-500 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
