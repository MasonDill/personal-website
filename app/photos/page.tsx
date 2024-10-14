import Image from 'next/image'

const photos = [
  { id: 1, src: '/placeholder.svg?height=300&width=300', alt: 'Photo 1' },
  { id: 2, src: '/placeholder.svg?height=300&width=300', alt: 'Photo 2' },
  { id: 3, src: '/placeholder.svg?height=300&width=300', alt: 'Photo 3' },
  { id: 4, src: '/placeholder.svg?height=300&width=300', alt: 'Photo 4' },
  { id: 5, src: '/placeholder.svg?height=300&width=300', alt: 'Photo 5' },
  { id: 6, src: '/placeholder.svg?height=300&width=300', alt: 'Photo 6' },
]

export default function Photos() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="relative aspect-square">
            <Image 
              src={photo.src} 
              alt={photo.alt} 
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}