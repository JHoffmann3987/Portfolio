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
  ├── VM 100 — docker-host (Terraform-provisioned)
  │     └── Docker
  │           ├── Homepage
  │           ├── Portainer
  │           └── Observability stack
  └── OPNsense VM — firewall`,
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
    slug: "homelab-iac-observability",
    category: "Automation",
    title: "Infrastructure as Code & Observability",
    emoji: "\u{1F4E6}",
    description:
      "Rebuilt my Docker host from scratch \u2014 provisioned by Terraform, configured by Ansible, monitored by Prometheus, Grafana, and Loki. No more clicking through a UI and hoping I remember what I did.",
    highlights: [
      "Terraform VM Provisioning",
      "Ansible Configuration",
      "Prometheus + Grafana",
      "Loki Log Aggregation",
      "Uptime Kuma Alerting",
    ],
    tags: ["Terraform", "Ansible", "Prometheus", "Grafana", "Docker"],
    techList: [
      "Terraform",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Loki",
      "Docker Compose",
    ],
    overview: [
      "My lab worked, but nothing about it was reproducible. VMs were created by clicking through Proxmox. Containers were started by hand. If a host died, rebuilding it meant remembering what I did months ago. This phase replaced that with code.",
      "Terraform provisions VMs against the Proxmox API, authenticated with a scoped, revocable token instead of the root password. Ansible takes over once a VM exists \u2014 installing Docker from the official apt repo, then deploying services from version-controlled Compose files. On top of that sits an observability stack so I find out something broke from an alert, not from noticing.",
    ],
    architecture: `Workstation (WSL)
  \u251C\u2500\u2500 Terraform \u2500\u2500\u25BA Proxmox API \u2500\u2500\u25BA provisions VM
  \u2514\u2500\u2500 Ansible \u2500\u2500\u25BA SSH \u2500\u2500\u25BA configures VM

docker-host (VM 100 \u2014 SERVERS VLAN, 10.0.20.10)
  \u251C\u2500\u2500 Homepage        \u2014 lab dashboard
  \u251C\u2500\u2500 Portainer       \u2014 container management
  \u2514\u2500\u2500 Observability
        \u251C\u2500\u2500 Prometheus    \u25C4\u2500 node-exporter (host metrics)
        \u2502                  \u25C4\u2500 cAdvisor (container metrics)
        \u251C\u2500\u2500 Grafana       \u2014 dashboards
        \u251C\u2500\u2500 Loki          \u25C4\u2500 Promtail (Docker socket)
        \u2514\u2500\u2500 Uptime Kuma   \u2014 up/down checks + email alerts`,
    technologies: [
      "Terraform (bpg/proxmox provider)",
      "Ansible",
      "Prometheus",
      "Grafana",
      "Loki + Promtail",
      "Uptime Kuma",
      "node-exporter + cAdvisor",
      "Docker Compose",
    ],
    detailHighlights: [
      "Provision Proxmox VMs with Terraform, authenticated by a scoped API token rather than root credentials.",
      "Configure hosts and deploy services with Ansible playbooks \u2014 no manual docker run commands.",
      "Scrape host and per-container metrics every 15 seconds with Prometheus, visualized in Grafana.",
      "Aggregate logs with Loki, shipped by Promtail reading the Docker socket directly.",
      "Run independent up/down checks on seven services with Uptime Kuma \u2014 including the OPNsense GUI across a VLAN boundary \u2014 with email alerting verified end to end.",
    ],
    challenges: [
      "Writing a playbook to codify the existing setup revealed two containers had been deployed from a forgotten repo, and two others had no config backing them at all. Rather than reverse-engineer it, I backed the VM up, destroyed it, and rebuilt clean \u2014 redeploying only the services that were actually configured.",
      "Notepad silently saved the Terraform .tfvars file in an encoding that broke parsing, with no useful error to point at it.",
      "Proxmox API tokens need an explicit permission grant even when owned by root \u2014 and that grant disappears every time the token is rotated.",
      "WSL mounts the Windows filesystem with permissions that make Ansible refuse to trust its own config file.",
      "Docker's {{.Name}} template syntax collides with Ansible's templating engine, which tries to evaluate it first.",
      "Monitoring the OPNsense GUI meant crossing the VLAN boundary I built in Phase 1. Instead of loosening the rule, I added one scoped exception: a single host, to a single destination, on a single port.",
    ],
    learned:
      "Destroying a working VM felt wrong until I realized I could not confidently rebuild it \u2014 which meant it was already fragile. Infrastructure I cannot recreate from a file is infrastructure I do not really control. The observability work made the same point from the other direction: I had been finding problems by noticing them, which only works while you are looking.",
    nextSteps: [
      "Build a golden VM image with Packer to remove the last manual step \u2014 clicking through the Ubuntu installer.",
      "Add Grafana alerting on resource thresholds, beyond Uptime Kuma's up/down checks.",
      "Phase 4: security hardening.",
    ],
    screenshots: [
      "/projects/homelab-iac-observability/grafana-node-exporter.png",
      "/projects/homelab-iac-observability/uptime-kuma.png",
      "/projects/homelab-iac-observability/loki-logs.png",
    ],
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
      "Tailscale",
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
      "Moved Proxmox host management onto the MGMT VLAN, routing through OPNsense rather than the household router.",
      "Set up Tailscale for remote access to the lab, with a firewall rule admitting the tailnet."
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
      "Root-cause the Kea reservation / INIT-REBOOT matching bug instead of working around it.",
    ],
    screenshots: [
      "/projects/networking-lab/opnsense-firewall-rules.png",
      "/projects/networking-lab/phase1-topology.svg",
    ],
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
