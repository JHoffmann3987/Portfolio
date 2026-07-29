export const profile = {
  name: "Justin Hoffmann",
  title: "IT Technician",
  tagline: "Microsoft 365 · Infrastructure · Home Lab",
  email: "jhoffmann3987@yahoo.com",
  github: "https://github.com/jhoffmann3987",
  githubLabel: "github.com/jhoffmann3987",
  location: "Pensacola, Florida",
  resumeHref: "/Justin_Hoffmann_Resume_July2026.pdf",

  /** Canonical bio paragraphs — used on the homepage About section and the standalone /about page */
  bio: [
    "I'm an IT Technician at a Managed Service Provider, where I troubleshoot Windows systems, administer Microsoft 365, manage identities, and support endpoint security and networking for business clients. Every day is a different problem, which is the part I like most.",
    "Outside of work I build and improve my home lab. It's where I test virtualization, Linux, Docker, and networking before it matters in a real environment. Building it myself is how I actually learn.",
    "I care about well-documented infrastructure and automating what I can. I'm working toward a Systems Administrator or Infrastructure Engineer role focused on Microsoft 365, virtualization, and networking.",
  ],

  /** Two-column tech breakdown shown under the bio */
  techColumns: [
    {
      title: "Professional Experience",
      items: [
        "Microsoft 365 Administration",
        "Exchange Online",
        "Entra ID",
        "Active Directory",
        "NinjaOne RMM",
        "SentinelOne",
        "Guardz",
        "Barracuda",
        "Huntress",
        "SonicWall Firewalls",
      ],
    },
    {
      title: "Home Lab & Learning",
      items: [
        "Proxmox VE",
        "Docker & Docker Compose",
        "Ubuntu Server",
        "Linux Administration",
        "PowerShell Scripting",
        "Networking & VLANs",
        "Nginx Proxy Manager",
        "Jellyfin Media Server",
        "Homepage Dashboard",
      ],
    },
  ],

  /** Short intro used on the contact section/page */
  contactIntro:
    "I'm always interested in connecting with other IT professionals, collaborating on projects, and exploring new career opportunities.",

  certifications: ["CompTIA A+"],

  /** Verifiable credential links, keyed by cert name. Fill in your real Credly URL for A+. */
  certLinks: {
    // "CompTIA A+": "https://www.credly.com/badges/YOUR-BADGE-ID",
  } as Record<string, string>,

  /** Concrete numbers for the hero stat strip */
  stats: [
    { value: "5", label: "Lab Projects" },
    { value: "18", label: "PowerShell Scripts" },
    { value: "3", label: "VLANs Segmented" },
  ],

  /** Terminal-style facts block (rendered like `cat ./facts`) */
  terminalFacts: [
    { key: "NAME", value: "Justin Hoffmann" },
    { key: "ROLE", value: "IT Technician → Sysadmin" },
    { key: "LOCATION", value: "Pensacola, Florida" },
    { key: "FOCUS", value: "M365 · Virtualization · Networking" },
    { key: "LAB", value: "Proxmox · OPNsense · Docker" },
    { key: "CERTS", value: "CompTIA A+" },
    { key: "STATUS", value: "Open to opportunities" },
  ],
};
