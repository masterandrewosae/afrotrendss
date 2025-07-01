
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'lookbook', name: 'Lookbook' },
    { id: 'behind-scenes', name: 'Behind the Scenes' },
    { id: 'cultural', name: 'Cultural Heritage' },
    { id: 'events', name: 'Events' },
  ];

  const galleryItems = [
    { id: 1, category: 'lookbook', title: 'Royal Kente Collection', color: 'from-afro-gold to-afro-kente' },
    { id: 2, category: 'cultural', title: 'Traditional Weaving', color: 'from-afro-earth to-afro-terracotta' },
    { id: 3, category: 'lookbook', title: 'Ankara Elegance', color: 'from-afro-terracotta to-afro-sunset' },
    { id: 4, category: 'behind-scenes', title: 'Artisan at Work', color: 'from-afro-earth to-afro-gold' },
    { id: 5, category: 'events', title: 'Fashion Show 2024', color: 'from-afro-kente to-afro-gold' },
    { id: 6, category: 'lookbook', title: 'Modern Dashiki', color: 'from-afro-sunset to-afro-kente' },
    { id: 7, category: 'cultural', title: 'Adinkra Symbols', color: 'from-afro-gold to-afro-earth' },
    { id: 8, category: 'behind-scenes', title: 'Design Process', color: 'from-afro-terracotta to-afro-kente' },
    { id: 9, category: 'lookbook', title: 'Executive Collection', color: 'from-afro-earth to-afro-gold-dark' },
    { id: 10, category: 'events', title: 'Cultural Festival', color: 'from-afro-kente to-afro-terracotta' },
    { id: 11, category: 'lookbook', title: 'Bridal Elegance', color: 'from-afro-gold-light to-afro-terracotta-light' },
    { id: 12, category: 'cultural', title: 'Heritage Patterns', color: 'from-afro-kente-dark to-afro-earth' },
  ];

  const filteredItems = galleryItems.filter(item => 
    selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-african-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-4 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in">
            Explore the beauty of African fashion through our curated collection of images, 
            showcasing our designs, heritage, and the artistry behind every piece
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-afro-gold text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-afro-gold-light hover:text-afro-earth'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600 text-center">
              Showing {filteredItems.length} images
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                  index % 4 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative ${index % 4 === 0 ? 'h-96' : 'h-64'} bg-gradient-to-br ${item.color} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="relative z-10 text-center text-white p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-afro-gold mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Decorative Pattern Overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300" 
                       style={{
                         backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                                          radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                       }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-afro-earth mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every piece in our gallery represents hours of skilled craftsmanship and 
            cultural heritage. Explore our products to find your perfect piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-afro-gold hover:bg-afro-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Shop Collection
            </button>
            <button className="border-2 border-afro-earth text-afro-earth hover:bg-afro-earth hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Request Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-16 bg-afro-earth text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-afro-gold mb-4">
              Behind the Artistry
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Each piece you see is the result of generations of traditional knowledge 
              combined with contemporary design vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-afro-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-afro-gold">Design</h3>
              <p className="opacity-90">
                Our designers draw inspiration from traditional African patterns and contemporary fashion trends
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-afro-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-afro-gold">Craft</h3>
              <p className="opacity-90">
                Skilled artisans use time-honored techniques to create each piece with meticulous attention to detail
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-afro-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-afro-gold">Deliver</h3>
              <p className="opacity-90">
                Every finished piece represents our commitment to quality, heritage, and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
