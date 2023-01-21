import { NavItem } from "@/types/navbar";
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
