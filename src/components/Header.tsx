
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
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
          <Link to="/" className="font-medium hover:text-[#FF4B12] transition-colors">Home</Link>
          <a href="#about" className="font-medium hover:text-[#FF4B12] transition-colors">About</a>
          <a href="#products" className="font-medium hover:text-[#FF4B12] transition-colors">Products</a>
          <a href="#gallery" className="font-medium hover:text-[#FF4B12] transition-colors">Gallery</a>
          <Link to="/team" className="font-medium hover:text-[#FF4B12] transition-colors">Team</Link>
          <a href="#contact" className="font-medium hover:text-[#FF4B12] transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          <nav className="flex flex-col space-y-3 py-2">
            <Link to="/" className="font-medium hover:text-[#FF4B12] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <a href="#about" className="font-medium hover:text-[#FF4B12] transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#products" className="font-medium hover:text-[#FF4B12] transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#gallery" className="font-medium hover:text-[#FF4B12] transition-colors" onClick={() => setIsMenuOpen(false)}>Gallery</a>
            <Link to="/team" className="font-medium hover:text-[#FF4B12] transition-colors" onClick={() => setIsMenuOpen(false)}>Team</Link>
            <a href="#contact" className="font-medium hover:text-[#FF4B12] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
