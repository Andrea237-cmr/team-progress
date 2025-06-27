# SmartRestaurant Platform

A comprehensive AI-powered restaurant growth platform built with React, TypeScript, and Tailwind CSS. This platform connects restaurants with customers while providing intelligent insights to boost sales, reduce waste, and improve customer satisfaction.

## 🚀 Features

### For Customers
- **Smart Restaurant Discovery**: Browse and search restaurants with AI-powered recommendations
- **Personalized Meal Suggestions**: Get recommendations based on preferences and order history
- **Real-time Order Tracking**: Track orders from preparation to delivery
- **AI Chatbot Assistant**: 24/7 support for ordering and inquiries
- **Review & Feedback System**: Share experiences and read authentic reviews

### For Restaurants
- **AI Menu Optimization**: Intelligent recommendations to boost sales and reduce waste
- **Advanced Analytics**: Comprehensive insights into performance and customer behavior
- **Order Management**: Streamlined order processing and tracking
- **Inventory Forecasting**: AI-powered predictions to optimize stock levels
- **Customer Sentiment Analysis**: Understand customer feedback with AI insights

### For Administrators
- **Platform Management**: Comprehensive admin dashboard for platform oversight
- **User Management**: Manage customers, restaurants, and admin accounts
- **Content Management**: Control platform content and resources
- **AI Insights Dashboard**: Platform-wide analytics and performance metrics

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Build Tool**: Vite
- **Styling**: PostCSS, Autoprefixer

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── layout/         # Layout components (Navbar, Footer)
├── pages/              # Page components organized by user type
│   ├── public/         # Public pages (Home, About, Contact, etc.)
│   ├── auth/           # Authentication pages (Sign In, Register)
│   ├── customer/       # Customer-specific pages
│   ├── restaurant/     # Restaurant-specific pages
│   └── admin/          # Admin-specific pages
├── services/           # API services and business logic
├── types/              # TypeScript type definitions
├── config/             # Configuration files
└── assets/             # Static assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-restaurant-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your API keys:
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_NODE_ENV=development
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Design System

### Colors
- **Primary**: Orange gradient (#f59332 to #f2750a)
- **Secondary**: Slate gray (#64748b to #0f172a)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family
- **Font weights**: 300, 400, 500, 600, 700, 800

### Components
- **Buttons**: Primary, secondary, and ghost variants
- **Cards**: Elevated cards with hover effects
- **Forms**: Consistent input styling with validation
- **Navigation**: Responsive navbar with mobile menu

## 📱 Responsive Design

The platform is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔐 Authentication Flow

### Customer Registration (`/register/customer`)
- Full name, email, password, favorite cuisine
- Redirects to customer dashboard on success

### Restaurant Registration (`/register/restaurant`)
- Owner name, business email, restaurant name, phone
- Redirects to onboarding flow on success

### Admin Registration (`/register/admin`)
- Full name, email, password, access code
- Requires special access code: `ADMIN2025`

### Sign In (`/signin`)
- Role-based authentication (Customer/Restaurant/Admin)
- Redirects to appropriate dashboard

## 🤖 AI Integration

### OpenAI Integration
The platform integrates with OpenAI GPT-4 for:
- Menu optimization recommendations
- Personalized meal suggestions
- Chatbot responses
- Sentiment analysis of reviews

### AI Services (`src/services/aiService.ts`)
- `optimizeMenu()` - Analyze menu performance and provide recommendations
- `getPersonalizedRecommendations()` - Generate personalized meal suggestions
- `chatbotResponse()` - Handle customer inquiries
- `analyzeSentiment()` - Analyze customer review sentiment

## 📊 Analytics & Insights

### Restaurant Analytics
- Sales performance tracking
- Customer behavior analysis
- Menu item performance
- Peak hours identification
- Revenue forecasting

### Customer Intelligence
- Order history analysis
- Preference learning
- Loyalty program insights
- Personalization engine

## 🛣️ Routing Structure

### Public Routes
- `/` - Home page
- `/how-it-works` - Platform explanation
- `/restaurants` - Restaurant discovery
- `/about` - About the platform
- `/contact` - Contact form
- `/for-restaurants` - Restaurant marketing page

### Authentication Routes
- `/signin` - Universal sign in
- `/register/customer` - Customer registration
- `/register/restaurant` - Restaurant registration
- `/register/admin` - Admin registration

### Customer Routes
- `/customer/dashboard` - Customer dashboard
- `/browse-restaurants` - Restaurant browsing
- `/search` - Smart search functionality
- `/restaurant/:id` - Restaurant menu view
- `/ai-recommender` - AI meal recommendations
- `/cart` - Shopping cart
- `/checkout` - Order checkout
- `/order-tracking` - Real-time order tracking

### Restaurant Routes
- `/restaurant/dashboard` - Restaurant dashboard
- `/restaurant/onboarding` - Initial setup
- `/restaurant/ai-optimizer` - AI menu optimization
- `/restaurant/menu` - Menu management
- `/restaurant/orders` - Order management
- `/restaurant/analytics` - Performance analytics

### Admin Routes
- `/admin/dashboard` - Admin dashboard
- `/admin/users` - User management
- `/admin/content` - Content management
- `/admin/ai-insights` - Platform analytics

## 🎯 Building New Pages

### Page Template
```tsx
import React from 'react'
import { motion } from 'framer-motion'

const NewPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Page Title
            </h1>
            <p className="text-xl text-gray-600">
              Page description
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NewPage
```

### Adding Routes
1. Create the page component in the appropriate directory
2. Import the component in `App.tsx`
3. Add the route to the Routes component
4. Update navigation if needed

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established color scheme
- Use consistent spacing (8px grid system)
- Implement responsive design
- Add hover states and transitions
- Use Framer Motion for animations

## 🔄 State Management

Currently using React's built-in state management:
- `useState` for component state
- `useEffect` for side effects
- Props for data passing
- Context API for global state (when needed)

For larger applications, consider adding:
- Redux Toolkit
- Zustand
- React Query for server state

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables for Production
Ensure all environment variables are set in your production environment:
- `VITE_API_BASE_URL` - Your production API URL
- `VITE_OPEN AI_API_KEY` - OpenAI API key
- Other service API keys as needed

### Deployment Platforms
The app can be deployed to:
- Vercel
- Netlify
- AWS Amplify
- Firebase Hosting
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Email: support@smartrestaurant.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 🔮 Future Enhancements

- Real-time notifications
- Mobile app (React Native)
- Advanced AI features
- Multi-language support
- Payment integration
- Third-party integrations (POS systems, delivery services)
- Advanced analytics dashboard
- Machine learning model training