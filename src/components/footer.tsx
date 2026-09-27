import { jetbrainsMono } from "@/utils/fonts";

type CreditPerson = { name: string; href?: string };

const credits: { role: string; names: CreditPerson[] }[] = [
  { role: "Designed by", names: [{ name: "Parth Agarwal", href: "https://parthagarwal.vercel.app/" }] },
  { role: "Maintained by", names: [{ name: "Savyamm" }, { name: "Anushka" }] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-container-low">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-row justify-between items-center gap-4">
        <div className="text-left">
          <div className="text-sm md:text-xl font-black tracking-tight mb-1">AUCSS</div>
          <p className="text-on-surface-variant text-[10px] md:text-sm">
            © {new Date().getFullYear()} CS Society. All rights reserved.
          </p>
        </div>
        <div className={`${jetbrainsMono.className} flex flex-col items-end gap-2`}>
          <div className="flex flex-col items-end gap-1 text-[10px] md:flex-row md:items-center md:gap-6 md:text-sm uppercase tracking-wide">
            <a href="mailto:cs.society@ashoka.edu.in" className="text-on-surface-variant hover:text-primary transition-colors">Email</a>
            <a href="https://www.instagram.com/cs.ashoka/" className="text-on-surface-variant hover:text-primary transition-colors">Instagram</a>
            <a href="https://twitter.com/cs_ashoka" className="text-on-surface-variant hover:text-primary transition-colors">Twitter</a>
            <a href="https://github.com/cs-ashoka" className="text-on-surface-variant hover:text-primary transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/company/cs-society-ashoka-universtiy/" className="text-on-surface-variant hover:text-primary transition-colors">LinkedIn</a>
          </div>
          <div className="text-[10px] md:text-xs text-on-surface-variant/60">v1.0.0</div>
        </div>
      </div>

      <div className="group relative w-full h-7 hover:h-16 overflow-hidden border-t border-border bg-surface-container-low transition-all duration-300 flex items-center justify-center cursor-default">
        <span className="absolute text-[10px] text-on-surface-variant/60 uppercase tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-150">
          Credits
        </span>
        <div
          className={`${jetbrainsMono.className} absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 flex flex-col md:flex-row items-center gap-1 md:gap-6 text-[10px] md:text-xs text-on-surface-variant uppercase tracking-wide text-center px-4`}
        >
          {credits.map((credit) => (
            <span key={credit.role} className="whitespace-nowrap">
              <span className="text-on-surface-variant/60">{credit.role}</span>{" "}
              {credit.names.map((person, i) => (
                <span key={person.name} className="text-on-surface font-medium">
                  {person.href ? (
                    <a
                      href={person.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {person.name}
                    </a>
                  ) : (
                    person.name
                  )}
                  {i < credit.names.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}