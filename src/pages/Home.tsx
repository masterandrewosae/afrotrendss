
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Star className="w-8 h-8 text-afro-gold" />,
      title: "Premium Quality",
      description: "Handcrafted with the finest materials and attention to detail"
    },
    {
      icon: <Shield className="w-8 h-8 text-afro-gold" />,
      title: "Authentic African",
      description: "Genuine designs rooted in rich African cultural heritage"
    },
    {
      icon: <Truck className="w-8 h-8 text-afro-gold" />,
      title: "Fast Delivery",
      description: "Quick and secure shipping across Ghana and beyond"
    }
  ];

  const testimonials = [
    {
      name: "Akosua Mensah",
      role: "Fashion Enthusiast",
      content: "Afro Trends has transformed my wardrobe. The quality and cultural authenticity are unmatched!",
      rating: 5
    },
    {
      name: "Kwame Asante",
      role: "Business Professional",
      content: "Professional, stylish, and proudly African. These pieces make me feel confident and connected to my roots.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-afro-gold-light via-afro-terracotta-light to-afro-kente-light african-pattern">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Embrace Your
            <span className="block text-afro-gold">African Heritage</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fade-in">
            Premium clothing that celebrates the beauty, strength, and elegance of African culture. 
            Handcrafted in Ghana with love and pride.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/products"
              className="bg-afro-gold hover:bg-afro-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-afro-earth px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
        
        {/* Decorative pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 kente-border"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-afro-earth mb-4">
              Why Choose Afro Trends?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering exceptional quality and authentic African fashion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 animate-slide-in">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-afro-earth mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-afro-earth mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600">
              Discover our most popular pieces
            </p>
          </div>
          
          import kenteImage from '../assets/images/kente1.jpg'; // adjust path as needed

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[1, 2, 3].map((item) => (
    <div
      key={item}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <div
        className="h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${kenteImage})` }}
      >
        <span className="text-white text-lg font-semibold bg-black bg-opacity-50 px-4 py-2 rounded">
          Featured Item {item}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-afro-earth mb-2">Premium Kente Shirt</h3>
        <p className="text-gray-600 mb-4">
          Handwoven traditional pattern with modern cut
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-afro-gold">₵250</span>
          <button className="bg-afro-earth text-white px-4 py-2 rounded-lg hover:bg-afro-earth-dark transition-colors group-hover:scale-105 transform duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-afro-gold hover:bg-afro-gold-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-afro-earth text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-afro-gold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Real stories from our valued customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-afro-gold border-opacity-20">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-afro-gold fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-semibold text-afro-gold">{testimonial.name}</h4>
                  <p className="text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-african-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-white mb-6">
            Ready to Embrace Your Style?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Join thousands of satisfied customers who trust Afro Trends for their African fashion needs
          </p>
          <Link
            to="/contact"
            className="bg-white text-afro-earth px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300 inline-flex items-center"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
