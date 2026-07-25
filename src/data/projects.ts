export interface Project {
  /** URL slug — used to build /projects/[slug] */
  slug: string;
  /** Short category label shown as the overline on cards */
  category: string;
  title: string;
  /** Emoji shown next to the title on the detail page */
  emoji: string;
  /** Used on homepage card, /projects index card, and as the detail page subtitle */
  description: string;
  /** Short bullet list shown on the homepage project card */
  highlights: string[];
  /** Badges shown on the homepage project card */
  tags: string[];
  /** Pill list shown near the top of the detail page */
  techList: string[];
  /** Overview paragraphs on the detail page */
  overview: string[];
  /** Optional monospace architecture diagram block */
  architecture?: string;
  /** "Technologies Used" list on the detail page */
  technologies: string[];
  /** "Highlights" list on the detail page (can differ from the short homepage version) */
  detailHighlights: string[];
  challenges: string[];
  learned: string;
  /** Optional link to the public GitHub repo for this project */
  githubUrl?: string;
  /** Optional screenshot paths (relative to /public), e.g. "/projects/proxmox/dashboard.png" */
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "proxmox-homelab",
    category: "Infrastructure",
    title: "Proxmox Home Lab",
    emoji: "🖥️",
    description:
      "Built and maintain a Proxmox virtualization environment to gain hands-on experience with enterprise infrastructure, virtualization, Linux administration, storage, networking, and self-hosted services. This environment serves as the foundation for all of my home lab projects.",
    highlights: [
      "Virtual Machines & LXC Containers",
      "Shared SMB Storage",
      "Docker Integration",
      "Snapshots & Backups",
      "Linux Administration",
    ],
    tags: ["Proxmox VE", "Docker", "Ubuntu", "Linux", "Networking"],
    techList: [
      "Proxmox VE",
      "Linux",
      "Ubuntu Server",
      "Docker",
      "PowerShell",
      "Git",
      "GitHub",
      "Networking",
    ],
    overview: [
      "This home lab serves as my personal environment for learning enterprise infrastructure technologies through hands-on experience. Rather than using cloud-based labs, I built and maintain my own virtualization platform using Proxmox VE, allowing me to safely deploy, configure, troubleshoot, and rebuild systems as I learn.",
      "The lab has become the foundation for experimenting with Linux administration, Docker containers, networking, storage, automation, and self-hosted applications.",
    ],
    architecture: `Internet
  │
Router
  │
Proxmox Server
  ├── Ubuntu Server VM
  │     ├── Docker
  │     ├── Homepage
  │     ├── Jellyfin
  │     ├── Sonarr
  │     ├── Radarr
  │     ├── Prowlarr
  │     └── Nginx Proxy Manager
  └── Additional Virtual Machines`,
    technologies: [
      "Proxmox VE",
      "Ubuntu Server",
      "Docker",
      "Linux",
      "Git & GitHub",
      "PowerShell",
      "TCP/IP Networking",
      "SMB File Sharing",
    ],
    detailHighlights: [
      "Built and manage a Proxmox virtualization environment.",
      "Deploy Linux virtual machines for testing and development.",
      "Host multiple Docker services.",
      "Practice networking and storage configuration.",
      "Document infrastructure using GitHub.",
      "Continuously expand the lab with new technologies.",
    ],
    challenges: [
      "Learning Linux permissions and file ownership.",
      "Understanding Docker networking.",
      "Configuring shared storage.",
      "Troubleshooting container deployments.",
      "Managing virtual networking inside Proxmox.",
    ],
    learned:
      "Building this home lab has significantly improved my understanding of virtualization, Linux administration, Docker, networking, storage, and troubleshooting. It has reinforced the importance of documentation, backups, version control, and solving technical problems through careful testing rather than guesswork.",
  },

  {
    slug: "docker-services",
    category: "Self Hosting",
    title: "Docker Services",
    emoji: "🐳",
    description:
      "Designed and deployed multiple Docker services to improve monitoring, media management, password security, and overall reliability while learning containerized application deployment.",
    highlights: [
      "Homepage Dashboard",
      "Jellyfin",
      "Vaultwarden",
      "Uptime Kuma",
      "Nginx Proxy Manager",
    ],
    tags: ["Docker", "Docker Compose", "Linux", "Reverse Proxy", "Monitoring"],
    techList: [
      "Docker",
      "Docker Compose",
      "Ubuntu Server",
      "Nginx Proxy Manager",
      "Vaultwarden",
      "Uptime Kuma",
    ],
    overview: [
      "Running services in Docker containers on top of the Proxmox home lab gave me a practical way to learn containerized deployment without risking a full VM rebuild every time something went wrong. Each service runs in its own container, defined and versioned through Docker Compose so the whole stack can be torn down and rebuilt from a single file.",
      "The goal was to make the lab more useful day-to-day — a dashboard to see everything at a glance, a media server, password management, and uptime monitoring — while learning how containers, networks, and volumes fit together in practice.",
    ],
    technologies: [
      "Docker",
      "Docker Compose",
      "Nginx Proxy Manager",
      "Homepage",
      "Jellyfin",
      "Vaultwarden",
      "Uptime Kuma",
    ],
    detailHighlights: [
      "Deployed a Homepage dashboard to monitor and launch all self-hosted services.",
      "Set up Jellyfin as a self-hosted media server.",
      "Ran Vaultwarden for self-hosted password management.",
      "Configured Uptime Kuma to monitor service availability and alert on downtime.",
      "Used Nginx Proxy Manager to route traffic to each service over clean subdomains.",
      "Defined every stack with Docker Compose for repeatable, version-controlled deployments.",
    ],
    challenges: [
      "Understanding Docker's default bridge networking versus custom networks.",
      "Managing persistent volumes so container updates didn't wipe data.",
      "Getting reverse proxy and SSL configuration right in Nginx Proxy Manager.",
      "Keeping container images updated without breaking working configs.",
    ],
    learned:
      "This project taught me how containerized applications are structured, networked, and persisted, and gave me real practice with Docker Compose as a way to document and reproduce a deployment instead of configuring services by hand each time.",
  },

  {
    slug: "microsoft-365",
    category: "Administration",
    title: "Microsoft 365 Administration",
    emoji: "☁️",
    description:
      "Provide daily administration and support for Microsoft 365 environments in a Managed Service Provider (MSP) setting, helping business clients manage identities, licensing, Exchange Online, and security.",
    highlights: [
      "Exchange Online",
      "Entra ID",
      "Microsoft 365 Licensing",
      "Multi-Factor Authentication",
      "User Provisioning",
    ],
    tags: ["Microsoft 365", "Exchange", "Entra ID", "PowerShell"],
    techList: [
      "Microsoft 365",
      "Exchange Online",
      "Entra ID",
      "Active Directory",
      "PowerShell",
      "MFA",
    ],
    overview: [
      "As part of my day-to-day work at an MSP, I administer Microsoft 365 environments for a range of business clients. This covers the full identity and licensing lifecycle — provisioning new users, assigning and reclaiming licenses, managing Exchange Online mailboxes, and configuring multi-factor authentication and conditional access to keep client environments secure.",
      "Because each client has different needs, this work also involves troubleshooting mail flow issues, resolving sync problems between on-prem Active Directory and Entra ID in hybrid environments, and documenting changes so the rest of the team has visibility into what was done and why.",
    ],
    technologies: [
      "Microsoft 365",
      "Exchange Online",
      "Entra ID",
      "Active Directory",
      "Microsoft Intune",
      "PowerShell",
    ],
    detailHighlights: [
      "Administer Exchange Online mailboxes, distribution groups, and mail flow rules.",
      "Manage Entra ID identities, MFA, and conditional access policies.",
      "Handle Microsoft 365 licensing across multiple client tenants.",
      "Provision and deprovision user accounts as part of onboarding and offboarding.",
      "Troubleshoot hybrid identity sync issues with Entra Connect.",
      "Write PowerShell scripts to automate repetitive administrative tasks.",
    ],
    challenges: [
      "Working across many client tenants, each with different configurations and policies.",
      "Diagnosing mail flow and delivery issues in Exchange Online.",
      "Troubleshooting Entra Connect sync errors in hybrid environments.",
      "Balancing security requirements (MFA, conditional access) against client usability.",
    ],
    learned:
      "This work has given me a solid, practical understanding of identity and licensing management at scale, and reinforced how much of good Microsoft 365 administration comes down to consistent process and documentation across many different environments.",
  },

  {
    slug: "networking-lab",
    category: "Networking",
    title: "Networking Lab",
    emoji: "🌐",
    description:
      "Hands-on networking practice covering VLANs, managed switches, routing, DNS, and firewall configuration using enterprise-style networking equipment, built to strengthen the foundational networking skills used daily in MSP work.",
    highlights: [
      "VLAN Segmentation",
      "Managed Switch Configuration",
      "DNS & DHCP",
      "Firewall Rules",
      "Routing",
    ],
    tags: ["Networking", "VLANs", "DNS", "DHCP", "SonicWall"],
    techList: ["VLANs", "TCP/IP", "DNS", "DHCP", "SonicWall", "Routing"],
    overview: [
      "Networking is a big part of day-to-day MSP work, so I built out a small lab to practice concepts beyond what comes up in routine troubleshooting — segmenting traffic with VLANs, configuring routing between subnets, and setting firewall rules on enterprise-style equipment rather than just reading about them.",
      "This lab runs alongside the Proxmox environment, giving me a safe place to break and rebuild network configurations without risking a client environment.",
    ],
    technologies: [
      "VLANs",
      "TCP/IP Networking",
      "DNS",
      "DHCP",
      "SonicWall Firewalls",
      "Managed Switches",
    ],
    detailHighlights: [
      "Segmented lab traffic using VLANs across a managed switch.",
      "Configured inter-VLAN routing and firewall rules.",
      "Set up DNS and DHCP for lab subnets.",
      "Practiced firewall rule configuration on SonicWall hardware.",
      "Documented network topology and IP addressing scheme.",
    ],
    challenges: [
      "Getting inter-VLAN routing and firewall rules to interact correctly.",
      "Troubleshooting DHCP scope and DNS resolution issues across subnets.",
      "Understanding trunk vs. access port configuration on managed switches.",
    ],
    learned:
      "Working hands-on with VLANs, routing, and firewall rules outside of a live client environment has made me noticeably faster at diagnosing networking issues at work, since I've already run into (and fixed) many of the same problems here first.",
  },

  {
    slug: "powershell-automation",
    category: "Automation",
    title: "PowerShell Automation",
    emoji: "⚙️",
    description:
      "A growing toolkit of PowerShell scripts for network discovery, system troubleshooting, and everyday IT administration, built to automate repetitive tasks and standardize how I diagnose issues across client environments.",
    highlights: [
      "Async Network Scanner",
      "Multi-Threaded Runspaces",
      "System Health Diagnostics",
      "Security & User Auditing",
      "CSV Export & Reporting",
    ],
    tags: ["PowerShell", "Automation", "Networking", "Windows"],
    techList: ["PowerShell", "Windows", "WMI/CIM", "Git", "GitHub"],
    overview: [
      "I maintain a personal toolkit of PowerShell scripts built to automate the kinds of tasks that come up repeatedly in MSP work — network discovery, system health checks, and troubleshooting across storage, networking, and security. The scripts follow consistent conventions (standard param blocks, CSV export, colored console output, elapsed time reporting) so they're easy to reuse and extend.",
      "The centerpiece is a network scanner that uses async pinging and multi-threaded runspaces to sweep a subnet quickly, with configurable port scanning, automatic subnet detection, ARP-based MAC address lookup, and manufacturer resolution via the macvendors.com API. Alongside it is a broader troubleshooting toolkit — roughly 20 scripts covering storage, system health, networking, user and security auditing, and reliability monitoring.",
    ],
    technologies: [
      "PowerShell",
      "Windows Management Instrumentation (WMI/CIM)",
      "Runspaces & Multi-Threading",
      "ARP / MAC Address Resolution",
      "Git & GitHub",
    ],
    detailHighlights: [
      "Built an async, multi-threaded network scanner with configurable port scanning and subnet auto-detection.",
      "Added ARP-based MAC lookup with manufacturer resolution via macvendors.com.",
      "Wrote roughly 20 troubleshooting scripts spanning storage, system health, networking, and security auditing.",
      "Standardized every script with consistent param blocks, CSV export, and colored console output.",
      "Added elapsed-time reporting so long-running scans are easy to track.",
      "Wrote a driver-inventory script using the Windows Update Agent COM API and PnP driver data to flag outdated drivers.",
    ],
    challenges: [
      "Getting runspace pools to scale cleanly without overwhelming the network or the host machine.",
      "Handling inconsistent WMI/CIM responses across different Windows versions.",
      "Keeping script output format consistent as the toolkit grew from a handful of scripts to around 20.",
    ],
    learned:
      "Building this toolkit taught me a lot about PowerShell performance — especially runspaces versus simple loops for anything that touches the network — and reinforced how much time consistent script conventions save once a toolkit grows past a few one-off scripts.",
    githubUrl: "https://github.com/JHoffmann3987/PowerShell-Toolkit",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
