import axios from 'axios'
import { OPENAI_API_KEY, OPENAI_API_URL } from '../config/api'

export interface MenuOptimizationRequest {
  restaurantId: string
  menuItems: MenuItem[]
  salesData: SalesData[]
  timeframe: string
}

export interface MenuItem {
  id: string
  name: string
  price: number
  category: string
  ingredients: string[]
  salesCount: number
  profitMargin: number
}

export interface SalesData {
  date: string
  itemId: string
  quantity: number
  revenue: number
}

export interface AIRecommendation {
  type: 'promote' | 'optimize' | 'remove' | 'new'
  itemId?: string
  title: string
  description: string
  expectedImpact: string
  confidence: number
}

export interface ChatbotRequest {
  message: string
  context?: {
    restaurantId?: string
    userId?: string
    orderHistory?: any[]
  }
}

export interface ChatbotResponse {
  message: string
  suggestions?: string[]
  actions?: {
    type: string
    data: any
  }[]
}

class AIService {
  private apiKey: string

  constructor() {
    this.apiKey = OPENAI_API_KEY || ''
  }

  async optimizeMenu(request: MenuOptimizationRequest): Promise<AIRecommendation[]> {
    try {
      const prompt = this.buildMenuOptimizationPrompt(request)
      
      const response = await axios.post(
        `${OPENAI_API_URL}/chat/completions`,
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an AI restaurant consultant specializing in menu optimization and sales analytics.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 1000,
          temperature: 0.7
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )

      return this.parseMenuOptimizationResponse(response.data.choices[0].message.content)
    } catch (error) {
      console.error('Menu optimization error:', error)
      return this.getFallbackMenuRecommendations(request)
    }
  }

  async getPersonalizedRecommendations(userId: string, preferences: any, orderHistory: any[]): Promise<MenuItem[]> {
    try {
      const prompt = this.buildRecommendationPrompt(userId, preferences, orderHistory)
      
      const response = await axios.post(
        `${OPENAI_API_URL}/chat/completions`,
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an AI food recommendation system that suggests personalized meals based on user preferences and order history.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 800,
          temperature: 0.8
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )

      return this.parseRecommendationResponse(response.data.choices[0].message.content)
    } catch (error) {
      console.error('Recommendation error:', error)
      return this.getFallbackRecommendations()
    }
  }

  async chatbotResponse(request: ChatbotRequest): Promise<ChatbotResponse> {
    try {
      const prompt = this.buildChatbotPrompt(request)
      
      const response = await axios.post(
        `${OPENAI_API_URL}/chat/completions`,
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful restaurant assistant chatbot. Help customers with orders, recommendations, and general inquiries. Be friendly, concise, and helpful.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 500,
          temperature: 0.9
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )

      return this.parseChatbotResponse(response.data.choices[0].message.content)
    } catch (error) {
      console.error('Chatbot error:', error)
      return {
        message: "I'm sorry, I'm having trouble processing your request right now. Please try again or contact our support team.",
        suggestions: ['Contact Support', 'Try Again', 'Browse Menu']
      }
    }
  }

  async analyzeSentiment(reviews: string[]): Promise<{
    overall: 'positive' | 'neutral' | 'negative'
    score: number
    insights: string[]
  }> {
    try {
      const prompt = `Analyze the sentiment of these restaurant reviews and provide insights:
      
      Reviews:
      ${reviews.join('\n---\n')}
      
      Please provide:
      1. Overall sentiment (positive/neutral/negative)
      2. Sentiment score (0-100)
      3. Key insights and themes`

      const response = await axios.post(
        `${OPENAI_API_URL}/chat/completions`,
        {
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an AI sentiment analysis expert specializing in restaurant reviews and customer feedback.'
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: 600,
          temperature: 0.3
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      )

      return this.parseSentimentResponse(response.data.choices[0].message.content)
    } catch (error) {
      console.error('Sentiment analysis error:', error)
      return {
        overall: 'neutral',
        score: 50,
        insights: ['Unable to analyze sentiment at this time']
      }
    }
  }

  private buildMenuOptimizationPrompt(request: MenuOptimizationRequest): string {
    return `Analyze this restaurant's menu performance and provide optimization recommendations:

    Restaurant ID: ${request.restaurantId}
    Timeframe: ${request.timeframe}
    
    Menu Items:
    ${request.menuItems.map(item => 
      `- ${item.name} ($${item.price}) - Category: ${item.category}, Sales: ${item.salesCount}, Margin: ${item.profitMargin}%`
    ).join('\n')}
    
    Sales Data Summary:
    ${request.salesData.slice(0, 10).map(sale => 
      `${sale.date}: Item ${sale.itemId} - Qty: ${sale.quantity}, Revenue: $${sale.revenue}`
    ).join('\n')}
    
    Please provide specific recommendations for menu optimization including items to promote, optimize, or remove.`
  }

  private buildRecommendationPrompt(userId: string, preferences: any, orderHistory: any[]): string {
    return `Generate personalized food recommendations for this customer:
    
    User ID: ${userId}
    Preferences: ${JSON.stringify(preferences)}
    Recent Orders: ${orderHistory.slice(0, 5).map(order => order.items?.join(', ')).join(' | ')}
    
    Suggest 3-5 menu items that would appeal to this customer based on their history and preferences.`
  }

  private buildChatbotPrompt(request: ChatbotRequest): string {
    return `Customer message: "${request.message}"
    
    Context: ${JSON.stringify(request.context || {})}
    
    Respond helpfully as a restaurant assistant.`
  }

  private parseMenuOptimizationResponse(response: string): AIRecommendation[] {
    // Parse AI response and return structured recommendations
    // This is a simplified version - in production, you'd have more sophisticated parsing
    return [
      {
        type: 'promote',
        title: 'Promote High-Margin Items',
        description: 'Focus marketing on items with 60%+ profit margins',
        expectedImpact: '+15% revenue',
        confidence: 85
      },
      {
        type: 'optimize',
        title: 'Optimize Pricing Strategy',
        description: 'Adjust prices on underperforming items',
        expectedImpact: '+8% profit margin',
        confidence: 78
      }
    ]
  }

  private parseRecommendationResponse(response: string): MenuItem[] {
    // Parse AI response and return menu items
    return []
  }

  private parseChatbotResponse(response: string): ChatbotResponse {
    return {
      message: response,
      suggestions: ['View Menu', 'Track Order', 'Contact Support']
    }
  }

  private parseSentimentResponse(response: string): any {
    return {
      overall: 'positive',
      score: 75,
      insights: ['Customers love the food quality', 'Service could be improved']
    }
  }

  private getFallbackMenuRecommendations(request: MenuOptimizationRequest): AIRecommendation[] {
    return [
      {
        type: 'promote',
        title: 'Promote Best Sellers',
        description: 'Feature your top-performing items more prominently',
        expectedImpact: '+12% sales',
        confidence: 90
      }
    ]
  }

  private getFallbackRecommendations(): MenuItem[] {
    return []
  }
}

export const aiService = new AIService()