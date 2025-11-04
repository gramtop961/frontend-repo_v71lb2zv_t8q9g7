import React from 'react'
import InvitationHeader from './components/InvitationHeader'
import EventDetails from './components/EventDetails'
import LoveQuote from './components/LoveQuote'
import RSVPSection from './components/RSVPSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-pink-600 antialiased">
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <InvitationHeader />

        <div className="my-12 sm:my-16" />
        <EventDetails />

        <div className="my-12 sm:my-16" />
        <LoveQuote />

        <div className="my-12 sm:my-16" />
        <RSVPSection />
      </main>

      <footer className="border-t border-pink-100 bg-white/60">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-pink-500">
          Made with love for Jane & Jhon • 2025
        </div>
      </footer>
    </div>
  )
}

export default App
