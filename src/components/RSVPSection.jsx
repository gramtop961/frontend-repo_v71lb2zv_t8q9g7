export default function RSVPSection() {
  return (
    <section className="mt-16">
      <div className="rounded-3xl border border-pink-100 bg-white p-8 text-center shadow-sm">
        <h3 className="font-serif text-2xl text-gray-900">RSVP & Save the Date</h3>
        <p className="mt-2 text-gray-600">We kindly request your response by August 15, 2025</p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:rsvp@example.com?subject=RSVP%20for%20Jane%20%26%20Jhon's%20Wedding"
            className="inline-flex items-center rounded-full bg-pink-500 px-5 py-3 text-white shadow-sm transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            RSVP via Email
          </a>
          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Jane%20%26%20Jhon%20Wedding&dates=20250920T160000Z/20250920T220000Z&details=Ceremony%20at%204pm,%20Reception%20at%206pm&location=The%20Conservatory,%20San%20Francisco"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-pink-200 bg-white px-5 py-3 text-pink-600 shadow-sm transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-200"
          >
            Save to Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
