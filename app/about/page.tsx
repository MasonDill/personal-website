'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const [slides, setSlides] = useState<string[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    async function loadSlides() {
      try {
        const res = await fetch('/api/slideshow')
        if (!res.ok) {
          throw new Error('Failed to fetch slideshow images')
        }
        const data = await res.json()
        setSlides(shuffleArray(data.images))
      } catch (error) {
        console.error('Failed to load slideshow images:', error)
      }
    }
    loadSlides()
  }, [])

  useEffect(() => {
    if (slides.length === 0) return
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides])

  function shuffleArray(array: string[]) {
    return array.sort(() => Math.random() - 0.5)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header with professional headshot */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <Image 
            src="/portrait.png" 
            alt="Mason Dill" 
            width={300} 
            height={300} 
            className="rounded-full shadow-lg border-4 border-primary mb-6 md:mb-0 md:mr-8 transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Mason Dill</h1>
            <p className="text-xl text-muted-foreground">Embedded-Systems Engineer | Pittsburgh, PA</p>
          </div>
        </div>

        {/* Main Content */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="grid gap-6 text-lg">
              <p>
                Hello! I'm Mason.
                I specialize in low-level programming and electronic design, focusing on wireless device development for command and control applications. 
                Lately, I've been building connectivity and IoT solutions that enable over-the-air updates, telemetry, and facilitating video streaming between devices.
              </p>
              <p>
                My technical interests span embedded systems, computer architecture, unconventional computing, telecommunications, signal processing, and full-stack development. 
                I'm currently working on several personal projects, including a PIC10 emulator, a custom lightweight transmission protocol, and a digital audio synthesizer among others.
                You can check out more of my work on my <Link href="/projects" className="text-primary hover:underline">projects page</Link>!
              </p>
              <p>
                I believe that creating things and mastering skills are the most fulfilling pursuits in life. Learning is a lifelong journey, and knowledge should be accessible to everyone.
                In all domains, passion surpasses talent.
              </p>
              <p>
                Outside of tech, you'll find me exploring Pennsylvania's trails, floating down the Yough, camping in the Alleghenies, or playing my guitar.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="mb-12 overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
            <p className="mb-6">
              I'm always working on exciting new projects. From embedded systems to web applications, I love bringing ideas to life through code and hardware.
            </p>
            <Button asChild variant="default">
              <Link href="/projects" className="inline-flex items-center">
                View My Projects
                <Code className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Contact Me Section */}
        <Card className="bg-primary text-primary-foreground mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Let's Connect!</h2>
            <p className="mb-6">
              I'm always interested in new employment opportunities and eager to connect with others who share similar interests. Don't hesitate to reach out!
            </p>
            <Button asChild variant="secondary">
              <Link href="/contact" className="inline-flex items-center">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Rotating slideshow */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Personal Slideshow</h2>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {slides.length > 0 ? (
                slides.map((slide, index) => (
                  <Image
                    key={slide}
                    src={slide}
                    alt={`Slideshow image ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-muted">
                  <p className="text-muted-foreground">Loading slideshow...</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}