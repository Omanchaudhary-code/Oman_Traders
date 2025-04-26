
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const linkClasses = (path: string) =>
    `relative font-medium transition-colors duration-200 ${
      isActive(path)
        ? "text-[#FF4B12]"
        : "hover:text-[#FF4B12]"
    } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#FF4B12] after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 transition-transform duration-200 hover:scale-105">
          <img 
            src="/lovable-uploads/8582e922-22d8-4436-a87d-100eaf7dae00.png" 
            alt="Oman Traders Logo" 
            className="h-12 w-12 rounded-full transition-transform duration-300 hover:rotate-6"
          />
          <span className="text-xl font-bold text-gray-800 hover:text-[#FF4B12] transition-colors">
            Oman Traders
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
          <Link to="/products" className={linkClasses("/products")}>Products</Link>
          <Link to="/gallery" className={linkClasses("/gallery")}>Gallery</Link>
          <Link to="/team" className={linkClasses("/team")}>Team</Link>
          <a href="#contact" className={linkClasses("#contact")}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 transition-transform duration-200 hover:scale-110 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out translate-y-2.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white shadow-md transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4 py-4 px-4">
          <Link to="/" className={`${linkClasses("/")} text-lg`} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={`${linkClasses("/about")} text-lg`} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/products" className={`${linkClasses("/products")} text-lg`} onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/gallery" className={`${linkClasses("/gallery")} text-lg`} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/team" className={`${linkClasses("/team")} text-lg`} onClick={() => setIsMenuOpen(false)}>Team</Link>
          <a href="#contact" className={`${linkClasses("#contact")} text-lg`} onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
