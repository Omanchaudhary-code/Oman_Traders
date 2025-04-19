
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Paint shop image/illustration */}
          <div className="md:w-1/2 relative">
            <div className="w-full h-[400px] rounded-lg overflow-hidden relative shadow-lg">
              {/* Shop front illustration */}
              <div className="absolute inset-0 bg-slate-100"></div>
              
              {/* Building */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white border-4 border-gray-200 rounded-md">
                {/* Shop sign */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-primary flex items-center justify-center text-white font-bold rounded-t-md">
                  LAMAHI PAINT PALACE
                </div>
                
                {/* Windows */}
                <div className="absolute top-12 left-8 w-16 h-20 bg-blue-50 border-2 border-gray-300"></div>
                <div className="absolute top-12 right-8 w-16 h-20 bg-blue-50 border-2 border-gray-300"></div>
                
                {/* Door */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-28 bg-secondary rounded-t-md"></div>
                
                {/* Paint display */}
                <div className="absolute bottom-10 left-10 flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-8 bg-gray-200 flex items-center justify-center">
                      <div className={`w-4 h-6 ${i === 0 ? 'bg-primary' : i === 1 ? 'bg-accent' : 'bg-red-500'}`}></div>
                    </div>
                  ))}
                </div>
                
                <div className="absolute bottom-10 right-10 flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-6 h-8 bg-gray-200 flex items-center justify-center">
                      <div className={`w-4 h-6 ${i === 0 ? 'bg-yellow-500' : i === 1 ? 'bg-purple-500' : 'bg-green-500'}`}></div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Nepal flag element */}
            <div className="absolute -bottom-4 -left-4 flex items-center justify-center w-20 h-20 bg-white rounded-lg shadow-lg p-2">
              <div className="w-full h-full relative bg-crimson-red">
                <div className="triangle-nepal-flag border-b-[32px] border-l-[32px] border-b-blue-900 border-l-blue-900"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">About Us</div>
            <h2 className="text-3xl font-bold mb-6">Bringing Colors to Lamahi-Dang Since 2005</h2>
            <p className="text-gray-700 mb-4">
              Lamahi Paint Palace is a family-owned business proudly serving the Lamahi-Dang region in Province No.5, Nepal. As an authorized dealer of Reliance Paints, we provide premium quality paints and coatings for residential, commercial, and industrial purposes.
            </p>
            <p className="text-gray-700 mb-6">
              Our commitment to quality products, expert color matching, and exceptional customer service has made us the preferred paint supplier in the region. With our extensive knowledge of paints and finishes, we help our customers find the perfect colors for their projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <span className="font-medium">Expert Staff</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Competitive Prices</span>
              </div>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-white">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
