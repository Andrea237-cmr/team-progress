import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Store, 
  MapPin, 
  Phone, 
  Clock, 
  Camera, 
  ChefHat, 
  Users, 
  CheckCircle,
  ArrowRight,
  Upload
} from 'lucide-react'
import toast from 'react-hot-toast'

interface OnboardingData {
  restaurantInfo: {
    name: string
    description: string
    cuisine: string[]
    phone: string
    email: string
  }
  location: {
    address: string
    city: string
    region: string
    postalCode: string
  }
  hours: {
    monday: { open: string; close: string; closed: boolean }
    tuesday: { open: string; close: string; closed: boolean }
    wednesday: { open: string; close: string; closed: boolean }
    thursday: { open: string; close: string; closed: boolean }
    friday: { open: string; close: string; closed: boolean }
    saturday: { open: string; close: string; closed: boolean }
    sunday: { open: string; close: string; closed: boolean }
  }
  images: string[]
}

const RestaurantOnboarding = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<OnboardingData>({
    restaurantInfo: {
      name: '',
      description: '',
      cuisine: [],
      phone: '',
      email: ''
    },
    location: {
      address: '',
      city: '',
      region: '',
      postalCode: ''
    },
    hours: {
      monday: { open: '08:00', close: '22:00', closed: false },
      tuesday: { open: '08:00', close: '22:00', closed: false },
      wednesday: { open: '08:00', close: '22:00', closed: false },
      thursday: { open: '08:00', close: '22:00', closed: false },
      friday: { open: '08:00', close: '22:00', closed: false },
      saturday: { open: '08:00', close: '22:00', closed: false },
      sunday: { open: '10:00', close: '20:00', closed: false }
    },
    images: []
  })

  const steps = [
    { number: 1, title: 'Informations Restaurant', icon: Store },
    { number: 2, title: 'Localisation', icon: MapPin },
    { number: 3, title: 'Heures d\'ouverture', icon: Clock },
    { number: 4, title: 'Photos & Finalisation', icon: Camera }
  ]

  const cuisineOptions = [
    'Camerounaise', 'Africaine', 'Française', 'Italienne', 'Chinoise',
    'Indienne', 'Japonaise', 'Mexicaine', 'Thaïlandaise', 'Américaine',
    'Sénégalaise', 'Nigériane', 'Marocaine', 'Éthiopienne'
  ]

  const cameroonRegions = [
    'Adamaoua', 'Centre', 'Est', 'Extrême-Nord', 'Littoral',
    'Nord', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Ouest'
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log('Restaurant Onboarding Data:', formData)
    toast.success('Restaurant configuré avec succès! Bienvenue sur SmartRestaurant!')
    // Redirect to restaurant dashboard
    setTimeout(() => {
      window.location.href = '/restaurant/dashboard'
    }, 2000)
  }

  const updateRestaurantInfo = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      restaurantInfo: { ...prev.restaurantInfo, [field]: value }
    }))
  }

  const updateLocation = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      location: { ...prev.location, [field]: value }
    }))
  }

  const updateHours = (day: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      hours: {
        ...prev.hours,
        [day]: { ...prev.hours[day as keyof typeof prev.hours], [field]: value }
      }
    }))
  }

  const toggleCuisine = (cuisine: string) => {
    setFormData(prev => ({
      ...prev,
      restaurantInfo: {
        ...prev.restaurantInfo,
        cuisine: prev.restaurantInfo.cuisine.includes(cuisine)
          ? prev.restaurantInfo.cuisine.filter(c => c !== cuisine)
          : [...prev.restaurantInfo.cuisine, cuisine]
      }
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Configuration Restaurant</h1>
              <p className="text-gray-600">Étape {currentStep} sur 4</p>
            </div>
            <div className="flex items-center space-x-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
                    currentStep >= step.number
                      ? 'bg-primary-100 text-primary-700'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <step.icon className="h-4 w-4" />
                  <span className="text-sm font-medium hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white">
        <div className="container-max">
          <div className="w-full bg-gray-200 h-2">
            <div
              className="bg-primary-500 h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="container-max section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            {/* Step 1: Restaurant Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Store className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Informations sur votre Restaurant</h2>
                  <p className="text-gray-600">Parlez-nous de votre établissement</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom du Restaurant
                  </label>
                  <input
                    type="text"
                    value={formData.restaurantInfo.name}
                    onChange={(e) => updateRestaurantInfo('name', e.target.value)}
                    className="input-field"
                    placeholder="Ex: Chez Mama Ngozi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.restaurantInfo.description}
                    onChange={(e) => updateRestaurantInfo('description', e.target.value)}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Décrivez votre restaurant, votre spécialité, votre ambiance..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.restaurantInfo.phone}
                    onChange={(e) => updateRestaurantInfo('phone', e.target.value)}
                    className="input-field"
                    placeholder="+237 6XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Professionnel
                  </label>
                  <input
                    type="email"
                    value={formData.restaurantInfo.email}
                    onChange={(e) => updateRestaurantInfo('email', e.target.value)}
                    className="input-field"
                    placeholder="contact@restaurant.cm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Types de Cuisine (sélectionnez plusieurs)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {cuisineOptions.map((cuisine) => (
                      <button
                        key={cuisine}
                        type="button"
                        onClick={() => toggleCuisine(cuisine)}
                        className={`p-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                          formData.restaurantInfo.cuisine.includes(cuisine)
                            ? 'border-primary-500 bg-primary-50 text-primary-700'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        {cuisine}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <MapPin className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Localisation</h2>
                  <p className="text-gray-600">Où se trouve votre restaurant ?</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse Complète
                  </label>
                  <input
                    type="text"
                    value={formData.location.address}
                    onChange={(e) => updateLocation('address', e.target.value)}
                    className="input-field"
                    placeholder="Ex: Rue de la Réunification, Quartier Akwa"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ville
                    </label>
                    <select
                      value={formData.location.city}
                      onChange={(e) => updateLocation('city', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Sélectionnez une ville</option>
                      <option value="Yaoundé">Yaoundé</option>
                      <option value="Douala">Douala</option>
                      <option value="Garoua">Garoua</option>
                      <option value="Bamenda">Bamenda</option>
                      <option value="Maroua">Maroua</option>
                      <option value="Bafoussam">Bafoussam</option>
                      <option value="Ngaoundéré">Ngaoundéré</option>
                      <option value="Bertoua">Bertoua</option>
                      <option value="Ebolowa">Ebolowa</option>
                      <option value="Kribi">Kribi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Région
                    </label>
                    <select
                      value={formData.location.region}
                      onChange={(e) => updateLocation('region', e.target.value)}
                      className="input-field"
                    >
                      <option value="">Sélectionnez une région</option>
                      {cameroonRegions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Code Postal (optionnel)
                  </label>
                  <input
                    type="text"
                    value={formData.location.postalCode}
                    onChange={(e) => updateLocation('postalCode', e.target.value)}
                    className="input-field"
                    placeholder="Ex: BP 1234"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Hours */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Clock className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Heures d'Ouverture</h2>
                  <p className="text-gray-600">Quand êtes-vous ouvert ?</p>
                </div>

                <div className="space-y-4">
                  {Object.entries(formData.hours).map(([day, hours]) => (
                    <div key={day} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-24">
                        <span className="font-medium text-gray-900 capitalize">
                          {day === 'monday' && 'Lundi'}
                          {day === 'tuesday' && 'Mardi'}
                          {day === 'wednesday' && 'Mercredi'}
                          {day === 'thursday' && 'Jeudi'}
                          {day === 'friday' && 'Vendredi'}
                          {day === 'saturday' && 'Samedi'}
                          {day === 'sunday' && 'Dimanche'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 flex-1">
                        <input
                          type="time"
                          value={hours.open}
                          onChange={(e) => updateHours(day, 'open', e.target.value)}
                          disabled={hours.closed}
                          className="input-field flex-1 disabled:bg-gray-200"
                        />
                        <span className="text-gray-500">à</span>
                        <input
                          type="time"
                          value={hours.close}
                          onChange={(e) => updateHours(day, 'close', e.target.value)}
                          disabled={hours.closed}
                          className="input-field flex-1 disabled:bg-gray-200"
                        />
                      </div>
                      
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={hours.closed}
                          onChange={(e) => updateHours(day, 'closed', e.target.checked)}
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-sm text-gray-600">Fermé</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Photos & Completion */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <Camera className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900">Photos & Finalisation</h2>
                  <p className="text-gray-600">Ajoutez des photos de votre restaurant</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Téléchargez des Photos
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ajoutez des photos de votre restaurant, de vos plats, et de votre ambiance
                  </p>
                  <button className="btn-primary">
                    Choisir des Photos
                  </button>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div>
                      <h3 className="font-medium text-green-900">Presque Terminé !</h3>
                      <p className="text-green-700 text-sm">
                        Votre restaurant sera visible sur la plateforme après validation de notre équipe (24-48h).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Précédent
              </button>
              
              {currentStep < 4 ? (
                <button onClick={handleNext} className="btn-primary">
                  Suivant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-primary">
                  Terminer la Configuration
                  <CheckCircle className="ml-2 h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantOnboarding