
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
