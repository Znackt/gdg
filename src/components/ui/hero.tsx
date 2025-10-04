import { cn } from "@/lib/utils"
import { Button } from "./button"
import Image from "next/image"
import Link from "next/link"

interface HeroProps {
  title: string
  description: string
  date: string
  location: string
  className?: string
}

export function Hero({
  title,
  description,
  date,
  location,
  className
}: HeroProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-white", className)}>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">z
        <Image src={"/hero-image.jpg"} alt="GDG Event illustration" width={100} height={100} className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-25"
        />
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
                GDG Event
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>{date}</span>
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
          <div className="mt-8 flex items-center gap-x-6">
            <Button asChild>
              <Link href="/register">
                Register Now
              </Link>
            </Button>
            <div className="text-sm font-semibold leading-6 text-gray-900">
              {location} <span aria-hidden="true">→</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
         
        </div>
      </div>
    </div>
  )
}