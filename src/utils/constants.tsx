import { NavItem } from "@/types/navbar";
import { FooterNavItem } from "@/types/footer";
export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Web3.0",
    href: "/web3",
  },
  {
    label: "More",
    children: [
      {
        label: "Useful Youtube videos",
        href: "#",
        isExternal: true,
      },
      {
        label: "Free resources & guide",
        href: "#",
      },
      {
        label: "Knowledge based",
        href: "#",
      },
    ],
  },
];

export const FOOTER_COMPANY_NAV_ITEMS: Array<FooterNavItem> = [
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Instructors",
    href: "/instructor",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Build Career",
    href: "/build-career",
  },
  {
    label: "Become Instructor",
    href: "becomeInstructor",
  },
];

export const FOOTER_SUPPORT_NAV_ITEMS: Array<FooterNavItem> = [
  {
    label: "Help Center",
    href: "/help",
  },
  {
    label: "Terms of Service",
    href: "/terms-service",
  },
  {
    label: "Legal",
    href: "/legal",
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Satus",
    href: "/status",
  },
];
