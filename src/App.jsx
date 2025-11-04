import HeroSection from './components/HeroSection';
import InvitationHeader from './components/InvitationHeader';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Hero with Spline 3D (floral theme) */}
        <HeroSection />

        {/* Intro text */}
        <section className="mt-12">
          <InvitationHeader />
        </section>

        {/* Event details */}
        <EventDetails />

        {/* RSVP */}
        <RSVPSection />
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-center justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">With love, Jane & Jhon</p>
      </footer>
    </div>
  );
}

export default App;
