import Image from "next/image";
import { jetbrainsMono } from "@/utils/fonts";
import { Reveal } from "@/components/reveal";
import { MdPerson, MdEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaXTwitter, FaGlobe } from "react-icons/fa6";

type CommitteeMember = {
  name: string;
  role: string;
  // Path under /public, e.g. "/team/parthagarwal.jpg". Falls back to a placeholder icon when omitted.
  image?: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    x?: string;
    website?: string;
    email?: string;
  };
};

// Placeholder roster — swap in the real Core Committee names/roles/social links here.
const coreCommittee: CommitteeMember[] = [
  { name: "Parth Agarwal", role: "President", socials: { website: "https://parthagarwal.vercel.app/", instagram: "https://www.instagram.com/parthagarwal429/", email: "parth.agarwal_ug2024@ashoka.edu.in", linkedin: "https://www.linkedin.com/in/parth-agarwal1512/" } },
  { name: "Aaliya Ganguly", role: "President", },
  { name: "Aujas Jain", role: "Vice President" },
  { name: "Arnav Gupta", role: "Vice President" },
  { name: "Savyamm Jhunjhunwala", role: "Director of Development" },
  { name: "Anushka Kumari", role: "Director of Development"},
  { name: "Yashita Gupta", role: "Director of Events" },
  { name: "Rheyan Shah", role: "Director of Events" },
  { name: "Meyhar Lamba", role: "Director of Marketing" },
  { name: "Saachi Krishn", role: "Director of Marketing" },
  { name: "Jasmeh Sethi", role: "Deputy Director of Marketing" },
  { name: "Gauri Makker", role: "Director of Broadcast", socials: { linkedin: "https://www.linkedin.com/in/gaurimakker/" } },  
  { name: "Aaradhya Jain", role: "Director of Broadcast" },
  { name: "Saachi Khandeparkar", role: "Deputy Director of Broadcast" },
  { name: "Prisha Bindra", role: "Treasurer"},
  { name: "Naisha Sabnani", role: "Head of Advocacy"}
];

type FacultyAdvisor = {
  name: string;
  title: string;
};

// Placeholder advisors — swap in the real faculty names/titles/bios here.
const facultyAdvisors: FacultyAdvisor[] = [
  {
    name: "Aalok Thakkar",
    title: "Faculty Advisor",
  },
  {
    name: "Debayan Gupta",
    title: "Faculty Advisor",
  },
];

type PastPresidentYear = {
  years: string;
  presidents: [string, string];
};

// Placeholder history — swap in the real past presidents/years here.
const pastPresidents: PastPresidentYear[] = [
  { years: "2025—26", presidents: ["Aaryan Bahri", "Ayeshaa Mohan"] },
  { years: "2024—25", presidents: ["Manya Garg", "Maaher Bhagwagar"] },
  { years: "2023—24", presidents: ["Aryan Nath", "Roshni Agarwal"] },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-on-surface mb-4">
            Meet the Society
          </h1>
          <p className="text-lg text-secondary max-w-2xl leading-relaxed">
            A collaborative collective of thinkers, builders, and researchers dedicated to pushing the
            boundaries of computation at Ashoka University.
          </p>
        </Reveal>
      </section>

      {/* Core Committee */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <Reveal className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-semibold text-on-surface">Core Team</h2>
          <div className="flex-grow h-px bg-border" />
          <span className={`${jetbrainsMono.className} text-secondary text-sm`}>2026—27</span>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCommittee.map((member, i) => (
            <Reveal
              key={i}
              delayMs={i * 100}
              className="group bg-surface border border-border rounded-xl p-4 flex flex-col gap-3 card-glow"
            >
              <div className="relative aspect-square bg-surface-container-low rounded-lg flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <MdPerson className="text-6xl text-on-surface-variant/40" />
                )}
              </div>
              <div>
                <div className="h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full mb-2" />
                <h3 className="text-lg font-semibold text-on-surface">{member.name}</h3>
                <p className={`${jetbrainsMono.className} text-primary uppercase tracking-wide text-xs mb-3`}>
                  {member.role}
                </p>
                {member.socials && (
                  <div className="flex items-center gap-3">
                    {member.socials.website && (
                      <a
                        href={member.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name}'s website`}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <FaGlobe className="text-lg" />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on Instagram`}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <FaInstagram className="text-lg" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <FaLinkedin className="text-lg" />
                      </a>
                    )}
                    {member.socials.x && (
                      <a
                        href={member.socials.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on X`}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <FaXTwitter className="text-lg" />
                      </a>
                    )}
                    
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        aria-label={`Email ${member.name}`}
                        className="text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <MdEmail className="text-lg" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <Reveal className="bg-surface-container-low rounded-2xl p-6 md:p-10 border border-border">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-2 mb-8">
            <h2 className="text-3xl font-semibold text-on-surface">Faculty Advisors</h2>
            <p className="text-secondary max-w-sm">
              Guiding our academic pursuits with expertise across the discipline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facultyAdvisors.map((advisor, i) => (
              <div key={i} className="group flex flex-row items-center gap-4">
                <div className="w-24 h-24 flex-shrink-0 bg-surface rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors flex items-center justify-center">
                  <MdPerson className="text-4xl text-on-surface-variant/40" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-on-surface">{advisor.name}</h4>
                  <p className={`${jetbrainsMono.className} text-primary uppercase tracking-wide text-xs`}>
                    {advisor.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Past Presidents */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <Reveal className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-semibold text-on-surface">Past Presidents</h2>
          <div className="flex-grow h-px bg-border" />
        </Reveal>

        <Reveal className="bg-surface border border-border rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className={`${jetbrainsMono.className} bg-surface-container-low text-on-surface-variant uppercase tracking-wide text-xs`}>
                <th className="px-4 py-3 font-semibold">Year</th>
                <th className="px-4 py-3 font-semibold">President</th>
                <th className="px-4 py-3 font-semibold">President</th>
              </tr>
            </thead>
            <tbody>
              {pastPresidents.map((row, i) => (
                <tr key={i} className="border-t border-border">
                  <td className={`${jetbrainsMono.className} px-4 py-3 text-secondary text-sm whitespace-nowrap`}>
                    {row.years}
                  </td>
                  <td className="px-4 py-3 text-on-surface font-medium">{row.presidents[0]}</td>
                  <td className="px-4 py-3 text-on-surface font-medium">{row.presidents[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Reveal className="text-center bg-on-surface text-white rounded-2xl py-16 px-6">
          <h2 className="text-3xl font-semibold mb-3">Interested in joining the team?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Applications for the core will open next monsoon semester. In the meantime, you can join the society as a member.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/join-us.html"
              target="_blank"
              rel="noopener noreferrer"
              className={`${jetbrainsMono.className} bg-primary text-on-primary px-8 py-3 rounded-full uppercase tracking-widest text-sm hover:opacity-90 transition-opacity`}
            >
              Apply Now
            </a>
           
          </div>
        </Reveal>
      </section>
    </main>
  );
}
