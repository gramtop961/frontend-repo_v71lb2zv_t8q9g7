import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative h-[72vh] md:h-[82vh] w-full overflow-hidden rounded-3xl bg-pink-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Tu-wEVxfDuICpwJI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-rose-50/10 to-white/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_45%,rgba(255,255,255,0.9)_100%)]" />

      {/* Floral glow accents */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-80 w-80 rounded-full bg-rose-300/40 blur-3xl" />

      {/* Centered content */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="tracking-[0.3em] uppercase text-xs md:text-sm text-pink-500/80">We’re getting married</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-serif text-gray-900">
          Jane Doe <span className="text-pink-500">&</span> Jhon Doe
        </h1>
        <p className="mt-4 text-gray-700 md:text-lg">Saturday, September 20, 2025 • San Francisco, CA</p>

        {/* Delicate divider */}
        <div className="mt-6 h-px w-40 bg-gradient-to-r from-transparent via-pink-300 to-transparent" />
      </div>

      {/* Decorative floral line at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 mb-3 opacity-70">
        <svg width="280" height="28" viewBox="0 0 280 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 14C40 14 60 2 90 2C120 2 140 26 170 26C200 26 220 14 278 14" stroke="#fda4af" strokeWidth="1.5" strokeLinecap="round" />
          <g fill="#fb7185" opacity="0.8">
            <circle cx="90" cy="2" r="2" />
            <circle cx="170" cy="26" r="2" />
          </g>
          <g fill="#f43f5e" opacity="0.6">
            <circle cx="60" cy="6" r="1.6" />
            <circle cx="200" cy="22" r="1.6" />
          </g>
        </svg>
      </div>
    </section>
  );
}
