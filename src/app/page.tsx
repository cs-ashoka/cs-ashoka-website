import { inter, jetbrainsMono } from "@/utils/fonts";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main className={`${inter.className} min-h-screen bg-background`}>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#fdf2f2]">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10 text-left">
  <span
    className={`${jetbrainsMono.className} text-primary uppercase tracking-[0.2em] text-sm block mb-4`}
  >
    Ashoka University, Estd. 2014
  </span>
  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 -ml-1 md:-ml-2">
  CS Society
</h1>
  <p className="text-lg text-on-surface-variant max-w-xl mb-8">
    A student-run community for anyone into code, computers, and building weird(but cool!) stuff together.
  </p>
  <a href="/about"
    className={`${jetbrainsMono.className} inline-block bg-primary text-on-primary px-6 py-3 uppercase tracking-widest text-sm rounded hover:opacity-90 transition-opacity`}
  >
    Learn more
  </a>
</div>
      </section>

      {/* Our Mission / Constitution */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <span
              className={`${jetbrainsMono.className} text-primary uppercase tracking-widest text-xs block mb-2`}
            >
              01 // Governance & Values
            </span>
          </div>
          <div className="md:col-span-7">
            <p className="text-on-surface-variant mb-4 leading-relaxed">
              AUCSS operates under a formal constitution that ensures transparency, academic integrity, and democratic representation for every CS student at Ashoka.
            </p>
            <p className="text-on-surface-variant mb-6 leading-relaxed text-sm">
              Our governing document outlines the society's structure, election process, and member rights. We encourage everyone, members and prospective members alike, to read it.
            </p>
            
             <a href="/manifesto.pdf"
              target="_blank"
              className={`${jetbrainsMono.className} inline-block border border-on-surface text-on-surface px-6 py-3 uppercase tracking-widest text-sm rounded hover:bg-surface-container-low transition-colors`}
            >
              View our constitution
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 bg-surface-container-low border-t border-border">
        <div className="max-w-5xl mx-auto">
      
          <h2 className="text-3xl font-semibold mb-10">
            SOCIETY HIGHLIGHTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface border border-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Build stuff</h3>
              <p className="text-on-surface-variant text-sm">
                Projects, hackathons, and dumb-but-fun weekend builds with other people who'll actually debug with you at 2am.
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Learn together</h3>
              <p className="text-on-surface-variant text-sm">
                Notes, workshops, and resources for everything from DSA to ML to "how do I even use git."
              </p>
            </div>
            <div className="bg-surface border border-border p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">Hang out</h3>
              <p className="text-on-surface-variant text-sm">
                Events, socials, and a community that's a lot less serious than this website currently sounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events teaser */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <span
              className={`${jetbrainsMono.className} text-primary uppercase tracking-widest text-xs block mb-2`}
            >
              CALENDAR_2026
            </span>
            <h2 className="text-3xl font-semibold">Upcoming events</h2>
          </div>
          
            <a href="/events"
            className={`${jetbrainsMono.className} text-primary uppercase tracking-widest text-sm hover:underline`}
          >
            See all events →
          </a>
        </div>
      </section>

            {/* Legacy site */}
      <section className="py-20 px-6 bg-surface-container-low border-t border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <span
              className={`${jetbrainsMono.className} text-primary uppercase tracking-widest text-xs block mb-2`}
            >
              History
            </span>
            <h2 className="text-3xl font-semibold mb-2">Looking for the old site?</h2>
            <p className="text-on-surface-variant text-sm max-w-md">
              We rebuilt AUCSS.dev in 2026, but the previous version is still archived and browsable if you want a look back.
            </p>
          </div>
          
            <a href="/archive"
            className={`${jetbrainsMono.className} border border-on-surface text-on-surface px-6 py-3 uppercase tracking-widest text-sm rounded hover:bg-surface transition-colors whitespace-nowrap`}
          >
            View old site
          </a>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 px-6 bg-on-surface text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">Interested in joining the Society?</h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Inductions open every semester. No prior experience required, just curiosity.
        </p>
        
          <a href="/join"
          className={`${jetbrainsMono.className} inline-block bg-primary text-on-primary px-6 py-3 uppercase tracking-widest text-sm rounded hover:opacity-90 transition-opacity`}
        >
          Apply now
        </a>
      </section>
      <Analytics />
    </main>
  );
}
