export interface Project {
  slug: string;
  emoji: string;
  title: string;
  description: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "proxmox-home-lab",
    emoji: "🖥️",
    title: "Proxmox Home Lab",
    description: "Enterprise virtualization environment hosting Linux virtual machines, Docker containers, and self-hosted services used to build practical systems administration skills.",
    featured: true,
  },
  {
    slug: "docker-infrastructure",
    emoji: "🐳",
    title: "Docker Infrastructure",
    description: "Containerized applications including Jellyfin, Homepage, qBittorrent, and other self-hosted services managed through Docker.",
    featured: true,
  },
  {
    slug: "networking-lab",
    emoji: "🌐",
    title: "Networking Lab",
    description: "Hands-on experience with VLANs, managed switches, routing, Cisco equipment, and enterprise networking concepts.",
    featured: true,
  },
  {
    slug: "powershell-automation",
    emoji: "⚡",
    title: "PowerShell Automation",
    description: "PowerShell scripts for Windows administration, troubleshooting, reporting, and everyday IT automation.",
    featured: true,
  },
];