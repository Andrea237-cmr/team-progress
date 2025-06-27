import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Clock, 
  Star, 
  MapPin, 
  ShoppingBag, 
  TrendingUp,
  Gift,
  Bell,
  Search,
  ChefHat
} from 'lucide-react'

const CustomerDashboard = () => {
  const recentOrders = [
    {
      id: '1',
      restaurant: 'Chez Mama Ngozi',
      items: ['Ndolé', 'Plantain Frit', 'Jus de Gingembre'],
      total: 'XAF 4,500',
      status: 'Livré',
      date: '2024-01-15',
      rating: 5
    },
    {
      id: '2',
      restaurant: 'Le Palais du Ndolé',
      items: ['Poulet DG', 'Riz Sauté'],
      total: 'XAF 6,200',
      status: 'En cours',
      date: '2024-01-14',
      rating: null
    },
    {
      id: '3',
      restaurant: 'Saveurs du Sahel',
      items: ['Thieboudienne', 'Bissap'],
      total: 'XAF 3,800',
      status: 'Livré',
      date: '2024-01-12',
      rating: 4
    }
  ]

  const favoriteRestaurants = [
    {
      id: '1',
      name: 'Chez Mama Ngozi',
      cuisine: 'Camerounaise',
      rating: 4.8,
      deliveryTime: '25-35 min',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
    },
    {
      id: '2',
      name: 'Tokyo Sushi Cameroun',
      cuisine: 'Japonaise',
      rating: 4.9,
      deliveryTime: '35-45 min',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg'
    },
    {
      id: '3',
      name: 'Épices de Bombay',
      cuisine: 'Indienne',
      rating: 4.5,
      deliveryTime: '25-35 min',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
    }
  ]

  const recommendations = [
    {
      id: '1',
      name: 'Koki aux Crevettes',
      restaurant: 'Koki House',
      price: 'XAF 2,500',
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
      reason: 'Basé sur vos commandes récentes'
    },
    {
      id: '2',
      name: 'Tajine d\'Agneau',
      restaurant: 'Tajine du Maghreb',
      price: 'XAF 5,800',
      image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg',
      reason: 'Populaire dans votre quartier'
    }
  ]

  const stats = [
    { icon: ShoppingBag, label: 'Commandes', value: '24', color: 'text-blue-600' },
    { icon: Heart, label: 'Favoris', value: '8', color: 'text-red-600' },
    { icon: Gift, label: 'Points Fidélité', value: '1,250', color: 'text-green-600' },
    { icon: Star, label: 'Note Moyenne', value: '4.8', color: 'text-yellow-600' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Bonjour, Amina ! 👋</h1>
              <p className="text-gray-600">Que souhaitez-vous manger aujourd'hui ?</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-primary-600">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max section-padding">
        {/* Quick Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Rechercher restaurants, plats, cuisines..."
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-lg"
            />
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* AI Recommendations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <ChefHat className="h-6 w-6 text-primary-500 mr-2" />
                  Recommandations IA pour Vous
                </h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Voir tout
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {recommendations.map((item) => (
                  <div key={item.id} className="card overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.restaurant}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary-600">{item.price}</span>
                        <button className="btn-primary text-sm py-2 px-4">
                          Commander
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Orders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 text-primary-500 mr-2" />
                  Commandes Récentes
                </h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Voir tout
                </button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">{order.restaurant}</h3>
                        <p className="text-gray-600 text-sm">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{order.total}</div>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Livré' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-700 text-sm">
                        {order.items.join(', ')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      {order.rating ? (
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">Noté {order.rating}/5</span>
                        </div>
                      ) : (
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                          Noter cette commande
                        </button>
                      )}
                      <button className="btn-secondary text-sm py-2 px-4">
                        Recommander
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Favorite Restaurants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  Restaurants Favoris
                </h2>
              </div>
              <div className="space-y-4">
                {favoriteRestaurants.map((restaurant) => (
                  <div key={restaurant.id} className="card p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-sm">{restaurant.name}</h3>
                        <p className="text-gray-600 text-xs">{restaurant.cuisine}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600">{restaurant.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-600">{restaurant.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Loyalty Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card p-6 bg-gradient-to-br from-primary-50 to-primary-100"
            >
              <div className="text-center">
                <Gift className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Programme de Fidélité
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vous avez 1,250 points ! Plus que 250 points pour votre prochaine récompense.
                </p>
                <div className="w-full bg-white rounded-full h-2 mb-4">
                  <div className="bg-primary-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                </div>
                <button className="btn-primary w-full text-sm">
                  Voir Récompenses
                </button>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="card p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions Rapides</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Restaurants à proximité</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Tendances du jour</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                  <Star className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">Mieux notés</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDashboard