'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const initialPassions = [
    "programming",
    "electronic design",
    "embedded systems",
    "telecommunications",
    "systems engineering",
    "signal processing",
    "music",
    "robotics",
    "open source collaboration",
    "IoT",
    "distributed systems",
    "decentralization",
    "privacy",
    "trustworthy systems"
  ]

  const [passions, setPassions] = useState(initialPassions)
  const [currentPassionIndex, setCurrentPassionIndex] = useState(0)

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array: string[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    // Randomize the passions array
    setPassions(shuffleArray([...initialPassions]))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPassionIndex((prevIndex) => (prevIndex + 1) % passions.length)
    }, 3000) // Change passion every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Mason</h1>
          <p className="text-xl mb-8">
            I'm passionate about{' '}
            <span className="text-blue-600 font-semibold">
              {passions[currentPassionIndex]}
            </span>
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/about" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Me
            </Link>
            <Link 
              href="/projects" 
              className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="py-4">
        <div className="container mx-auto px-4 text-center">
          <Link href="contact" className="text-blue-600 hover:underline">Contact Me</Link>
        </div>
      </footer>

      <section id="contact" className="hidden">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea id="message" name="message" required className="w-full px-3 py-2 border rounded" rows={4}></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Message</button>
        </form>
      </section>
    </div>
  )
}