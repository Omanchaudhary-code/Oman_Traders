
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
        <Link to="/" className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105">
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-[#FF4B12] rounded-full opacity-70"></div>
            <div className="absolute inset-1 bg-[#002B5C] rounded-full opacity-70"></div>
            <div className="absolute inset-2 bg-[#FF4B12] rounded-full opacity-70"></div>
            <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center font-bold text-xs">OT</div>
          </div>
          <span className="font-bold text-xl">Oman Traders</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/about" className={linkClasses("/about")}>About</Link>
          <Link to="/products" className={linkClasses("/products")}>Products</Link>
          <Link to="/gallery" className={linkClasses("/gallery")}>Gallery</Link>
          <Link to="/team" className={linkClasses("/team")}>Team</Link>
          <a href="#contact" className={linkClasses("#contact")}>Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 transition-transform duration-200 hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div 
        className={`md:hidden bg-white shadow-md transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-3 py-2 px-4">
          <Link to="/" className={linkClasses("/")} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className={linkClasses("/about")} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/products" className={linkClasses("/products")} onClick={() => setIsMenuOpen(false)}>Products</Link>
          <Link to="/gallery" className={linkClasses("/gallery")} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/team" className={linkClasses("/team")} onClick={() => setIsMenuOpen(false)}>Team</Link>
          <a href="#contact" className={linkClasses("#contact")} onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
