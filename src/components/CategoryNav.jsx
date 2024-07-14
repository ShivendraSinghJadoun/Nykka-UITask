import React from 'react';

const categories = [
  "Makeup", "Skin", "Hair", "Appliances", "Bath & Body", "Natural",
  "Mom & Baby", "Health & Wellness", "Men", "Fragrance", "Lingerie & Accessories"
];

const CategoryNav = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex space-x-4 overflow-x-auto">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-600 hover:text-pink-500 whitespace-nowrap"
          >
            {category}
          </a>
        ))}
        <a
          href="#"
          className="bg-pink-500 text-white px-3 py-1 rounded-full whitespace-nowrap"
        >
          OFFERS
        </a>
      </div>
    </nav>
  );
};

export default CategoryNav;
