import { useState } from "react"
import { motion } from "framer-motion"
import { FiMonitor, FiTrendingUp, FiInstagram, FiCreditCard } from "react-icons/fi"

const services = [
  { id: "web", name: "Création de Site Web", icon: FiMonitor },
  { id: "marketing", name: "Marketing Digital", icon: FiTrendingUp },
  { id: "instagram", name: "Gestion Compte Instagram", icon: FiInstagram },
  { id: "nfc", name: "Conception Carte NFC", icon: FiCreditCard },
]

export default function Devis() {
  const [selectedServices, setSelectedServices] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const toggleService = (serviceId) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", { selectedServices, ...formData })
    // Reset form after submission
    setSelectedServices([])
    setFormData({ name: "", email: "", company: "", message: "" })
    alert("Votre demande de devis a été envoyée avec succès!")
  }

  return (
    <div className="min-h-screen  py-36 bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Demandez un Devis</h1>
          <p className="text-center text-gray-600 mb-12">
            Sélectionnez les services qui vous intéressent et obtenez un devis personnalisé.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-xl rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Nos Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`flex items-center p-4 rounded-lg transition-all ${
                  selectedServices.includes(service.id)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <service.icon className="w-6 h-6 mr-3" />
                <span className="font-medium">{service.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Vos Informations</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Entreprise
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Demander un Devis
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  )
}

