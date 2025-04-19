
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Products = () => {
  // Product data
  const interiorPaints = [
    {
      id: 1,
      name: "Royal Emulsion",
      description: "Premium quality, washable interior wall paint with a silky finish",
      color: "bg-blue-500",
      features: ["Low VOC", "Washable", "Fungus Resistant", "3-5 Years Warranty"]
    },
    {
      id: 2,
      name: "Silk Touch",
      description: "Luxury interior paint with a smooth, silk finish and rich color depth",
      color: "bg-purple-500",
      features: ["Stain Resistant", "Anti-bacterial", "Low Odor", "5-7 Years Warranty"]
    },
    {
      id: 3,
      name: "Easy Clean",
      description: "Durable interior emulsion with superior washability for active homes",
      color: "bg-green-500",
      features: ["Highly Washable", "Child Safe", "Dust Resistant", "3 Years Warranty"]
    }
  ];

  const exteriorPaints = [
    {
      id: 1,
      name: "Weather Shield",
      description: "High-performance exterior paint that protects against harsh weather conditions",
      color: "bg-amber-500",
      features: ["UV Resistant", "Water Repellent", "Anti-Algal", "7 Years Warranty"]
    },
    {
      id: 2,
      name: "All Guard",
      description: "Premium exterior emulsion with advanced weather protection technology",
      color: "bg-red-500",
      features: ["Extreme Weather Protection", "Crack Bridging", "Color Lock Technology", "10 Years Warranty"]
    },
    {
      id: 3,
      name: "Dura Coat",
      description: "Durable exterior coating for long-lasting protection and vibrant colors",
      color: "bg-emerald-500",
      features: ["Heat Reflective", "Rain Defense", "Anti-Fade", "5 Years Warranty"]
    }
  ];

  const specialtyPaints = [
    {
      id: 1,
      name: "Metal Guard",
      description: "Specialized paint for metal surfaces providing rust protection",
      color: "bg-slate-500",
      features: ["Rust Prevention", "Quick Drying", "Scratch Resistant", "Direct to Rust Application"]
    },
    {
      id: 2,
      name: "Wood Finish",
      description: "Premium wood stains and varnishes for beautiful wooden surfaces",
      color: "bg-amber-800",
      features: ["UV Protection", "Enhances Wood Grain", "Water Resistant", "Long Lasting"]
    },
    {
      id: 3,
      name: "Texture Art",
      description: "Decorative textured finishes for unique wall designs and effects",
      color: "bg-rose-500",
      features: ["Multiple Textures", "Designer Finish", "Easy Application", "Customizable"]
    }
  ];

  const renderProductCards = (products) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className={`h-3 ${product.color}`}></div>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                {/* Color swatches */}
                <div className="flex space-x-1">
                  <div className={`w-6 h-6 rounded-full ${product.color}`}></div>
                  <div className={`w-6 h-6 rounded-full ${product.color} opacity-80`}></div>
                  <div className={`w-6 h-6 rounded-full ${product.color} opacity-60`}></div>
                  <div className={`w-6 h-6 rounded-full ${product.color} opacity-40`}></div>
                  <div className={`w-6 h-6 rounded-full ${product.color} opacity-20`}></div>
                </div>
              </div>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg className="h-4 w-4 mr-2 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">Our Products</div>
          <h2 className="text-3xl font-bold mb-4">Premium Reliance Paints</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            As an authorized dealer of Reliance Paints, we offer a wide range of high-quality paints and coatings for all your needs.
          </p>
        </div>

        <Tabs defaultValue="interior" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="interior">Interior</TabsTrigger>
              <TabsTrigger value="exterior">Exterior</TabsTrigger>
              <TabsTrigger value="specialty">Specialty</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="interior">
            {renderProductCards(interiorPaints)}
          </TabsContent>
          
          <TabsContent value="exterior">
            {renderProductCards(exteriorPaints)}
          </TabsContent>
          
          <TabsContent value="specialty">
            {renderProductCards(specialtyPaints)}
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">View All Products</Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
