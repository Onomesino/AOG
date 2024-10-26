import { useState } from 'react';
import Logo from "../components/Images/Logo.png"; // Update this path according to your folder structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <a href="/" className="text-gray-800 hover:text-gray-600">Church</a>
          </div>

          {/* Mobile menu button (hamburger) */}
          <div className="block sm:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-800"
            >
              <div className={`w-6 h-0.5 bg-gray-800 mb-1 transition-all duration-200 ease-out ${isOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-800 transition-all duration-200 ease-out ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-800 mt-1 transition-all duration-200 ease-out ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex items-center space-x-6">
            <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="sermons.html" className="text-gray-800 hover:text-gray-600">Sermons</a>
            <a href="/events" className="text-gray-800 hover:text-gray-600">Events</a>
            <a href="/about" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">Contact</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 bg-yellow-500 text-white px-4 py-2 rounded">Donate</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="sm:hidden flex flex-col space-y-4 mt-4 px-6 pb-4">
            <a href="/" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="sermons.html" className="text-gray-800 hover:text-gray-600">Sermons</a>
            <a href="/events" className="text-gray-800 hover:text-gray-600">Events</a>
            <a href="/about" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600">Contact</a>
            <a href="#" className="text-gray-800 hover:text-gray-600 bg-yellow-500 text-white px-4 py-2 rounded">Donate</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
