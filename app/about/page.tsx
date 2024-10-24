import Image from 'next/image';

export default function About() {
  return (
    <div>
      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 mt-4 grid grid-cols-5 items-start">
        {/* Image Section */}
        <div className="col-span-1 pr-4"> {/* Adjust padding to the right */}
          <Image 
            src="/portrait.png" 
            alt="Mason Dill" 
            width={300} 
            height={300} 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="col-span-2 text-lg"> {/* This takes the remaining space */}
          <p className="mb-6">
            Hello! I'm <strong>Mason Dill</strong>, a computer engineer based in Pittsburgh, PA. 
            I specialize in low-level programming and electronic design, focusing on wireless device development for command and control applications. 
            Lately, I've been building connectivity and IoT solutions that enable over-the-air updates, telemetry, and facilitating video streaming between devices.
          </p>
          <p className="mb-6">
            My technical interests span embedded systems, computer architecture, unconventional computing, telecommunications, signal processing, and full-stack development. 
            I'm currently working on several personal projects, including a PIC10 emulator, a custom lightweight transmission protocol, and a digital audio synthesizer among others.
            I'm always eager to connect with others who share similar interests—feel free to reach out!
          </p>
          <p className="mb-6">
            I believe that creating things and mastering new skills are the most fulfilling pursuits in life. Learning is a lifelong journey, and knowledge should be accessible to everyone.
            In all domains, passion surpasses skill and meaning transcends happiness.
          </p>
          <p>
            Outside of tech, you'll find me exploring Pennsylvania's trails, camping in the Alleghenies, or working on my technique with my guitar.
          </p>
        </div>
      </div>
    </div>
  );
}
