import { NavItem } from "@/types/navbar";
import { FooterNavItem } from "@/types/footer";
export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Community",
    href: "#",
  },
  {
    label: "More",
    href: "#",
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
    href: "#",
  },
  {
    label: "Blog",
    href: "#",
  },
  {
    label: "Instructors",
    href: "#",
  },
  {
    label: "Testimonials",
    href: "#",
  },
  {
    label: "Build Career",
    href: "#",
  },
  {
    label: "Become Instructor",
    href: "#",
  },
];

export const FOOTER_SUPPORT_NAV_ITEMS: Array<FooterNavItem> = [
  {
    label: "Help Center",
    href: "#",
  },
  {
    label: "Terms of Service",
    href: "#",
  },
  {
    label: "Legal",
    href: "#",
  },
  {
    label: "Privacy Policy",
    href: "#",
  },
  {
    label: "Satus",
    href: "#",
  },
];
