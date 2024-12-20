'use client'

import { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import confetti from 'canvas-confetti'

const AnimatedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const audioContextRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const playSuccessSound = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
    }

    const context = audioContextRef.current
    const oscillator = context.createOscillator()
    const gainNode = context.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(context.destination)

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(523.25, context.currentTime) // C5
    gainNode.gain.setValueAtTime(0.5, context.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.5)

    oscillator.start(context.currentTime)
    oscillator.stop(context.currentTime + 0.5)
  }, [])

  const triggerConfetti = useCallback(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
      }))
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
      }))
    }, 250)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('https://formspree.io/f/xldeqzlv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('Message Sent! Thanks for reaching out.', {
          position: 'top-right',
        })
        setFormData({ name: '', email: '', message: '' })
        triggerConfetti() // Trigger the confetti animation
        playSuccessSound() // Play the success sound
      } else {
        toast.error('Failed to send the message. Please try again.', {
          position: 'top-right',
        })
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        position: 'top-right',
      })
    }
  }

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section
      className="py-20 min-h-screen bg-gray-900 text-white flex items-center justify-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      id="contact"
    >
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3) 0%, rgba(16, 185, 129, 0) 50%)`,
        }}
        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
      />

      <div className="container px-4 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-4xl font-bold mr-4">Get in Touch</h2>
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                transition: { duration: 2, repeat: Infinity },
              }}
            >
              <Send size={32} className="text-blue-400" />
            </motion.div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-800 border-gray-700 text-white"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default AnimatedContact

