import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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
            className="rounded-full shadow-lg border-4 border-primary mb-6 md:mb-0 md:mr-8"
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
                Ask me about them!
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

        {/* Placeholder for rotating slideshow */}
        <div className="bg-muted rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Personal Showcase</h2>
          <div className="aspect-video bg-accent/20 flex items-center justify-center">
            <p className="text-muted-foreground">Rotating slideshow of images will be added here</p>
          </div>
        </div>
      </div>
    </div>
  );
}