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
      "The host everything else runs on. Proxmox VE, running the VMs and containers behind every other project here — snapshotted and backed up so I can break things safely.",
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
      "I wanted real hardware I could break and rebuild, not a cloud sandbox that resets when the free tier runs out. So I built my own. The host now runs everything from a Jellyfin container to an OPNsense firewall VM.",
      "It's the base layer for every other project here. That also makes it where I learned the operations discipline: snapshot before risky changes, schedule backups, rebuild broken services instead of guessing at fixes.",
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
      "The habits mattered more than the technology. Snapshot before you change something. Back up before you trust it. Rebuild from a known-good state instead of troubleshooting blind — discipline that's invisible until the day it saves you.",
    screenshots: ["/projects/proxmox-homelab/dashboard.png"],
  },

  {
    slug: "docker-services",
    category: "Self Hosting",
    title: "Docker Services",
    emoji: "🐳",
    description:
      "Self-hosted services running in Docker: camera streaming, a dashboard, reverse proxy routing. All managed through Portainer and defined in Compose files I can rebuild from scratch.",
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
      "Docker let me learn containerized deployment without rebuilding a VM every time something broke. Each service runs in its own container, defined in Compose so the whole stack can be torn down and rebuilt from a single file.",
      "Portainer gives me container state, ports, and images at a glance. go2rtc streams my home security cameras, Nginx Proxy Manager handles reverse proxy routing, and Homepage ties it together as a launcher.",
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
      "Containers finally clicked here: how they're networked, where data actually persists, and why Compose beats configuring by hand. I can tear the stack down and rebuild it from a single file.",
    screenshots: ["/projects/docker-services/portainer-containers.png"],
  },

  {
    slug: "microsoft-365",
    category: "Administration",
    title: "Microsoft 365 Administration",
    emoji: "☁️",
    description:
      "My day job. Microsoft 365 administration across a rotating set of client tenants — identities, licensing, Exchange Online, and security.",
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
      "This is my day job. Microsoft 365 across a rotating set of client tenants: provisioning and deprovisioning users, managing licenses and mailboxes. MFA and conditional access on top of that.",
      "Every client is configured differently, so most of the work is diagnosis. Mail flow issues, hybrid AD-to-Entra sync problems, and documenting what changed so the next tech isn't guessing.",
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
      "Managing many tenants at once taught me that process beats memory. What scales is consistent documentation, not remembering how each client is configured.",
    screenshots: ["/projects/microsoft-365/architecture.svg"],
  },

  {
    slug: "networking-lab",
    category: "Networking",
    title: "Networking Lab — Phase 1: Segmentation",
    emoji: "🌐",
    description:
      "Segmented a flat home network behind an OPNsense firewall — three VLANs, 802.1Q trunking over a single NIC, per-VLAN DHCP and DNS. Nobody else in the house noticed it happen.",
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
      "My home network ran flat for years — Proxmox, Docker, and Jellyfin sharing one broadcast domain with every phone and TV in the house. Phase 1 fixes that: a real firewall, VLAN-tagged networks, and rules that enforce what can reach what.",
      "Replacing the household router would have meant reconfiguring every device in the house. Instead I put OPNsense behind it as a Proxmox VM, leaving the TP-Link to handle NAT, DHCP, and Wi-Fi as before. With one NIC on the host, every VLAN rides a single 802.1Q trunk to a managed switch. Tagging happens at the Proxmox bridge, not inside any guest OS. Three VLANs: MGMT, SERVERS, and a reserved IOT — with SERVERS and IOT blocked from MGMT.",
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
      "Locked myself out of the switch's management page by changing an access port's PVID to a VLAN with no route back. Factory reset to recover — and a lesson about changing one variable at a time.",
      "DHCP silently failed on every VLAN after deploying OPNsense. The Kea logs traced it to Dnsmasq, still running from the initial console setup and holding port 67 on every interface Kea needed.",
      "A Kea DHCP reservation showed correctly in the GUI but was never honored. The client kept requesting INIT-REBOOT reconfirmation of its old lease, and Kea granted it without checking the reservation. A subnet-ID association bug, not a client issue. Fell back to a static IP rather than block the build.",
    ],
    learned:
      "Segmentation was as much change management as configuration. Configuring VLANs was easy; doing it without breaking anyone's Wi-Fi was the real constraint. The troubleshooting taught me more. A service that gives up after exhausting retries looks identical to a healthy one in the logs. Only the live Kea log showed the difference.",
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
      "18 PowerShell scripts for network discovery, system health checks, and security auditing. If I do something by hand twice, it becomes a script.",
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
      "A toolkit for the tasks that come up over and over in MSP work: network discovery, system health checks, storage and security troubleshooting. Every script follows the same conventions — standard param blocks, CSV export, colored output — so they're easy to reuse.",
      "The centerpiece is a network scanner using async pinging and multi-threaded runspaces to sweep a subnet fast. It does port scanning, subnet auto-detection, ARP-based MAC lookup, and vendor resolution via the macvendors.com API. Around it sits a broader set covering storage, system health, networking, and security auditing.",
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
      "Runspaces versus simple loops makes an enormous difference for anything touching the network. And once a toolkit passes a handful of scripts, consistent conventions save more time than any single optimization.",
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
