
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/Products";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
