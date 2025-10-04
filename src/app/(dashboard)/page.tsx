import { Hero } from "@/components/ui/hero"
import { Schedule } from "@/components/ui/schedule"
import { SpeakerGrid } from "@/components/ui/speaker"
import { auth } from "@/app/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  const eventDetails = {
    title: "GDG DevFest 2025",
    description: "Join us for an exciting day of tech talks, workshops, and networking with fellow developers. Learn about the latest in web development, cloud computing, and artificial intelligence.",
    date: "October 15, 2025",
    location: "Tech Hub Center"
  }

  const schedule = [
    {
      time: "09:00",
      title: "Registration & Breakfast",
      description: "Pick up your badge and enjoy breakfast with fellow developers"
    },
    {
      time: "10:00",
      title: "Keynote: The Future of Web Development",
      speaker: "Sarah Chen",
      description: "Exploring upcoming trends and technologies in web development"
    },
    {
      time: "11:30",
      title: "Workshop: Building with AI",
      speaker: "Michael Rodriguez",
      description: "Hands-on session with the latest AI development tools"
    },
    {
      time: "13:00",
      title: "Lunch Break",
      description: "Networking lunch with speakers and attendees"
    },
    {
      time: "14:00",
      title: "Cloud Native Applications",
      speaker: "Alex Thompson",
      description: "Best practices for building cloud-native applications"
    },
    {
      time: "15:30",
      title: "Panel Discussion",
      description: "The Impact of AI on Software Development"
    },
    {
      time: "17:00",
      title: "Closing Remarks & Networking",
      description: "Wrap up the day with final networking session"
    }
  ]

  const speakers = [
    {
      name: "Sarah Chen",
      role: "Senior Web Developer",
      company: "Google",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      topic: "The Future of Web Development"
    },
    {
      name: "Michael Rodriguez",
      role: "AI Research Engineer",
      company: "OpenAI",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      topic: "Building with AI"
    },
    {
      name: "Alex Thompson",
      role: "Cloud Architect",
      company: "Microsoft",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      topic: "Cloud Native Applications"
    },
    {
      name: "Emily Watson",
      role: "Developer Advocate",
      company: "GitHub",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      topic: "Panel Moderator"
    }
  ]

  return (
    <main className="relative min-h-screen min-w-screen bg-white">
      <Hero {...eventDetails} />
      
      <section className="py-24 sm:py-32">
        <SpeakerGrid speakers={speakers} />
      </section>

      <section className="py-24 sm:py-32 bg-gray-50">
        <Schedule items={schedule} />
      </section>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2025 Google Developer Group. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}