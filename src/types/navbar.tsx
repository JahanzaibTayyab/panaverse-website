import type { ReactNode } from "react";
export type NavItem = {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  isExternal?: boolean;
  icon?: ReactNode;
};
