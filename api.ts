// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'

// OpenAI Configuration
export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
export const OPENAI_API_URL = 'https://api.openai.com/v1'

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile'
  },
  
  // Restaurants
  RESTAURANTS: {
    LIST: '/restaurants',
    DETAIL: '/restaurants/:id',
    CREATE: '/restaurants',
    UPDATE: '/restaurants/:id',
    DELETE: '/restaurants/:id',
    MENU: '/restaurants/:id/menu',
    ORDERS: '/restaurants/:id/orders',
    ANALYTICS: '/restaurants/:id/analytics'
  },
  
  // AI Services
  AI: {
    MENU_OPTIMIZATION: '/ai/menu-optimization',
    RECOMMENDATIONS: '/ai/recommendations',
    CHATBOT: '/ai/chatbot',
    SENTIMENT_ANALYSIS: '/ai/sentiment-analysis',
    INVENTORY_PREDICTION: '/ai/inventory-prediction'
  },
  
  // Orders
  ORDERS: {
    LIST: '/orders',
    CREATE: '/orders',
    UPDATE: '/orders/:id',
    TRACK: '/orders/:id/track'
  },
  
  // Reviews
  REVIEWS: {
    LIST: '/reviews',
    CREATE: '/reviews',
    ANALYTICS: '/reviews/analytics'
  }
}

// HTTP Client Configuration
export const httpConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
}

// AI Service Configuration
export const aiConfig = {
  openai: {
    apiKey: OPENAI_API_KEY,
    model: 'gpt-4',
    maxTokens: 1000,
    temperature: 0.7
  }
}