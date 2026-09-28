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
    href: "https://github.com/",
    icon: FaGithub,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@rassoul_conceptor1?_r=1&_t=ZN-99GksyuU2IY",
    icon: FaTiktok,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rassoul_niang2209?igsi=MWZoNjA4NHM2NHE3dQ%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mouhamed-niang2209?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    icon: FaLinkedin,
  },
];