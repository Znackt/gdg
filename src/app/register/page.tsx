import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="bg-white px-8 py-10 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Register for GDG DevFest 2025</h1>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Join us for an amazing day of learning and networking
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <Input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Company/Organization
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="company"
                  id="company"
                  className="w-full"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">
                Job Title/Role
              </label>
              <div className="mt-2">
                <Input
                  type="text"
                  name="role"
                  id="role"
                  className="w-full"
                  placeholder="Software Developer"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full">
                Register Now
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}