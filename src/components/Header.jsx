import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-3xl font-sans text-pink-500">𝒩𝒴𝒦𝒜𝒜</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Categories</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Brands</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Luxe</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Nykaa Fashion</a>
          <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Beauty Advice</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search on Nykaa"
            className="hidden md:block px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="hidden md:block bg-pink-500 text-white px-4 py-2 rounded-full">Sign in</button>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Categories</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Brands</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Luxe</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Nykaa Fashion</a>
            <a href="#" className="text-gray-600 font-semibold hover:text-pink-500">Beauty Advice</a>
            <input
              type="text"
              placeholder="Search on Nykaa"
              className="px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Sign in</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
