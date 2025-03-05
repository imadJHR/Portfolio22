"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"
import { MessageCircle, X, Send } from "lucide-react"

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const bgElements = Array.from({ length: 5 }, (_, i) => {
    const size = 250 + i * 100
    const position = {
      top: `${20 + i * 10}%`,
      left: `${15 + i * 15}%`,
    }

    return (
      <div
        key={i}
        className={`absolute rounded-full opacity-[0.03] transition-transform duration-[2000ms] ${
          i % 2 === 0 ? "bg-purple-700" : "bg-purple-300"
        }`}
        style={{
          width: size,
          height: size,
          ...position,
        }}
      />
    )
  })

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return

    const newMessages = [...messages, { text: inputMessage, sender: "user" }]

    setMessages(newMessages)
    setInputMessage("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage)
      setMessages([...newMessages, { text: botResponse, sender: "bot" }])
    }, 1000)
  }

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes("services") || lowerMessage.includes("offres")) {
      return "Nous offrons des services de création de site web, marketing digital, gestion de comptes Instagram, et conception de cartes NFC. Que souhaitez-vous savoir de plus ?"
    } else if (lowerMessage.includes("prix") || lowerMessage.includes("tarif")) {
      return "Nos tarifs varient selon vos besoins spécifiques. Je vous invite à demander un devis personnalisé sur notre site."
    } else if (lowerMessage.includes("contact")) {
      return "Vous pouvez nous contacter via notre formulaire de contact sur le site, ou par email à contact@nemsimedia.com."
    } else {
      return "Merci pour votre message. Un de nos conseillers vous répondra dans les plus brefs délais. En attendant, n'hésitez pas à consulter notre page de services ou à demander un devis."
    }
  }

  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 to-purple-700"
    >
      <div className="absolute inset-0 overflow-hidden">{bgElements}</div>

      <div
        className={`relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-32 pb-20 flex flex-col ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 px-4 py-1.5 rounded-full bg-purple-500/10 text-sm font-medium tracking-wider"
          >
            VOTRE PARTENAIRE DIGITAL
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-purple-300 tracking-tight mb-6"
          >
            Nemsi<span className="text-purple-500">Media</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl font-light text-purple-200 mb-8 max-w-2xl"
          >
            Créons ensemble des expériences digitales innovantes et performantes pour propulser votre entreprise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link to={"/devis"}>
              <Button
                size="lg"
                className="sm:min-w-[180px] bg-purple-500 text-white hover:bg-purple-600 transition-colors"
              >
                Démarrer mon projet
              </Button>
            </Link>
            <a href="#offers">
              <Button
                size="lg"
                className="sm:min-w-[180px] bg-purple-700 text-white hover:bg-purple-800 transition-colors"
              >
                Nos Services
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Chatbot Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-3 bg-purple-500 rounded-full text-white shadow-lg hover:bg-purple-600 transition-colors"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageCircle size={32} />
      </motion.button>

      {/* Chatbot Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold">Chat avec NemsiBot</h3>
              <button onClick={() => setIsChatOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`${msg.sender === "user" ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      msg.sender === "user" ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-500 text-white p-2 rounded-r-lg hover:bg-purple-600 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hero

