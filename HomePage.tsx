import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  Users, 
  ChefHat, 
  Smartphone, 
  BarChart3,
  Star,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Shield
} from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Menu Optimization',
      description: 'Smart recommendations to boost your best-selling items and eliminate waste'
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'Personalized recommendations that increase satisfaction and order value'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast demand, optimize inventory, and maximize profitability'
    },
    {
      icon: Smartphone,
      title: 'AI Chatbot Assistant',
      description: '24/7 customer support and intelligent order assistance'
    }
  ]

  const benefits = [
    { icon: TrendingUp, text: 'Increase sales by up to 35%' },
    { icon: Target, text: 'Reduce food waste by 40%' },
    { icon: Star, text: 'Improve customer satisfaction' },
    { icon: Zap, text: 'Automate routine tasks' }
  ]

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Owner, Bella Vista Restaurant',
      content: 'Our sales increased by 28% in just 3 months. The AI recommendations are incredibly accurate!',
      rating: 5
    },
    {
      name: 'James Chen',
      role: 'Manager, Dragon Palace',
      content: 'Food waste reduced dramatically. The inventory predictions are spot-on every time.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Owner, Healthy Bites Cafe',
      content: 'Customer satisfaction scores improved significantly. The personalized recommendations work!',
      rating: 5
    }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Grow Your Restaurant with{' '}
                  <span className="text-gradient">AI Intelligence</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Boost sales, reduce waste, and delight customers with our AI-powered platform. 
                  Join 1000+ restaurants already growing smarter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/restaurant/auth" className="btn-primary text-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/how-it-works" className="btn-secondary text-center">
                  See How It Works
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <benefit.icon className="h-6 w-6 text-primary-500" />
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg"
                  alt="Restaurant Dashboard"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-200 rounded-full opacity-20 animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary-300 rounded-full opacity-30"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Powerful AI Features for Modern Restaurants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to optimize operations, increase profits, and create exceptional dining experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center hover:shadow-glow group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1000+', label: 'Restaurants Served' },
              { number: '35%', label: 'Average Sales Increase' },
              { number: '40%', label: 'Waste Reduction' },
              { number: '99.9%', label: 'Uptime Guarantee' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Loved by Restaurant Owners Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about their success with SmartRestaurant
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of successful restaurants using AI to boost profits and customer satisfaction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/restaurant/auth" className="btn-primary">
                Start Your Free Trial
              </Link>
              <Link to="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-secondary-900">
                Schedule Demo
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage