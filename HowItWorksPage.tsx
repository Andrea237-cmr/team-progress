import React from 'react'
import { motion } from 'framer-motion'
import { 
  UserPlus, 
  Search, 
  Brain, 
  ShoppingCart, 
  Store, 
  BarChart3, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const HowItWorksPage = () => {
  const customerSteps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your free customer account and set your food preferences'
    },
    {
      icon: Search,
      title: 'Browse & Search',
      description: 'Discover restaurants and use our smart search to find exactly what you crave'
    },
    {
      icon: Brain,
      title: 'Get AI Recommendations',
      description: 'Receive personalized meal suggestions based on your taste and order history'
    },
    {
      icon: ShoppingCart,
      title: 'Order & Enjoy',
      description: 'Place your order with confidence and track it in real-time'
    }
  ]

  const restaurantSteps = [
    {
      icon: Store,
      title: 'Join Platform',
      description: 'Register your restaurant and complete the simple onboarding process'
    },
    {
      icon: Brain,
      title: 'AI Menu Optimization',
      description: 'Let our AI analyze your menu and suggest improvements for better sales'
    },
    {
      icon: BarChart3,
      title: 'Track Analytics',
      description: 'Monitor performance with detailed insights and customer feedback analysis'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Increase sales, reduce waste, and improve customer satisfaction'
    }
  ]

  const benefits = [
    'Personalized food recommendations',
    'Real-time order tracking',
    'Smart search functionality',
    'AI-powered menu optimization',
    'Detailed analytics dashboard',
    'Customer sentiment analysis',
    'Inventory prediction',
    '24/7 chatbot support'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How SmartRestaurant Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our AI-powered platform connects hungry customers with amazing restaurants 
              while helping businesses grow smarter and more efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Food Lovers
            </h2>
            <p className="text-xl text-gray-600">
              Experience a smarter way to discover and order your favorite meals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < customerSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-primary-400 mx-auto mt-6 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Restaurants Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Restaurant Owners
            </h2>
            <p className="text-xl text-gray-600">
              Leverage AI to optimize your operations and grow your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurantSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-10 w-10 text-primary-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < restaurantSteps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-primary-400 mx-auto mt-6 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Platform Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Discover all the features that make SmartRestaurant the best choice
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers and successful restaurants
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Browse Restaurants
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-all duration-200">
                Join as Restaurant
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage