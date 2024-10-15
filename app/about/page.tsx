import Image from 'next/image'

export default function About() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image 
            src="/public/portrait.png" 
            alt="Mason Dill" 
            width={300} 
            height={300} 
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Hello! I'm Mason Dill, an Engineer based in Pittsburgh, PA. I have several years of experience in embedded systems and wireless device development, specializing in embedded design and development.
          </p>
          <p className="mb-4">
            My passion for technology and problem-solving drives me to constantly learn and improve my skills. I believe in combining precision, efficiency, and creativity in my work to push the boundaries of what's possible in embedded systems design.
          </p>
          <p>
            When I'm not working, you can find me outdoors, enjoying camping, hiking, and exploring nature.
          </p>
        </div>
      </div>
      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>skill</li>
        </ul>
      </section> */}
    </div>
  )
}
