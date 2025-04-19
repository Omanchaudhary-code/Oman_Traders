
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GallerySection from "@/components/Gallery";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
