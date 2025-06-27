// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: 'customer' | 'restaurant' | 'admin'
  avatar?: string
  createdAt: string
  updatedAt: string
}

export interface Customer extends User {
  preferences: {
    dietary: string[]
    cuisineTypes: string[]
    priceRange: 'budget' | 'moderate' | 'premium'
    spiceLevel: 'mild' | 'medium' | 'hot'
  }
  orderHistory: Order[]
  loyaltyPoints: number
}

export interface Restaurant extends User {
  name: string
  description: string
  cuisine: string[]
  address: Address
  phone: string
  hours: BusinessHours
  rating: number
  reviewCount: number
  images: string[]
  menu: MenuItem[]
  isActive: boolean
  subscriptionPlan: 'basic' | 'premium' | 'enterprise'
}

// Address Type
export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}

// Business Hours Type
export interface BusinessHours {
  monday: DayHours
  tuesday: DayHours
  wednesday: DayHours
  thursday: DayHours
  friday: DayHours
  saturday: DayHours
  sunday: DayHours
}

export interface DayHours {
  open: string
  close: string
  isClosed: boolean
}

// Menu Types
export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  ingredients: string[]
  allergens: string[]
  nutritionInfo?: NutritionInfo
  isAvailable: boolean
  preparationTime: number
  spiceLevel?: 'mild' | 'medium' | 'hot'
  isVegetarian: boolean
  isVegan: boolean
  isGlutenFree: boolean
  salesCount: number
  rating: number
  reviewCount: number
}

export interface NutritionInfo {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  sodium: number
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
  order: number
}

// Order Types
export interface Order {
  id: string
  customerId: string
  restaurantId: string
  items: OrderItem[]
  status: OrderStatus
  totalAmount: number
  subtotal: number
  tax: number
  deliveryFee: number
  tip: number
  paymentMethod: PaymentMethod
  deliveryAddress: Address
  estimatedDeliveryTime: string
  actualDeliveryTime?: string
  specialInstructions?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: string
  menuItemId: string
  menuItem: MenuItem
  quantity: number
  price: number
  customizations?: string[]
  specialInstructions?: string
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'

export interface PaymentMethod {
  type: 'credit_card' | 'debit_card' | 'paypal' | 'apple_pay' | 'google_pay'
  last4?: string
  brand?: string
}

// Review Types
export interface Review {
  id: string
  customerId: string
  restaurantId: string
  orderId: string
  rating: number
  comment: string
  images?: string[]
  response?: RestaurantResponse
  isVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface RestaurantResponse {
  message: string
  respondedAt: string
}

// Analytics Types
export interface RestaurantAnalytics {
  revenue: RevenueData
  orders: OrderAnalytics
  menu: MenuAnalytics
  customers: CustomerAnalytics
  reviews: ReviewAnalytics
}

export interface RevenueData {
  total: number
  daily: DailyRevenue[]
  monthly: MonthlyRevenue[]
  growth: number
}

export interface DailyRevenue {
  date: string
  revenue: number
  orders: number
}

export interface MonthlyRevenue {
  month: string
  revenue: number
  orders: number
}

export interface OrderAnalytics {
  total: number
  pending: number
  completed: number
  cancelled: number
  averageOrderValue: number
  peakHours: HourlyData[]
}

export interface HourlyData {
  hour: number
  orders: number
  revenue: number
}

export interface MenuAnalytics {
  topSellingItems: MenuItem[]
  leastSellingItems: MenuItem[]
  profitMargins: ProfitMarginData[]
  categoryPerformance: CategoryPerformance[]
}

export interface ProfitMarginData {
  itemId: string
  itemName: string
  margin: number
  revenue: number
}

export interface CategoryPerformance {
  category: string
  sales: number
  revenue: number
  growth: number
}

export interface CustomerAnalytics {
  total: number
  new: number
  returning: number
  averageOrderValue: number
  loyaltyDistribution: LoyaltyData[]
}

export interface LoyaltyData {
  segment: string
  count: number
  percentage: number
}

export interface ReviewAnalytics {
  averageRating: number
  totalReviews: number
  ratingDistribution: RatingDistribution[]
  sentimentAnalysis: SentimentData
  commonKeywords: KeywordData[]
}

export interface RatingDistribution {
  rating: number
  count: number
  percentage: number
}

export interface SentimentData {
  positive: number
  neutral: number
  negative: number
}

export interface KeywordData {
  keyword: string
  count: number
  sentiment: 'positive' | 'neutral' | 'negative'
}

// AI Types
export interface AIInsight {
  id: string
  type: 'menu_optimization' | 'pricing' | 'inventory' | 'customer_behavior'
  title: string
  description: string
  impact: string
  confidence: number
  actionItems: string[]
  createdAt: string
}

export interface InventoryPrediction {
  itemId: string
  itemName: string
  currentStock: number
  predictedDemand: number
  recommendedOrder: number
  confidence: number
  factors: string[]
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  type: 'order' | 'promotion' | 'system' | 'review'
  title: string
  message: string
  isRead: boolean
  actionUrl?: string
  createdAt: string
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  errors?: string[]
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  role: 'customer' | 'restaurant'
}

export interface RestaurantOnboardingForm {
  name: string
  description: string
  cuisine: string[]
  address: Address
  phone: string
  hours: BusinessHours
}

// Search Types
export interface SearchFilters {
  query?: string
  cuisine?: string[]
  priceRange?: [number, number]
  rating?: number
  deliveryTime?: number
  dietary?: string[]
  sortBy?: 'relevance' | 'rating' | 'delivery_time' | 'price'
  location?: {
    lat: number
    lng: number
    radius: number
  }
}

export interface SearchResult {
  restaurants: Restaurant[]
  menuItems: MenuItem[]
  totalResults: number
  filters: SearchFilters
}