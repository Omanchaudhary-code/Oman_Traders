
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-16 pb-20">
      {/* Paint drip animation background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 w-4 h-full bg-[#FF4B12]/20 animate-drip" />
        <div className="absolute left-[25%] w-4 h-full bg-[#1B365D]/20 animate-drip-delayed" />
        <div className="absolute right-[25%] w-4 h-full bg-[#FF4B12]/20 animate-drip" />
        <div className="absolute right-0 w-4 h-full bg-[#1B365D]/20 animate-drip-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-left">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/lovable-uploads/e86be155-bb05-4cd5-b61f-00312625c5e2.png"
                alt="Reliance Paints Logo"
                className="h-20 w-auto"
              />
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-[#1B365D]">
                Reliance Paints
              </h1>
            </div>
            <div className="space-y-6 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1B365D]">
                Authorized Dealer of Reliance Paints
              </h2>
              <p className="text-lg text-gray-700">
                Your trusted destination for premium quality paints and coating solutions. 
                We offer a comprehensive range of interior, exterior, and decorative paints 
                to transform your spaces with lasting beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-[#FF4B12] hover:bg-[#FF4B12]/90 text-white px-8 py-6"
                >
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  className="border-[#FF4B12] text-[#FF4B12] hover:bg-[#FF4B12]/10 px-8 py-6"
                >
                  <Link to="/#contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white rounded-lg shadow-xl p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B365D]/5 to-transparent rounded-lg"></div>
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <h3 className="text-2xl font-bold text-[#1B365D]">Meet Our Proprietor</h3>
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#FF4B12] shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-[#1B365D] to-[#FF4B12]/80 flex items-center justify-center">
                    <span className="text-6xl text-white">TC</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-[#1B365D]">Mr. Thamman Chaudhary</p>
                  <p className="text-gray-600">15+ Years of Excellence</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Bringing expertise and quality service to every project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
