
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Lead Painter</h3>
              <p className="text-gray-600 text-center">15+ years of experience in interior and exterior painting</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Color Consultant</h3>
              <p className="text-gray-600 text-center">Expert in color matching and interior design</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Project Manager</h3>
              <p className="text-gray-600 text-center">Manages painting projects and client relationships</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
