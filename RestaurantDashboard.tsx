import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Clock, Star, ShoppingBag, TrendingUp, Users, DollarSign, 
  PieChart, ChevronDown, ChevronUp, Plus, Bell, Search, 
  ChefHat, Utensils, ShieldCheck, Calendar, BarChart2, 
  AlertCircle, Edit, Trash2, Check, X, Filter, RefreshCw
} from 'lucide-react'

type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  category: string
  isAvailable: boolean
  preparationTime: number
}

type Order = {
  id: string
  customer: string
  items: string[]
  total: string
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  time: string
  rating: number | null
  notes: string
}

const RestaurantDashboard = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'orders' | 'menu' | 'analytics'>('dashboard')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<Partial<MenuItem>>({})
  const [newItem, setNewItem] = useState<Omit<MenuItem, 'id'>>({
    name: '',
    description: '',
    price: '',
    category: '',
    isAvailable: true,
    preparationTime: 20
  })
  const [showNewItemForm, setShowNewItemForm] = useState(false)
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Ndolé',
      description: 'Plat national camerounais avec sauce aux feuilles de ndolé, arachides et viande/poisson',
      price: 'XAF 3,500',
      category: 'Plats Principaux',
      isAvailable: true,
      preparationTime: 30
    },
    {
      id: '2',
      name: 'Poulet DG',
      description: 'Poulet sauté avec plantains, légumes et sauce maison',
      price: 'XAF 4,500',
      category: 'Plats Principaux',
      isAvailable: true,
      preparationTime: 25
    },
    {
      id: '3',
      name: 'Plantains Frits',
      description: 'Plantains mûrs frits à la perfection',
      price: 'XAF 1,500',
      category: 'Accompagnements',
      isAvailable: true,
      preparationTime: 15
    }
  ])
  const [orders, setOrders] = useState<Order[]>([
    {
      id: '1',
      customer: 'Amina Diallo',
      items: ['Ndolé', 'Plantains Frits'],
      total: 'XAF 5,000',
      status: 'delivered',
      time: '12:45 PM',
      rating: 5,
      notes: 'Sans piment'
    },
    {
      id: '2',
      customer: 'Jean Kamga',
      items: ['Poulet DG', 'Jus de Gingembre'],
      total: 'XAF 5,800',
      status: 'preparing',
      time: '1:30 PM',
      rating: null,
      notes: ''
    },
    {
      id: '3',
      customer: 'Fatou Ndiaye',
      items: ['Ndolé', 'Bissap'],
      total: 'XAF 4,300',
      status: 'pending',
      time: '2:15 PM',
      rating: null,
      notes: 'Extra sauce'
    }
  ])
  const [orderFilter, setOrderFilter] = useState<'all' | 'pending' | 'preparing' | 'ready' | 'delivered'>('all')

  // Stats data
  const stats = [
    { icon: ShoppingBag, label: 'Commandes Aujourd\'hui', value: '42', change: '+12%', color: 'text-blue-600' },
    { icon: DollarSign, label: 'Revenu Aujourd\'hui', value: 'XAF 285,000', change: '+8%', color: 'text-green-600' },
    { icon: Users, label: 'Nouveaux Clients', value: '18', change: '+5%', color: 'text-purple-600' },
    { icon: Star, label: 'Note Moyenne', value: '4.7', change: '+0.2', color: 'text-yellow-600' }
  ]

  // AI Recommendations
  const aiRecommendations = [
    {
      id: '1',
      type: 'Promotion',
      title: 'Mettez en avant votre Ndolé',
      description: 'Nos données montrent que le Ndolé est très demandé les vendredis.',
      action: 'Configurer promotion'
    },
    {
      id: '2',
      type: 'Inventaire',
      title: 'Commander plus de plantains',
      description: 'Vos stocks de plantains seront épuisés dans 2 jours.',
      action: 'Passer commande'
    }
  ]

  // Popular Items
  const popularItems = [
    {
      id: '1',
      name: 'Ndolé',
      orders: 78,
      revenue: 'XAF 468,000',
      rating: 4.9
    },
    {
      id: '2',
      name: 'Poulet DG',
      orders: 65,
      revenue: 'XAF 520,000',
      rating: 4.8
    }
  ]

  // Analytics Data
  const salesData = [
    { day: 'Lun', sales: 12 },
    { day: 'Mar', sales: 19 },
    { day: 'Mer', sales: 15 },
    { day: 'Jeu', sales: 22 },
    { day: 'Ven', sales: 28 },
    { day: 'Sam', sales: 35 },
    { day: 'Dim', sales: 30 }
  ]

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const handleEdit = (item: MenuItem) => {
    setIsEditing(item.id)
    setEditForm({ ...item })
  }

  const handleSave = (id: string) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, ...editForm } : item
    ))
    setIsEditing(null)
  }

  const handleDelete = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id))
  }

  const handleAddItem = () => {
    const newId = (menuItems.length + 1).toString()
    setMenuItems([...menuItems, { ...newItem, id: newId }])
    setNewItem({
      name: '',
      description: '',
      price: '',
      category: '',
      isAvailable: true,
      preparationTime: 20
    })
    setShowNewItemForm(false)
  }

  const updateOrderStatus = (id: string, status: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status } : order
    ))
  }

  const filteredOrders = orderFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === orderFilter)

  const renderDashboardTab = () => (
    <>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* AI Recommendations */}
          <div className="card">
            <div 
              className="flex items-center justify-between p-6 cursor-pointer" 
              onClick={() => toggleSection('recommendations')}
            >
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <TrendingUp className="h-6 w-6 text-primary-500 mr-2" />
                Recommandations IA
              </h2>
              {expandedSection === 'recommendations' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {expandedSection === 'recommendations' && (
              <div className="px-6 pb-6 space-y-4">
                {aiRecommendations.map((rec) => (
                  <div key={rec.id} className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="inline-block px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full mb-1">
                          {rec.type}
                        </span>
                        <h3 className="font-semibold text-gray-900">{rec.title}</h3>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                        {rec.action}
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm">{rec.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Popular Items */}
          <div className="card">
            <div 
              className="flex items-center justify-between p-6 cursor-pointer" 
              onClick={() => toggleSection('popular')}
            >
              <h2 className="text-xl font-bold text-gray-900 flex items-center">
                <Utensils className="h-6 w-6 text-primary-500 mr-2" />
                Plats Populaires
              </h2>
              {expandedSection === 'popular' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>
            
            {expandedSection === 'popular' && (
              <div className="px-6 pb-6">
                <div className="space-y-4">
                  {popularItems.map((item) => (
                    <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{item.orders} commandes</span>
                        <span>{item.revenue} de revenu</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 btn-primary">
                  Optimiser le Menu
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Actions Rapides</h3>
            <div className="space-y-3">
              <button 
                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3"
                onClick={() => setActiveTab('menu')}
              >
                <Plus className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700">Ajouter un Nouveau Plat</span>
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-primary-500" />
                <span className="text-gray-700">Gérer les Heures d'Ouverture</span>
              </button>
            </div>
          </div>

          {/* Inventory Alerts */}
          <div className="card p-6 bg-red-50 border border-red-100">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Alertes d'Inventaire</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex justify-between">
                    <span>Plantains</span>
                    <span className="font-medium text-red-600">Stock faible (2 jours)</span>
                  </li>
                </ul>
                <button className="mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Gérer l'Inventaire
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const renderOrdersTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des Commandes</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={orderFilter}
              onChange={(e) => setOrderFilter(e.target.value as any)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            >
              <option value="all">Toutes les commandes</option>
              <option value="pending">En attente</option>
              <option value="preparing">En préparation</option>
              <option value="ready">Prêtes</option>
              <option value="delivered">Livrées</option>
            </select>
          </div>
          <button className="p-2 text-gray-600 hover:text-primary-600">
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commande</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                    <div className="text-sm text-gray-500">{order.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    <div className="text-sm text-gray-500">{order.items.join(', ')}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'preparing' ? 'bg-blue-100 text-blue-800' :
                      order.status === 'ready' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status === 'pending' ? 'En attente' :
                       order.status === 'preparing' ? 'En préparation' :
                       order.status === 'ready' ? 'Prête' : 'Livrée'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {order.status === 'pending' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'preparing')}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Commencer
                        </button>
                      )}
                      {order.status === 'preparing' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'ready')}
                          className="text-green-600 hover:text-green-900"
                        >
                          Prête
                        </button>
                      )}
                      {order.status === 'ready' && (
                        <button 
                          onClick={() => updateOrderStatus(order.id, 'delivered')}
                          className="text-purple-600 hover:text-purple-900"
                        >
                          Livrer
                        </button>
                      )}
                      <button className="text-gray-600 hover:text-gray-900">
                        Détails
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderMenuTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion du Menu</h2>
        <button 
          onClick={() => setShowNewItemForm(true)}
          className="btn-primary flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Ajouter un Plat</span>
        </button>
      </div>

      {showNewItemForm && (
        <div className="card p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Nouveau Plat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom du plat</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
              <input
                type="text"
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Prix (XAF)</label>
              <input
                type="text"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Temps de préparation (min)</label>
              <input
                type="number"
                value={newItem.preparationTime}
                onChange={(e) => setNewItem({...newItem, preparationTime: parseInt(e.target.value)})}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={3}
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={newItem.isAvailable}
                onChange={(e) => setNewItem({...newItem, isAvailable: e.target.checked})}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Disponible</label>
            </div>
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button 
              onClick={() => setShowNewItemForm(false)}
              className="btn-secondary"
            >
              Annuler
            </button>
            <button 
              onClick={handleAddItem}
              className="btn-primary"
              disabled={!newItem.name || !newItem.price || !newItem.category}
            >
              Ajouter le Plat
            </button>
          </div>
        </div>
      )}

      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Catégorie</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disponibilité</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {menuItems.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.isAvailable ? 'Disponible' : 'Indisponible'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-3">
                      {isEditing === item.id ? (
                        <>
                          <button 
                            onClick={() => handleSave(item.id)}
                            className="text-green-600 hover:text-green-900"
                          >
                            <Check className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={() => setIsEditing(null)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleEdit(item)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button 
                            onClick={() => handleDelete(item.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderAnalyticsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Analytics</h2>
        <div className="flex items-center space-x-2">
          <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm">
            <option>Cette semaine</option>
            <option>Ce mois</option>
            <option>Cette année</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Ventes Hebdomadaires</h3>
          <div className="h-64">
            {/* This would be replaced with an actual chart component */}
            <div className="flex items-end h-48 space-x-2 mt-8">
              {salesData.map((day, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-primary-500 rounded-t-sm"
                    style={{ height: `${day.sales * 4}px` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-1">{day.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Items */}
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Plats les Plus Populaires</h3>
          <div className="space-y-4">
            {popularItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(item.orders / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 ml-4">{item.orders} commandes</span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Ratings */}
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Évaluations des Clients</h3>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-lg font-bold text-gray-900">4.7</span>
            <span className="ml-1 text-gray-600">(128 avis)</span>
          </div>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <span className="w-8 text-sm font-medium text-gray-900">{rating}</span>
                <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${(rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1)}%` }}
                    ></div>
                  </div>
                </div>
                <span className="w-8 text-sm text-gray-600 text-right">
                  {rating === 5 ? '70%' : rating === 4 ? '20%' : rating === 3 ? '7%' : rating === 2 ? '2%' : '1%'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="card p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Répartition du Revenu</h3>
          <div className="flex justify-center h-48">
            {/* This would be replaced with an actual pie chart component */}
            <div className="relative w-48 h-48 rounded-full">
              <div className="absolute inset-0 rounded-full bg-blue-500" style={{ clipPath: 'circle(50% at 50% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full bg-green-500" style={{ clipPath: 'circle(30% at 50% 50%)' }}></div>
              <div className="absolute inset-0 rounded-full bg-yellow-500" style={{ clipPath: 'circle(15% at 50% 50%)' }}></div>
            </div>
          </div>
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Plats Principaux (65%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Boissons (25%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Desserts (10%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <ChefHat className="h-6 w-6 text-primary-600 mr-2" />
                Chez Mama Ngozi
              </h1>
              
              <div className="hidden md:flex space-x-1">
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'dashboard' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Tableau de Bord
                </button>
                <button 
                  onClick={() => setActiveTab('orders')}
                  className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'orders' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Commandes
                </button>
                <button 
                  onClick={() => setActiveTab('menu')}
                  className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'menu' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Menu
                </button>
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'analytics' ? 'bg-primary-100 text-primary-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Analytics
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-600 hover:text-primary-600">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-max section-padding">
        {activeTab === 'dashboard' && renderDashboardTab()}
        {activeTab === 'orders' && renderOrdersTab()}
        {activeTab === 'menu' && renderMenuTab()}
        {activeTab === 'analytics' && renderAnalyticsTab()}
      </div>
    </div>
  )
}

export default RestaurantDashboard