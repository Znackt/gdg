import { cn } from "@/lib/utils"

interface SpeakerProps {
  name: string
  role: string
  company: string
  image: string
  topic?: string
  className?: string
}

export function Speaker({ name, role, company, image, topic, className }: SpeakerProps) {
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <img
        className="h-32 w-32 rounded-full object-cover"
        src={image}
        alt={name}
      />
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-sm text-gray-500">{company}</p>
        {topic && <p className="mt-2 text-sm font-medium text-blue-600">{topic}</p>}
      </div>
    </div>
  )
}

export function SpeakerGrid({ speakers }: { speakers: SpeakerProps[] }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Speakers</h2>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker, index) => (
            <Speaker key={index} {...speaker} />
          ))}
        </div>
      </div>
    </div>
  )
}