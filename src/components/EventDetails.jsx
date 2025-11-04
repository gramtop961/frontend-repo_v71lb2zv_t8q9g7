import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventDetails() {
  const details = [
    {
      icon: Calendar,
      title: 'Date',
      text: 'Saturday, September 20, 2025',
    },
    {
      icon: Clock,
      title: 'Time',
      text: 'Ceremony 4:00 PM • Reception 6:00 PM',
    },
    {
      icon: MapPin,
      title: 'Venue',
      text: 'The Conservatory, San Francisco, CA',
    },
  ];

  return (
    <section className="mt-16">
      <div className="text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Event Details</h2>
        <p className="mt-2 text-gray-600">We can’t wait to celebrate with you</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {details.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-pink-100 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-pink-50 p-3 text-pink-600">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
