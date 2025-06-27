import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Public Pages
import HomePage from './pages/public/HomePage'
import HowItWorksPage from './pages/public/HowItWorksPage'
import AboutPage from './pages/public/AboutPage'
import ContactPage from './pages/public/ContactPage'
import FAQPage from './pages/public/FAQPage'
import BlogPage from './pages/public/BlogPage'
import RestaurantsPage from './pages/public/RestaurantsPage'
import ForRestaurantsPage from './pages/public/ForRestaurantsPage'

// Auth Pages
import SignIn from './pages/auth/SignIn'
import CustomerRegister from './pages/auth/CustomerRegister'
import RestaurantRegister from './pages/auth/RestaurantRegister'
import AdminRegister from './pages/auth/AdminRegister'

// Customer Pages
import CustomerAuth from './pages/customer/CustomerAuth'
import CustomerDashboard from './pages/customer/CustomerDashboard'
import BrowseRestaurants from './pages/customer/BrowseRestaurants'
import SmartSearch from './pages/customer/SmartSearch'
import RestaurantMenu from './pages/customer/RestaurantMenu'
import AIRecommender from './pages/customer/AIRecommender'
import CartOrder from './pages/customer/CartOrder'
import Checkout from './pages/customer/Checkout'
import OrderTracking from './pages/customer/OrderTracking'
import ChatbotAssistant from './pages/customer/ChatbotAssistant'
import ReviewFeedback from './pages/customer/ReviewFeedback'
import CustomerSettings from './pages/customer/CustomerSettings'

// Restaurant Pages
import RestaurantAuth from './pages/restaurant/RestaurantAuth'
import RestaurantOnboarding from './pages/restaurant/RestaurantOnboarding'
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard'
import AIMenuOptimizer from './pages/restaurant/AIMenuOptimizer'
import MenuManagement from './pages/restaurant/MenuManagement'
import OrderManagement from './pages/restaurant/OrderManagement'
import InventoryForecast from './pages/restaurant/InventoryForecast'
import ReviewAnalytics from './pages/restaurant/ReviewAnalytics'
import PromotionsLoyalty from './pages/restaurant/PromotionsLoyalty'
import RestaurantSettings from './pages/restaurant/RestaurantSettings'

// Admin Pages
import AdminAuth from './pages/admin/AdminAuth'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'
import ContentManager from './pages/admin/ContentManager'
import AIInsightsDashboard from './pages/admin/AIInsightsDashboard'
import FeedbackMonitoring from './pages/admin/FeedbackMonitoring'

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/for-restaurants" element={<ForRestaurantsPage />} />

            {/* Auth Routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register/customer" element={<CustomerRegister />} />
            <Route path="/register/restaurant" element={<RestaurantRegister />} />
            <Route path="/register/admin" element={<AdminRegister />} />

            {/* Customer Routes */}
            <Route path="/customer/auth" element={<CustomerAuth />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/browse-restaurants" element={<BrowseRestaurants />} />
            <Route path="/search" element={<SmartSearch />} />
            <Route path="/restaurant/:id" element={<RestaurantMenu />} />
            <Route path="/ai-recommender" element={<AIRecommender />} />
            <Route path="/cart" element={<CartOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/chat" element={<ChatbotAssistant />} />
            <Route path="/reviews" element={<ReviewFeedback />} />
            <Route path="/customer/settings" element={<CustomerSettings />} />

            {/* Restaurant Routes */}
            <Route path="/restaurant/auth" element={<RestaurantAuth />} />
            <Route path="/restaurant/onboarding" element={<RestaurantOnboarding />} />
            <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
            <Route path="/restaurant/ai-optimizer" element={<AIMenuOptimizer />} />
            <Route path="/restaurant/menu" element={<MenuManagement />} />
            <Route path="/restaurant/orders" element={<OrderManagement />} />
            <Route path="/restaurant/inventory" element={<InventoryForecast />} />
            <Route path="/restaurant/analytics" element={<ReviewAnalytics />} />
            <Route path="/restaurant/promotions" element={<PromotionsLoyalty />} />
            <Route path="/restaurant/settings" element={<RestaurantSettings />} />

            {/* Admin Routes */}
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/content" element={<ContentManager />} />
            <Route path="/admin/ai-insights" element={<AIInsightsDashboard />} />
            <Route path="/admin/feedback" element={<FeedbackMonitoring />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App