import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Users, 
  MessageSquare,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'

const ForRestaurantsPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Menu Optimization',
      description: 'Get intelligent recommendations to boost your best-selling items and eliminate underperformers',
      benefits: ['Increase sales by 35%', 'Reduce food waste', 'Optimize pricing']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into your restaurant performance with real-time data',
      benefits: ['Sales tracking', 'Customer behavior', 'Peak hour analysis']
    },
    {
      icon: Users,
      title: 'Customer Intelligence',
      description: 'Understand your customers better with AI-powered sentiment analysis',
      benefits: ['Review analysis', 'Customer preferences', 'Loyalty insights']
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support',
      description: '24/7 chatbot handles customer inquiries and takes orders automatically',
      benefits: ['Reduce staff workload', 'Instant responses', 'Order automation']
    }
  ]

  const benefits = [
    { icon: TrendingUp, text: 'Average 35% increase in sales' },
    { icon: DollarSign, text: 'Reduce operational costs by 25%' },
    { icon: Clock, text: 'Save 10+ hours per week' },
    { icon: Shield, text: 'Enterprise-grade security' }
  ]

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      restaurant: 'Bella Vista Italian',
      content: 'SmartRestaurant transformed our business. Sales increased 40% in just 3 months!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    },
    {
      name: 'James Chen',
      restaurant: 'Dragon Palace',
      content: 'The AI recommendations are incredibly accurate. Food waste reduced by 50%.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
    },
    {
      name: 'Sarah Johnson',
      restaurant: 'Healthy Bites Cafe',
      content: 'Customer satisfaction scores improved dramatically. Best investment we made!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small restaurants',
      features: [
        'Basic AI menu optimization',
        'Customer analytics',
        'Order management',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Most popular for growing restaurants',
      features: [
        'Advanced AI optimization',
        'Predictive analytics',
        'Customer sentiment analysis',
        'Priority support',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For restaurant chains',
      features: [
        'Full AI suite',
        'Multi-location management',
        'Advanced reporting',
        'Dedicated account manager',
        'Custom development'
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Grow Your Restaurant with{' '}
                <span className="text-gradient">AI Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join 1000+ restaurants using SmartRestaurant to increase sales, 
                reduce waste, and delight customers with AI-powered insights.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register/restaurant" className="btn-primary text-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="btn-secondary text-center">
                  Schedule Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Restaurant Dashboard"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful Features for Restaurant Success
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to optimize operations and grow your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex space-x-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Trusted by Restaurant Owners Worldwide
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
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.restaurant}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your restaurant's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register/restaurant"
                  className={`w-full text-center block py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Start Free Trial
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Join thousands of successful restaurants using AI to boost profits and customer satisfaction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register/restaurant" className="btn-primary">
                Join Now - Free Trial
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-medium py-3 px-6 rounded-lg transition-all duration-200">
                Schedule Demo
              </button>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-400">
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

export default ForRestaurantsPage