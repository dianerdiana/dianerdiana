import { navigationConfig } from "../configs/navigation-config";
import type { NavigationConfig, NavigationLink, NavigationMenu, NavigationSurface } from "../types/navigation";

const sortByOrder = <T extends { order: number }>(items: readonly T[]) => [...items].sort((current, next) => current.order - next.order);

const hasSurface = (surfaces: readonly NavigationSurface[], surface: NavigationSurface) => surfaces.includes(surface);

export const getNavigationBySurface = (
  surface: NavigationSurface,
  config: NavigationConfig = navigationConfig,
) => sortByOrder(config.items).filter((item) => hasSurface(item.surfaces, surface));

export const flattenNavigationItems = (
  config: NavigationConfig = navigationConfig,
  surface?: NavigationSurface,
): NavigationLink[] => {
  const links = sortByOrder(config.items).flatMap((item) => {
    if (item.kind === "link") {
      return [item];
    }

    const menuLink: NavigationLink[] = item.href
      ? [
          {
            id: item.id,
            kind: "link",
            label: item.label,
            href: item.href,
            description: item.description,
            icon: item.icon,
            surfaces: item.surfaces,
            order: item.order,
          },
        ]
      : [];

    return [...menuLink, ...sortByOrder(item.children)];
  });

  if (!surface) {
    return links;
  }

  return links.filter((item) => hasSurface(item.surfaces, surface));
};

export const getFooterNavigation = (config: NavigationConfig = navigationConfig) => {
  const links = flattenNavigationItems(config, "footer");

  if (hasSurface(config.cta.surfaces, "footer")) {
    links.push({
      id: "resume",
      kind: "link",
      label: config.cta.label,
      href: config.cta.href,
      description: "A web-friendly resume with a downloadable PDF option.",
      icon: "file-text",
      surfaces: config.cta.surfaces,
      order: 100,
    });
  }

  return sortByOrder(links);
};

export const getNavigationMenu = (id: string, config: NavigationConfig = navigationConfig): NavigationMenu | undefined => {
  const item = config.items.find((entry) => entry.id === id);
  return item?.kind === "menu" ? item : undefined;
};

export const getSitemapEntries = (config: NavigationConfig = navigationConfig) => {
  const links = flattenNavigationItems(config, "sitemap").map((item) => ({
    id: item.id,
    label: item.label,
    href: item.href,
  }));

  if (hasSurface(config.cta.surfaces, "sitemap")) {
    links.push({ id: "resume", label: config.cta.label, href: config.cta.href });
  }

  return links;
};

export const getBreadcrumbsForPath = (pathname: string, config: NavigationConfig = navigationConfig) => {
  const normalizedPath = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  const links = flattenNavigationItems(config, "breadcrumb");
  const match = links.find((item) => item.href === normalizedPath || item.href === `${normalizedPath}/`);

  if (!match) {
    return [];
  }

  return [
    { label: "Home", href: "/" },
    { label: match.label, href: match.href },
  ];
};
