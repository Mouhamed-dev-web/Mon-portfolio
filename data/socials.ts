import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Mouhamed-dev-web",
    icon: FaGithub,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@rassoul_conceptor1?_r=1&_t=ZN-99GksyuU2IY",
    icon: FaTiktok,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rassoul_conceptor?stkn=eG9raHdqc21xaDJm&utm_source=qr",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mouhamed-niang2209?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: FaLinkedin,
  },
];