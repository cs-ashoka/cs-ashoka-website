import { inter, jetbrainsMono } from "@/utils/fonts";
import { Analytics } from '@vercel/analytics/react';
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { getSortedPostsData } from "@/lib/event-posts";
import { MdDescription } from "react-icons/md";

export default function Home() {
  const recentEvents = getSortedPostsData().slice(0, 2);

  return (
    <main className={`${inter.className} min-h-screen bg-background`}>
      {/* Hero */}
<section className="relative py-8 px-6 overflow-hidden bg-[#fdf2f2]">
  <div
    className="absolute inset-0 opacity-40 pointer-events-none"
    style={{
      backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
      backgroundSize: '32px 32px',
    }}
  />
  <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-left">
      <span
        className={`${jetbrainsMono.className} text-primary uppercase tracking-[0.2em] text-sm block mb-4`}
      >
        Ashoka University, Estd. 2014
      </span>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight -ml-1 md:-ml-2 mb-4">
        CS Society
      </h1>
      <p className="text-lg text-on-surface-variant max-w-xl mb-8">
        A student-run community for anyone into code, computers, and building weird (but cool!) stuff together.
      </p>

        <a href="/about"
        className={`${jetbrainsMono.className} inline-block bg-primary text-on-primary px-6 py-3 uppercase tracking-widest text-sm rounded hover:opacity-90 transition-opacity`}
      >
        Learn more
      </a>
    </div>
    <div className="hidden md:flex justify-center items-center">
      <Image
        src="/hero_new.PNG"
        alt=""
        width={500}
        height={500}
        unoptimized
        className="w-full h-auto object-contain"
      />
    </div>
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
              Our governing document outlines the society&apos;s structure, election process, and member rights. We encourage everyone, members and prospective members alike, to read it.
            </p>
            
             <a href="/manifesto.pdf"
              target="_blank"
              className={`${jetbrainsMono.className} inline-flex items-center gap-2 border border-on-surface text-on-surface px-6 py-3 uppercase tracking-widest text-sm hover:bg-surface-container-low transition-colors`}
            >
              View our constitution <MdDescription className="text-lg" />
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-6 bg-surface-container-low border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delayMs={0} className="group bg-surface border border-border p-6 rounded-xl card-glow">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Build stuff</h3>
              <p className="text-on-surface-variant text-sm">
                Projects, hackathons, and dumb-but-fun weekend builds with other people who&apos;ll actually debug with you at 2am.
              </p>
            </Reveal>
            <Reveal delayMs={100} className="group bg-surface border border-border p-6 rounded-xl card-glow">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Learn together</h3>
              <p className="text-on-surface-variant text-sm">
                Notes, workshops, and resources for everything from DSA to ML to &quot;how do I even use git.&quot;
              </p>
            </Reveal>
            <Reveal delayMs={200} className="group bg-surface border border-border p-6 rounded-xl card-glow">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">Hang out</h3>
              <p className="text-on-surface-variant text-sm">
                Events, socials, and a community that&apos;s a lot less serious than this website currently sounds.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Society Highlights */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span
                className={`${jetbrainsMono.className} text-primary uppercase tracking-widest text-xs block mb-2`}
              >
                Featured Opportunities
              </span>
              <h2 className="text-3xl font-semibold">Society Highlights</h2>
            </div>
            <a
              href="/events"
              className={`${jetbrainsMono.className} text-on-surface hover:text-primary uppercase tracking-widest text-sm transition-colors flex items-center gap-2`}
            >
              View all →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delayMs={0} className="group bg-surface border border-border p-4 rounded-xl card-glow">
              <div className="relative overflow-hidden aspect-video rounded-lg mb-4 bg-on-surface flex items-center justify-center">
                <span className={`${jetbrainsMono.className} text-white/40 text-xs uppercase tracking-widest`}>
                  CS Mixer 2026
                </span>
                <span className="absolute top-2 right-2 bg-primary text-on-primary text-[10px] px-2 py-1 uppercase tracking-widest">
                  Save the Date
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-1">CS Mixer 2026</h3>
              <p className="text-on-surface-variant text-sm mb-4">
                An evening to meet the society, grab food, and find your next project partner. Details dropping soon.
              </p>
              <div className="pt-3 border-t border-border flex justify-between items-center">
                <span className={`${jetbrainsMono.className} text-xs text-on-surface-variant uppercase`}>
                  Date TBA
                </span>
                <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Reveal>

            {recentEvents.map((event, i) => (
              <Reveal
                key={event.slug}
                delayMs={(i + 1) * 100}
                className="group bg-surface border border-border p-4 rounded-xl card-glow"
              >
                <div className="relative overflow-hidden aspect-video rounded-lg mb-4 bg-surface-container-low">
                  {event.imgList?.[0] && (
                    <Image
                      src={event.imgList[0]}
                      alt={event.title}
                      fill
                      unoptimized
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-on-surface-variant text-sm mb-4">
                  Catch up on how it went, and see what&apos;s next on the events page.
                </p>
                <div className="pt-3 border-t border-border flex justify-between items-center">
                  <span className={`${jetbrainsMono.className} text-xs text-on-surface-variant uppercase`}>
                    {event.date}
                  </span>
                  <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Reveal>
            ))}
          </div>
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
          
            <a href="https://cssoc-archive.vercel.app" 
            target="_blank"
            rel="noopener noreferrer"
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
        
          <a href="/join-us.html"
          target="_blank"
          rel="noopener noreferrer"
          className={`${jetbrainsMono.className} inline-block bg-primary text-on-primary px-6 py-3 uppercase tracking-widest text-sm rounded hover:opacity-90 transition-opacity`}
        >
          Apply now
        </a>
      </section>
      <Analytics />
    </main>
  );
}