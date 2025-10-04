import { cn } from "@/lib/utils"

interface ScheduleItemProps {
  time: string
  title: string
  speaker?: string
  description?: string
}

interface ScheduleProps {
  items: ScheduleItemProps[]
  className?: string
}

export function Schedule({ items, className }: ScheduleProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Event Schedule</h2>
        <div className="mt-12 space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex gap-x-4">
              <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-8">
                <div className="w-px bg-gray-200" />
              </div>
              <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
              </div>
              <div className="flex-auto py-0.5 text-sm leading-5">
                <div className="font-medium text-gray-900">
                  {item.time} - {item.title}
                </div>
                {item.speaker && (
                  <div className="text-gray-500">Speaker: {item.speaker}</div>
                )}
                {item.description && (
                  <div className="text-gray-500">{item.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}