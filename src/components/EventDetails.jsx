import React from 'react'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function EventDetails() {
  const items = [
    { icon: Calendar, label: 'Date', value: 'Saturday, June 21, 2025' },
    { icon: Clock, label: 'Time', value: 'Ceremony 3:00 PM • Reception 6:00 PM' },
    { icon: MapPin, label: 'Venue', value: 'Rose Garden Hall, San Francisco' },
  ]

  return (
    <section className="grid sm:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, label, value }) => (
        <div key={label} className="rounded-2xl border border-pink-100 bg-white p-6 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-pink-50">
            <Icon className="h-6 w-6 text-pink-600" />
          </div>
          <p className="text-sm uppercase tracking-wide text-pink-500">{label}</p>
          <p className="mt-1 text-gray-800">{value}</p>
        </div>
      ))}
    </section>
  )
}
