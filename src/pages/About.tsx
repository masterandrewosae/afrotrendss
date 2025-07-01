
import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-afro-gold" />,
      title: "Passion for Heritage",
      description: "Every piece we create is infused with love for African culture and traditions"
    },
    {
      icon: <Users className="w-12 h-12 text-afro-gold" />,
      title: "Community First",
      description: "Supporting local artisans and communities throughout Ghana and West Africa"
    },
    {
      icon: <Globe className="w-12 h-12 text-afro-gold" />,
      title: "Global Reach",
      description: "Bringing authentic African fashion to customers worldwide"
    },
    {
      icon: <Award className="w-12 h-12 text-afro-gold" />,
      title: "Quality Excellence",
      description: "Uncompromising standards in materials, craftsmanship, and customer service"
    }
  ];

  const team = [
    {
      name: "Ama Osei",
      role: "Founder & Creative Director",
      description: "Fashion designer with 15+ years experience in African textile arts"
    },
    {
      name: "Kojo Mensah",
      role: "Head of Production",
      description: "Master craftsman specializing in traditional Ghanaian weaving techniques"
    },
    {
      name: "Efua Asante",
      role: "Marketing Director",
      description: "Brand strategist passionate about promoting African fashion globally"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-african-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
              Born from a deep love for African heritage and a vision to share our rich cultural legacy with the world
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-playfair font-bold text-afro-earth mb-6">
                From Ghana to the World
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Afro Trends was born in the bustling markets of Accra, Ghana, where our founder Ama Osei 
                  grew up surrounded by the vibrant colors, intricate patterns, and rich traditions of 
                  African textile arts. What started as a childhood fascination with her grandmother's 
                  kente cloth evolved into a lifelong passion for preserving and promoting African fashion.
                </p>
                <p>
                  In 2018, Ama decided to turn her passion into purpose. She established Afro Trends 
                  with a simple yet powerful mission: to create premium African fashion that honors 
                  traditional craftsmanship while embracing contemporary design. Every piece we create 
                  tells a story – of heritage, of artistry, and of the incredible talent found in 
                  African communities.
                </p>
                <p>
                  Today, Afro Trends works with over 50 local artisans across Ghana, providing fair 
                  wages and sustainable employment while preserving centuries-old techniques. We're 
                  not just a fashion brand; we're a bridge between traditional African culture and 
                  modern global fashion.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="h-96 bg-gradient-to-br from-afro-terracotta to-afro-kente rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-white text-2xl font-playfair">Our Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-afro-earth mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-afro-earth mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-afro-earth mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Afro Trends
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-afro-gold to-afro-terracotta rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xl">
                  <span className="text-white text-lg font-semibold">{member.name}</span>
                </div>
                <h3 className="text-xl font-semibold text-afro-earth mb-2">
                  {member.name}
                </h3>
                <p className="text-afro-gold font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-afro-earth text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-afro-gold mb-8">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            "To celebrate and preserve African cultural heritage through premium fashion, 
            while empowering local communities and sharing the beauty of African artistry 
            with the world. We believe that fashion is not just about looking good – 
            it's about feeling connected to your roots and proud of your heritage."
          </p>
          <div className="h-1 w-24 bg-afro-gold mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
