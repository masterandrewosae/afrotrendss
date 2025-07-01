
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-afro-earth text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-african-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-afro-gold">
                Afro Trends
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Celebrating African heritage through premium fashion. We bring you authentic, 
              high-quality clothing that tells the story of our rich cultural legacy.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-white text-sm font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-afro-gold rounded-full flex items-center justify-center cursor-pointer hover:bg-afro-gold-dark transition-colors">
                <span className="text-white text-sm font-bold">i</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-afro-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-afro-gold">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Accra, Ghana</p>
              <p>+233 XX XXX XXXX</p>
              <p>info@afrotrends.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Afro Trends. All rights reserved. Proudly Ghanaian.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
