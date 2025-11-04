export default function InvitationHeader() {
  return (
    <div className="text-center">
      <p className="tracking-[0.3em] uppercase text-xs md:text-sm text-pink-500/80">The Wedding of</p>
      <h2 className="mt-2 font-serif text-3xl md:text-4xl text-gray-900">
        Jane Doe <span className="text-pink-500">&</span> Jhon Doe
      </h2>
      <p className="mt-2 text-gray-600">September 20, 2025 • San Francisco, CA</p>
    </div>
  );
}
