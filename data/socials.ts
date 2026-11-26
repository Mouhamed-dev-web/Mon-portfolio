import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mouhamed-dev-web/", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mouhamed-niang2209/", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
];
