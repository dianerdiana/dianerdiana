export type NavigationItemKind = "link" | "menu";

export type NavigationSurface =
  | "primary"
  | "mobile"
  | "footer"
  | "sitemap"
  | "breadcrumb"
  | "search"
  | "rss";

export interface NavigationLink {
  id: string;
  kind: "link";
  label: string;
  href: string;
  description?: string;
  icon?: string;
  surfaces: NavigationSurface[];
  order: number;
  external?: boolean;
  disabled?: boolean;
}

export interface NavigationFeatured {
  label: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  source?: "manual" | "content";
}

export interface NavigationMenu {
  id: string;
  kind: "menu";
  label: string;
  href?: string;
  description?: string;
  icon?: string;
  order: number;
  surfaces: NavigationSurface[];
  children: NavigationLink[];
  featured?: NavigationFeatured;
}

export interface NavigationCta {
  label: string;
  href: string;
  surfaces: NavigationSurface[];
}

export interface NavigationConfig {
  items: Array<NavigationLink | NavigationMenu>;
  cta: NavigationCta;
}
