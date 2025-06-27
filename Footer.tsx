import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/src/assets/logo restaurant.png" 
                alt="JT's Corner Restaurant" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold">SmartRestaurant</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering restaurants with AI-driven insights to boost sales, reduce waste, and enhance customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/how-it-works" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">How It Works</Link></li>
              <li><Link to="/restaurants" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Browse Restaurants</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Restaurants</h3>
            <ul className="space-y-2">
              <li><Link to="/restaurant/auth" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Join Platform</Link></li>
              <li><Link to="/restaurant/dashboard" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Dashboard</Link></li>
              <li><Link to="/restaurant/ai-optimizer" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">AI Menu Optimizer</Link></li>
              <li><Link to="/restaurant/analytics" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Analytics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-400" />
                <span className="text-gray-300">support@smartrestaurant.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-400" />
                <span className="text-gray-300">+237 6 56 91 91 64</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-gray-300">Zuatoupsi, Dispensaire Messasi, Yaounde</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 SmartRestaurant Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer