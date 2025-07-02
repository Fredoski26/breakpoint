import React, { useState } from 'react';
import { ShoppingCart, Zap, Shield, Truck, Star, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const ElectronicsStore = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Replace with actual owner's WhatsApp number (with country code, no + or spaces)
  const ownerWhatsApp = "1234567890"; // Example: "2348012345678" for Nigeria

  const products = [
    {
      id: 1,
      name: "PowerMax 2000W Pure Sine Wave Inverter",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 124,
      features: ["Pure Sine Wave", "2000W Power", "12V DC Input", "LCD Display"],
      description: "High-efficiency pure sine wave inverter perfect for home and office use."
    },
    {
      id: 2,
      name: "EcoLine 1500W Modified Sine Wave Inverter",
      price: 199,
      originalPrice: 249,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 89,
      features: ["Modified Sine Wave", "1500W Power", "24V DC Input", "Cooling Fan"],
      description: "Reliable and affordable inverter for basic household appliances."
    },
    {
      id: 3,
      name: "ProMax 3000W Industrial Inverter",
      price: 499,
      originalPrice: 649,
      image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 156,
      features: ["Industrial Grade", "3000W Power", "Pure Sine Wave", "Remote Control"],
      description: "Heavy-duty inverter designed for industrial and commercial applications."
    },
    {
      id: 4,
      name: "CompactPower 1000W Travel Inverter",
      price: 149,
      originalPrice: 189,
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop",
      rating: 4.5,
      reviews: 67,
      features: ["Compact Design", "1000W Power", "USB Ports", "Car Adapter"],
      description: "Perfect portable inverter for travel, camping, and mobile applications."
    },
    {
      id: 5,
      name: "SmartGrid 2500W Hybrid Inverter",
      price: 399,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 98,
      features: ["Solar Compatible", "2500W Power", "Grid Tie", "Smart Monitoring"],
      description: "Advanced hybrid inverter with solar panel compatibility and smart features."
    },
    {
      id: 6,
      name: "UltraEfficient 1800W MPPT Inverter",
      price: 329,
      originalPrice: 429,
      image: "https://images.unsplash.com/photo-1581092162054-0d5cb6e3bb52?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 112,
      features: ["MPPT Technology", "1800W Power", "95% Efficiency", "WiFi Control"],
      description: "Ultra-efficient inverter with MPPT charge controller and WiFi connectivity."
    }
  ];

  const sendWhatsAppMessage = (product) => {
    const message = `Hi! I'm interested in purchasing the ${product.name} priced at $${product.price}. Please provide more details about availability and delivery.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${ownerWhatsApp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.map((feature, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
          </div>
        </div>
        
        <button
          onClick={() => sendWhatsAppMessage(product)}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
        >
          <Phone className="w-5 h-5" />
          Buy Now on WhatsApp
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PowerTech Electronics
                </h1>
                <p className="text-sm text-gray-600">Premium Inverters & Electronics</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t">
              <nav className="flex flex-col gap-4">
                <a href="#products" className="text-gray-700 hover:text-blue-600 font-medium">Products</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
            Power Your World
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Discover our premium collection of inverters and electronics. From compact travel inverters to industrial-grade power solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>2 Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-blue-500" />
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-500" />
              <span>High Efficiency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Inverters</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully selected range of high-quality inverters designed for every need and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose PowerTech?</h2>
            <p className="text-lg opacity-90">We provide the best electronics with unmatched quality and service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="opacity-90">All products come with comprehensive warranty and quality assurance</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="opacity-90">Quick and secure delivery to your doorstep nationwide</p>
            </div>
            
            <div className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="opacity-90">Round-the-clock customer support via WhatsApp and phone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">Ready to power up? Contact us for personalized recommendations</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Chat with us instantly</p>
              <button 
                onClick={() => window.open(`https://wa.me/${ownerWhatsApp}`, '_blank')}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Start Chat
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Send us your queries</p>
              <a 
                href="mailto:info@powertech.com"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Store</h3>
              <p className="text-gray-600 mb-4">See products in person</p>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">PowerTech Electronics</h3>
            </div>
            <p className="text-gray-400 mb-6">Your trusted partner for premium electronics and inverters</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Warranty</a>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gray-400">&copy; 2025 PowerTech Electronics. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ElectronicsStore;