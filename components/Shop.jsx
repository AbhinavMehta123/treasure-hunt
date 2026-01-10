"use client";

import 'boxicons/css/boxicons.min.css';

const ShopSection = () => {
  const products = [
    { id: 1, name: "Legendary Blade", price: "0.75 ETH", img: "/images/bento-card1.png", icon: "bxs-sword" },
    { id: 2, name: "Cyber Helm", price: "0.58 ETH", img: "/images/bento-card5.png", icon: "bxs-shield" },
    { id: 3, name: "Mystic Wings", price: "1.10 ETH", img: "images/viki.png", icon: "bxs-planet" },
    { id: 4, name: "Arcane Core", price: "0.95 ETH", img: "/images/eva.png", icon: "bxs-bolt" },
  ];

  return (
    <div id="shop-section" className="md:min-h-[90%] p-0 lg:p-8 mt-40 md:mt-60 text-white scroll-mt-20">
      
      {/* Section Header */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-12"
          style={{
            textShadow: "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(167,139,250,0.5)",
          }}
        >
          Shop
        </h1>
       
      </div>

      {/* Shop Grid */}
      <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">

        {products.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105 group"
          >
            {/* Card Background Image */}
            <div className="absolute h-full w-full">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Button Overlay */}
              <button
                className="absolute bottom-0 h-16 w-full bg-black/70 text-white text-lg font-bold
                hover:text-yellow-400 transition-all duration-300 text-nowrap flex items-center justify-center gap-2"
              >
                <i className={`bx ${item.icon} text-2xl`}></i> {item.name}
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ShopSection;
