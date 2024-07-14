import React from 'react';

const products = [
  {
    brand: "YVES SAINT LAURENT",
    title: "Healthy Hair Habit",
    description: "On Healthy Orders of ₹1000+",
    image: "/images/ysl.jpg"
  },
  {
    brand: "REDKEN",
    title: "Iconic Bond Repair",
    description: "Up to 10% Off!",
    image: "/images/redken.jpg"
  },
  {
    brand: "Kay",
    title: "Kay's Top picks",
    description: "Upto 20% Off",
    image: "/images/kay.jpg"
  },
];

const ProductCarousel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-50 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-full">Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
