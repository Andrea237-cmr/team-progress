import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Store, 
  ShoppingBag, 
  TrendingUp, 
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Globe
} from 'lucide-react'

const AdminDashboard = () => {
  const stats = [
    {
      icon: Users,
      label: 'Utilisateurs Actifs',
      value: '12,450',
      change: '+12%',
      changeType: 'positive'
    },
    {
      icon: Store,
      label: 'Restaurants Partenaires',
      value: '485',
      change: '+8%',
      changeType: 'positive'
    },
    {
      icon: ShoppingBag,
      label: 'Commandes ce Mois',
      value: '8,920',
      change: '+15%',
      changeType: 'positive'
    },
    {
      icon: DollarSign,
      label: 'Revenus (XAF)',
      value: '125M',
      change: '+22%',
      changeType: 'positive'
    }
  ]

  const recentActivities = [
    {
      id: '1',
      type: 'restaurant',
      message: 'Nouveau restaurant "Chez Mama Fatou" inscrit',
      time: 'Il y a 2 heures',
      status: 'pending'
    },
    {
      id: '2',
      type: 'user',
      message: '150 nouveaux utilisateurs aujourd\'hui',
      time: 'Il y a 4 heures',
      status: 'success'
    },
    {
      id: '3',
      type: 'order',
      message: 'Pic de commandes détecté à Douala',
      time: 'Il y a 6 heures',
      status: 'info'
    },
    {
      id: '4',
      type: 'alert',
      message: 'Problème de paiement signalé',
      time: 'Il y a 8 heures',
      status: 'warning'
    }
  ]

  const topRestaurants = [
    {
      name: 'Chez Mama Ngozi',
      location: 'Douala, Akwa',
      orders: 245,
      revenue: 'XAF 2.8M',
      rating: 4.8
    },
    {
      name: 'Le Palais du Ndolé',
      location: 'Yaoundé, Centre-ville',
      orders: 198,
      revenue: 'XAF 2.1M',
      rating: 4.6
    },
    {
      name: 'Saveurs du Sahel',
      location: 'Douala, Bonanjo',
      orders: 167,
      revenue: 'XAF 1.9M',
      rating: 4.7
    }
  ]

  const systemHealth = [
    { metric: 'Temps de Réponse API', value: '120ms', status: 'good' },
    { metric: 'Disponibilité', value: '99.9%', status: 'good' },
    { metric: 'Erreurs', value: '0.1%', status: 'good' },
    { metric: 'Charge Serveur', value: '45%', status: 'warning' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tableau de Bord Administrateur</h1>
              <p className="text-gray-600">Vue d'ensemble de la plateforme SmartRestaurant</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Système Opérationnel</span>
              </div>
              <div className="text-sm text-gray-600">
                Dernière mise à jour: {new Date().toLocaleTimeString('fr-FR')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max section-padding">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-primary-500" />
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Charts Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Commandes par Jour</h3>
                  <BarChart3 className="h-5 w-5 text-gray-400" />
                </div>
                <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Graphique des commandes</p>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Répartition par Région</h3>
                  <PieChart className="h-5 w-5 text-gray-400" />
                </div>
                <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Graphique circulaire</p>
                </div>
              </div>
            </motion.div>

            {/* Top Restaurants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Top Restaurants</h3>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Voir tout
                  </button>
                </div>
                <div className="space-y-4">
                  {topRestaurants.map((restaurant, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                          <span className="text-primary-600 font-semibold">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{restaurant.name}</h4>
                          <p className="text-gray-600 text-sm">{restaurant.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900">{restaurant.revenue}</div>
                        <div className="text-gray-600 text-sm">{restaurant.orders} commandes</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* System Health */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                    <Activity className="h-5 w-5 text-primary-500 mr-2" />
                    État du Système
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {systemHealth.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{item.metric}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{item.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          item.status === 'good' ? 'bg-green-500' : 
                          item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Activités Récentes</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-green-500' :
                        activity.status === 'warning' ? 'bg-yellow-500' :
                        activity.status === 'pending' ? 'bg-blue-500' : 'bg-gray-400'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-gray-900 text-sm">{activity.message}</p>
                        <p className="text-gray-500 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="card p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Gérer Utilisateurs</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <Store className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Approuver Restaurants</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Signalements</span>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700">Contenu Plateforme</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-primary-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Croissance Plateforme</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Nouveaux utilisateurs</span>
                    <span className="font-semibold text-green-600">+24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Revenus mensuels</span>
                    <span className="font-semibold text-green-600">+18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Satisfaction client</span>
                    <span className="font-semibold text-green-600">4.8/5</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard