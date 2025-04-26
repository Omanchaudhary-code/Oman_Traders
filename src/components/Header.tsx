
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/gallery", label: "Gallery" },
    { path: "/team", label: "Team" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/e86be155-bb05-4cd5-b61f-00312625c5e2.png"
                alt="Reliance Paints Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold text-[#1B365D]">Oman Traders</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-[#FF4B12]",
                  isActive(item.path) ? "text-[#FF4B12]" : "text-gray-700"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-[#FF4B12] hover:bg-[#FF4B12]/90 text-white"
            >
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span className={`block w-6 h-0.5 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <nav className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-[#FF4B12]",
                  isActive(item.path) ? "text-[#FF4B12]" : "text-gray-700"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              asChild
              className="bg-[#FF4B12] hover:bg-[#FF4B12]/90 text-white w-full"
            >
              <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
