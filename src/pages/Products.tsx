
import React, { useState } from 'react';
import { Star, Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'shirts', name: 'Shirts & Tops' },
    { id: 'dresses', name: 'Dresses' },
    { id: 'accessories', name: 'Accessories' },
    { id: 'traditional', name: 'Traditional Wear' },
  ];

  const products = [
    {
      id: 1,
      name: "Royal Kente Shirt",
      category: "shirts",
      price: 350,
      rating: 5,
      image: "gradient-to-br from-afro-gold to-afro-kente",
      description: "Handwoven kente patterns with contemporary fit"
    },
    {
      id: 2,
      name: "Ankara Princess Dress",
      category: "dresses", 
      price: 450,
      rating: 5,
      image: "gradient-to-br from-afro-terracotta to-afro-sunset",
      description: "Elegant ankara print dress for special occasions"
    },
    {
      id: 3,
      name: "Adinkra Symbol Necklace",
      category: "accessories",
      price: 180,
      rating: 4,
      image: "gradient-to-br from-afro-earth to-afro-gold",
      description: "Traditional Adinkra symbols in premium gold finish"
    },
    {
      id: 4,
      name: "Dashiki Classic Shirt",
      category: "traditional",
      price: 280,
      rating: 5,
      image: "gradient-to-br from-afro-kente to-afro-terracotta",
      description: "Authentic dashiki with intricate embroidered patterns"
    },
    {
      id: 5,
      name: "Bogolan Mud Cloth Top",
      category: "shirts",
      price: 320,
      rating: 4,
      image: "gradient-to-br from-afro-earth to-afro-earth-light",
      description: "Traditional Mali mud cloth in modern silhouette"
    },
    {
      id: 6,
      name: "Queen Nefertiti Dress",
      category: "dresses",
      price: 520,
      rating: 5,
      image: "gradient-to-br from-afro-gold to-afro-terracotta",
      description: "Regal evening dress inspired by ancient Egyptian elegance"
    },
    {
      id: 7,
      name: "Ashanti Gold Bracelet",
      category: "accessories",
      price: 220,
      rating: 5,
      image: "gradient-to-br from-afro-gold to-afro-gold-light",
      description: "Handcrafted bracelet with traditional Ashanti motifs"
    },
    {
      id: 8,
      name: "Kente Grand Boubou",
      category: "traditional",
      price: 680,
      rating: 5,
      image: "gradient-to-br from-afro-kente to-afro-gold",
      description: "Magnificent traditional boubou with premium kente accents"
    },
    {
      id: 9,
      name: "Wax Print Blazer",
      category: "shirts",
      price: 420,
      rating: 4,
      image: "gradient-to-br from-afro-sunset to-afro-kente",
      description: "Professional blazer in vibrant African wax print"
    }
  ];

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-african-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-4 animate-fade-in">
            Our Collection
          </h1>
          <p className="text-xl max-w-2xl mx-auto animate-fade-in">
            Discover our premium range of African-inspired fashion pieces, 
            each crafted with love and authentic cultural heritage
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5 text-afro-earth" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-afro-gold text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-afro-gold-light hover:text-afro-earth'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-afro-gold"
              >
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {sortedProducts.length} products
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
                <div className={`h-64 bg-${product.image} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <span className="text-white text-lg font-semibold z-10">
                    {product.name}
                  </span>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-2 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-afro-gold fill-current" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-afro-earth mb-2 group-hover:text-afro-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-afro-gold">
                      ₵{product.price}
                    </span>
                    <button className="bg-afro-earth text-white px-4 py-2 rounded-lg hover:bg-afro-earth-dark transition-colors group-hover:scale-105 transform duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-afro-earth text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-afro-gold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We offer custom designs and bespoke tailoring services. 
            Let us create something unique just for you.
          </p>
          <button className="bg-afro-gold hover:bg-afro-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors transform hover:scale-105 duration-300">
            Request Custom Design
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
