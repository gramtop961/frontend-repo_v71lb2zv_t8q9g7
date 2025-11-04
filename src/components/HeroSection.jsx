import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden rounded-3xl bg-peach-50/40">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient and vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(255,255,255,0.85)_100%)]" />

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
    </section>
  );
}
