import React, { useRef, useState, useEffect } from 'react';
//import './App.css';
import { ArrowRight } from "lucide-react";
import logoImage1 from './images/image1.jpg';
import logoImage2 from './images/image2.jpg';
import logoImage3 from './images/image3.jpg';
import logoImage4 from './images/image4.jpg';

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SolutionCard 
            bgColor="#155E75"
            title="Digital Solutions"
            description="Transforming operations through data-driven technology and AI."
            image={logoImage1}
          />
          
          <SolutionCard 
            bgColor="#0F766E"
            title="Sustainability"
            description="Advancing sustainable energy production and reducing environmental impact."
            image={logoImage2}
          />
          
          <SolutionCard 
            bgColor="#047857"
            title="Production Optimization"
            description="Maximizing resource recovery with innovative solutions."
            image={logoImage3}
          />
          
          <SolutionCard 
            bgColor="#047857"
            title="Production Optimization"
            description="Maximizing resource recovery with innovative solutions."
            image={logoImage4}
          />
          
          <SolutionCard 
            bgColor="#047857"
            title="Production Optimization"
            description="Maximizing resource recovery with innovative solutions."
            image={logoImage1}
          />
          
          <SolutionCard 
            bgColor="#047857"
            title="Production Optimization"
            description="Maximizing resource recovery with innovative solutions."
            image={logoImage2}
          />
        </div>
      </div>
    </section>
  );
}

function SolutionCard({ bgColor, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:translate-y-1 hover:shadow-lg">
      <div className="h-48 w-full relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            className="h-full w-full" 
            style={{ backgroundColor: bgColor }}
          />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors"
        >
          Learn More <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
}