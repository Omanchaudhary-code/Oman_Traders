
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
    `relative font-medium text-gray-700 transition-colors duration-200 ${
      isActive(path)
        ? "text-[#FF4B12]"
        : "hover:text-[#FF4B12]"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8582e922-22d8-4436-a87d-100eaf7dae00.png" 
              alt="Oman Traders Logo" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-800">
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
            <Link to="/" className={linkClasses("/") + " block"} onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className={linkClasses("/about") + " block"} onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/products" className={linkClasses("/products") + " block"} onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/gallery" className={linkClasses("/gallery") + " block"} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link to="/team" className={linkClasses("/team") + " block"} onClick={() => setIsMenuOpen(false)}>Team</Link>
            <a href="#contact" className={linkClasses("#contact") + " block"} onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
