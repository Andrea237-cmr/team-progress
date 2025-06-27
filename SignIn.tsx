import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, User, Store, Shield } from 'lucide-react'
import toast from 'react-hot-toast'

interface SignInForm {
  email: string
  password: string
  role: 'customer' | 'restaurant' | 'admin'
}

const SignIn = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState<SignInForm>({
    email: '',
    password: '',
    role: 'customer'
  })
  const [errors, setErrors] = useState<Partial<SignInForm>>({})

  const roleOptions = [
    { value: 'customer', label: 'Client', icon: User, color: 'primary' },
    { value: 'restaurant', label: 'Restaurant', icon: Store, color: 'primary' },
    { value: 'admin', label: 'Admin', icon: Shield, color: 'secondary' }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof SignInForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleRoleChange = (role: 'customer' | 'restaurant' | 'admin') => {
    setFormData(prev => ({ ...prev, role }))
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<SignInForm> = {}

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide'
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Sign In Data:', formData)
      toast.success(`Bienvenue ! Connexion en tant que ${formData.role}`)
      
      // Simulate successful login and redirect to appropriate dashboard
      setTimeout(() => {
        switch (formData.role) {
          case 'customer':
            navigate('/customer/dashboard')
            break
          case 'restaurant':
            navigate('/restaurant/dashboard')
            break
          case 'admin':
            navigate('/admin/dashboard')
            break
        }
      }, 1500)
    } else {
      toast.error('Veuillez corriger les erreurs ci-dessous')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bon Retour</h1>
            <p className="text-gray-600">Connectez-vous à votre compte SmartRestaurant</p>
          </div>

          {/* Role Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Se connecter en tant que
            </label>
            <div className="grid grid-cols-3 gap-2">
              {roleOptions.map((option) => {
                const IconComponent = option.icon
                const isSelected = formData.role === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleRoleChange(option.value as any)}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? option.color === 'primary'
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-secondary-500 bg-secondary-50 text-secondary-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <IconComponent className="h-5 w-5 mx-auto mb-1" />
                    <div className="text-xs font-medium">{option.label}</div>
                  </button>
                )
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Adresse Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="Entrez votre email"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de Passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
                  placeholder="Entrez votre mot de passe"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> :  <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Se Connecter
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-600">
              Vous n'avez pas de compte ?
            </p>
            <div className="flex flex-col space-y-2">
              <Link 
                to="/register/customer" 
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                S'inscrire comme Client
              </Link>
              <Link 
                to="/register/restaurant" 
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                S'inscrire comme Restaurant
              </Link>
              <Link 
                to="/register/admin" 
                className="text-secondary-600 hover:text-secondary-700 font-medium text-sm"
              >
                Inscription Admin
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SignIn