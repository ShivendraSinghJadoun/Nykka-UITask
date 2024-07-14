import React from 'react';

const Banner = () => {
  return (
    <div className="bg-pink-500 text-white py-4 px-4 flex flex-col md:flex-row items-center justify-between text-sm">
      <span className="font-bold mb-2 md:mb-0">BEAUTY BONANZA Get Your Amazing Deals!</span>
      <div className="flex flex-wrap justify-center space-x-4">
        <button className="flex items-center mb-2 md:mb-0"><i className="fas fa-mobile-alt mr-1"></i> Get App</button>
        <button className="flex items-center mb-2 md:mb-0"><i className="fas fa-map-marker-alt mr-1"></i> Store & Events</button>
        <button className="flex items-center mb-2 md:mb-0"><i className="fas fa-gift mr-1"></i> Gift Card</button>
        <button className="flex items-center"><i className="fas fa-question-circle mr-1"></i> Help</button>
      </div>
    </div>
  );
}

export default Banner;
