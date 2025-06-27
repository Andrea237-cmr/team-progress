import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Award, 
  Heart,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react'

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Nous utilisons une technologie IA de pointe pour résoudre les vrais problèmes de l\'industrie alimentaire'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Créer des connexions entre restaurants et amateurs de cuisine dans chaque quartier'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Engagés à fournir la plateforme et l\'expérience client de la plus haute qualité'
    },
    {
      icon: Heart,
      title: 'Durabilité',
      description: 'Réduire le gaspillage alimentaire et promouvoir des pratiques durables dans l\'industrie'
    }
  ]

  const team = [
    {
      name: 'Amina Mballa',
      role: 'PDG & Co-Fondatrice',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      bio: 'Ancienne propriétaire de restaurant avec 15+ ans dans l\'industrie alimentaire',
      social: { linkedin: '#', twitter: '#', email: 'amina@smartrestaurant.cm' }
    },
    {
      name: 'Jean-Claude Fotso',
      role: 'CTO & Co-Fondateur',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      bio: 'Expert en IA avec une formation en apprentissage automatique et science des données',
      social: { linkedin: '#', twitter: '#', email: 'jeanc@smartrestaurant.cm' }
    },
    {
      name: 'Grace Nkomo',
      role: 'Directrice Produit',
      image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
      bio: 'Stratège produit passionnée par l\'expérience utilisateur et le design',
      social: { linkedin: '#', twitter: '#', email: 'grace@smartrestaurant.cm' }
    },
    {
      name: 'Paul Biya Jr.',
      role: 'Directeur Technique',
      image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
      bio: 'Développeur full-stack expert en applications web évolutives',
      social: { linkedin: '#', twitter: '#', email: 'paul@smartrestaurant.cm' }
    }
  ]

  const stats = [
    { number: '500+', label: 'Restaurants Partenaires' },
    { number: '25K+', label: 'Clients Satisfaits' },
    { number: '1M+', label: 'Commandes Traitées' },
    { number: '35%', label: 'Augmentation Moyenne des Ventes' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Révolutionner l'Industrie Restauration avec l'IA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SmartRestaurant est né d'une idée simple : utiliser l'intelligence artificielle pour aider 
                les restaurants à croître tout en facilitant la découverte de nourriture incroyable. 
                Nous construisons l'avenir de la restauration, une recommandation intelligente à la fois.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary-600">2023</h3>
                  <p className="text-gray-600">Fondé</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-600">15+</h3>
                  <p className="text-gray-600">Membres de l'Équipe</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Collaboration d'équipe"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Autonomiser les restaurants avec des outils intelligents qui augmentent la rentabilité, réduisent 
              le gaspillage et améliorent la satisfaction client, tout en aidant les amateurs de cuisine à 
              découvrir leur prochain repas favori grâce aux recommandations IA personnalisées.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident tout ce que nous faisons
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rencontrez Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Les personnes passionnées derrière SmartRestaurant
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-primary-600">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-primary-600">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-primary-600">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Rejoignez Notre Aventure
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Faites partie de la révolution restauration. Que vous soyez amateur de cuisine ou propriétaire de restaurant, 
              nous serions ravis de vous avoir à bord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Commencez Aujourd'hui
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-900 font-medium py-3 px-6 rounded-lg transition-all duration-200">
                Contactez-nous
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage