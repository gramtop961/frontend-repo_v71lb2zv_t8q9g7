import React from 'react'

export default function RSVPSection() {
  return (
    <section className="text-center space-y-4">
      <h2 className="text-2xl font-semibold text-pink-600">RSVP</h2>
      <p className="text-gray-600">We would be honored to celebrate with you. Please let us know if you can attend.</p>
      <div className="flex items-center justify-center gap-3">
        <a
          href="mailto:jane-and-jhon@example.com?subject=Wedding%20RSVP"
          className="inline-block rounded-full border border-pink-300 px-6 py-2 text-pink-600 hover:bg-pink-50 transition"
        >
          RSVP via Email
        </a>
        <a
          href="https://calendar.google.com"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-full bg-pink-600 px-6 py-2 text-white hover:bg-pink-700 transition"
        >
          Save the Date
        </a>
      </div>
    </section>
  )
}
