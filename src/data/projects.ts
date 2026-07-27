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
  /** Optional forward-looking roadmap, for projects built in deliberate phases */
  nextSteps?: string[];
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
      "The foundation everything else runs on — a Proxmox VE host running the VMs and LXC containers behind every other project on this site. Snapshots and scheduled backups so I can break things without consequences.",
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
      "I wanted to learn infrastructure on real hardware I could break and rebuild, not a cloud sandbox that resets when the free tier runs out. So I built my own: a Proxmox VE host that now runs everything from a Jellyfin container to an OPNsense firewall VM.",
      "Because it's the base layer for every other project here, it's also where I learned the operations discipline that matters more than any single technology — snapshotting before risky changes, scheduled backups, and rebuilding a broken service from scratch instead of guessing at a fix.",
    ],
    architecture: `Internet
  │
Router
  │
Proxmox Server (pve)
  ├── LXC 101 — Jellyfin
  ├── VM 100 — Ubuntu Server
  │     └── Docker
  │           ├── go2rtc
  │           ├── Homepage
  │           ├── Nginx Proxy Manager
  │           └── Portainer
  └── Additional VMs / Containers`,
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
      "Add new services and rebuild broken ones as the lab grows.",
    ],
    challenges: [
      "Learning Linux permissions and file ownership.",
      "Understanding Docker networking.",
      "Configuring shared storage.",
      "Troubleshooting container deployments.",
      "Managing virtual networking inside Proxmox.",
    ],
    learned:
      "More than any specific technology, this taught me the habits that keep infrastructure recoverable — snapshot before you change something, back up before you trust it, and rebuild from a known-good state instead of troubleshooting blind. The kind of discipline that's invisible until the day it saves you.",
    screenshots: ["/projects/proxmox-homelab/dashboard.png"],
  },

  {
    slug: "docker-services",
    category: "Self Hosting",
    title: "Docker Services",
    emoji: "🐳",
    description:
      "Designed and deployed multiple Docker services for home security camera streaming, service discovery, and reverse proxy management, managed through Portainer while learning containerized application deployment.",
    highlights: [
      "Homepage Dashboard",
      "go2rtc (Camera Streaming)",
      "Nginx Proxy Manager",
      "Portainer",
    ],
    tags: ["Docker", "Docker Compose", "Linux", "Reverse Proxy"],
    techList: [
      "Docker",
      "Docker Compose",
      "Ubuntu Server",
      "Nginx Proxy Manager",
      "Portainer",
    ],
    overview: [
      "Running services in Docker containers on top of the Proxmox home lab gave me a practical way to learn containerized deployment without risking a full VM rebuild every time something went wrong. Each service runs in its own container, defined and versioned through Docker Compose so the whole stack can be torn down and rebuilt from a single file.",
      "I manage the stack through Portainer for a clear view of container state, published ports, and images at a glance. go2rtc handles low-latency streaming for my home security cameras, Nginx Proxy Manager takes care of reverse proxy routing, and Homepage acts as a central launcher for everything running in the lab.",
    ],
    technologies: [
      "Docker",
      "Docker Compose",
      "Nginx Proxy Manager",
      "Homepage",
      "Portainer",
      "go2rtc",
    ],
    detailHighlights: [
      "Deployed a Homepage dashboard to monitor and launch all self-hosted services.",
      "Run go2rtc for low-latency streaming of home security cameras.",
      "Used Nginx Proxy Manager to route traffic to each service over clean subdomains.",
      "Manage the full container stack through Portainer.",
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
    screenshots: ["/projects/docker-services/portainer-containers.png"],
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
      "This is my day job. I administer Microsoft 365 across a rotating set of client tenants — the full identity and licensing lifecycle: provisioning and deprovisioning users, assigning and reclaiming licenses, managing Exchange Online mailboxes, and configuring MFA and conditional access to keep each environment secure.",
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
    screenshots: ["/projects/microsoft-365/architecture.svg"],
  },

  {
    slug: "networking-lab",
    category: "Networking",
    title: "Networking Lab — Phase 1: Segmentation",
    emoji: "🌐",
    description:
      "Deployed OPNsense and VLAN-segmented my home network behind the existing household router — a real stateful firewall, 802.1Q trunking over a single NIC, and per-VLAN DHCP/DNS, rolled out with zero disruption to the Wi-Fi and media server the rest of the household relies on daily.",
    highlights: [
      "OPNsense Firewall (Proxmox VM)",
      "VLAN Segmentation (802.1Q)",
      "Kea DHCP & Unbound DNS",
      "Zero-Downtime Migration",
    ],
    tags: ["OPNsense", "VLANs", "Networking", "Firewall"],
    techList: [
      "OPNsense",
      "802.1Q VLANs",
      "Kea DHCP",
      "Unbound DNS",
      "Proxmox Networking",
      "Netgear GS108Ev4",
    ],
    overview: [
      "My home network ran flat for years — Proxmox, Docker, and Jellyfin all sharing the same broadcast domain as every phone, laptop, and TV in the house. Phase 1 introduces real segmentation: a dedicated firewall, VLAN-tagged networks, and rules that actually enforce which parts of the network can reach which.",
      "Rather than replace the household router — which would mean reconfiguring every device in the house — I deployed OPNsense as a Proxmox VM behind it, so the existing TP-Link keeps handling NAT, DHCP, and Wi-Fi exactly as before. With only one NIC on the Proxmox host, every VLAN rides a single 802.1Q trunk to a Netgear managed switch, tagged at the Proxmox bridge level rather than inside any guest OS. The scheme is scoped to three VLANs — MGMT, SERVERS, and a reserved IOT — with SERVERS and IOT blocked from reaching MGMT.",
    ],
    architecture: `Internet
  │
TP-Link Router (NAT, DHCP, Wi-Fi)
  ├── Household Wi-Fi — untagged, VLAN 1
  └── Managed Switch — 802.1Q trunk
        ├── Admin PC — access port, VLAN 10 (MGMT)
        └── Proxmox Host — trunk port
              ├── Jellyfin (LXC) — untagged, VLAN 1
              └── OPNsense (VM) — firewall
                    ├── VLAN 10 — MGMT     (10.0.10.0/24)
                    ├── VLAN 20 — SERVERS  (10.0.20.0/24)
                    │     └── VM 100 — 10.0.20.10
                    └── VLAN 40 — IOT      (10.0.40.0/24, reserved)`,
    technologies: [
      "OPNsense",
      "802.1Q VLAN Trunking",
      "Kea DHCP",
      "Unbound DNS (recursive)",
      "Netgear GS108Ev4 Managed Switch",
      "Proxmox VLAN-Aware Bridging",
    ],
    detailHighlights: [
      "Deployed OPNsense as a Proxmox VM with four virtual NICs — one untagged WAN link and three VLAN-tagged interfaces for MGMT, SERVERS, and IOT.",
      "Configured a single 802.1Q trunk between Proxmox and a Netgear GS108Ev4 managed switch — no physical NIC upgrade required.",
      "Wrote firewall rules enforcing that SERVERS and IOT cannot reach the MGMT network, while MGMT retains full administrative access.",
      "Migrated a test VM onto the new SERVERS VLAN as a zero-downtime proof of concept, with household Wi-Fi and Jellyfin left completely untouched.",
      "Configured Unbound as a fully recursive DNS resolver and Kea for per-VLAN DHCP, including host reservations.",
    ],
    challenges: [
      "Locked myself out of the switch's own management page after changing an access port's PVID to a VLAN with no route back — recovered with a factory reset, a reminder to change one variable at a time on management-plane settings.",
      "DHCP silently failed on every VLAN after deploying OPNsense — traced through the Kea logs to a port conflict with Dnsmasq, still running from OPNsense's initial console setup and holding port 67 on every interface Kea needed.",
      "A Kea DHCP reservation was accepted in the GUI but never honored — the client kept requesting INIT-REBOOT reconfirmation of its old lease, and Kea granted it without cross-checking the reservation, pointing to a subnet-ID association bug rather than a client issue. Fell back to a static IP rather than block the build on it.",
    ],
    learned:
      "This reinforced that segmentation is as much change management as a technical exercise — the real constraint wasn't configuring VLANs, it was doing it without breaking Wi-Fi or Jellyfin for the household. The troubleshooting mattered just as much: a service that fails silently after exhausting retries can look identical to a working one in the logs, and watching Kea's DHCP log live was the only way to see what it was actually doing versus what the GUI claimed.",
    nextSteps: [
      "Migrate Jellyfin behind the firewall with a scoped exception rule, or accept manual server addressing in clients.",
      "Populate the IOT VLAN with real devices.",
      "Move Proxmox host management itself onto the MGMT VLAN.",
      "Stand up WireGuard on OPNsense for remote administration.",
      "Root-cause the Kea reservation / INIT-REBOOT matching bug instead of working around it.",
    ],
    screenshots: ["/projects/networking-lab/phase1-topology.svg"],
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
    screenshots: [
      "/projects/powershell-automation/network-scan-output.png",
      "/projects/powershell-automation/storage-analyzer.png",
      "/projects/powershell-automation/system-information.png",
      "/projects/powershell-automation/print-spooler-diagnostics.png",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
