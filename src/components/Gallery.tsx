
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Gallery = () => {
  // Gallery image data (placeholder data)
  const galleryItems = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "Interior",
      description: "A contemporary living room featuring Royal Emulsion in soft blue tones.",
      imageBg: "bg-blue-100",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Villa Exterior",
      category: "Exterior",
      description: "Luxury villa painted with Weather Shield in elegant cream shade.",
      imageBg: "bg-amber-100",
      color: "bg-amber-500"
    },
    {
      id: 3,
      title: "Textured Accent Wall",
      category: "Specialty",
      description: "Bedroom wall with decorative texture finish in warm gray tones.",
      imageBg: "bg-gray-100",
      color: "bg-gray-500"
    },
    {
      id: 4,
      title: "Office Space",
      category: "Commercial",
      description: "Corporate office with Silk Touch paint in professional neutral colors.",
      imageBg: "bg-slate-100",
      color: "bg-slate-500"
    },
    {
      id: 5,
      title: "Restaurant Interior",
      category: "Commercial",
      description: "Local restaurant with vibrant custom color scheme using Reliance paints.",
      imageBg: "bg-red-100",
      color: "bg-red-500"
    },
    {
      id: 6,
      title: "Residential Complex",
      category: "Exterior",
      description: "Multi-family residential building protected with All Guard exterior paint.",
      imageBg: "bg-green-100",
      color: "bg-green-500"
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary font-medium rounded-full">Project Gallery</div>
          <h2 className="text-3xl font-bold mb-4">Our Beautiful Work</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            See the transformative power of premium Reliance Paints in these completed projects throughout Lamahi-Dang.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["All", "Interior", "Exterior", "Commercial", "Specialty"].map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              className={filter === category ? "bg-primary text-white" : "border-gray-300 text-gray-700"}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div 
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer h-64"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Placeholder for actual images */}
                  <div className={`absolute inset-0 ${item.imageBg} group-hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50"></div>
                    
                    {/* Paint drips - decorative element */}
                    <div className={`absolute top-0 left-1/4 w-2 h-16 ${item.color} opacity-70`}></div>
                    <div className={`absolute top-0 left-1/3 w-3 h-20 ${item.color} opacity-60`}></div>
                    <div className={`absolute top-0 left-2/3 w-2 h-12 ${item.color} opacity-80`}></div>
                    
                    {/* For actual implementation, replace with real images */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className={`w-32 h-32 ${item.color} rounded-full`}></div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                  <DialogDescription>{item.category}</DialogDescription>
                </DialogHeader>
                <div className={`w-full h-64 rounded-md ${item.imageBg} relative mb-4`}>
                  {/* Placeholder for actual project image */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <div className={`w-32 h-32 ${item.color} rounded-full`}></div>
                  </div>
                </div>
                <p className="text-gray-700">{item.description}</p>
                <div className="flex items-center mt-2 space-x-1">
                  <span className="text-sm text-gray-600">Colors used:</span>
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div className={`w-4 h-4 rounded-full ${item.color} opacity-80`}></div>
                  <div className={`w-4 h-4 rounded-full ${item.color} opacity-60`}></div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">View More Projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
