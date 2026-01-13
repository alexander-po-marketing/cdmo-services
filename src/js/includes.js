const DEFAULT_PARTIALS_BASE = "../../partials/";

const resolvePartialsBase = () => {
  const bodyBase = document.body?.dataset.partialsBase;
  if (bodyBase) {
    return bodyBase.endsWith("/") ? bodyBase : `${bodyBase}/`;
  }
  return DEFAULT_PARTIALS_BASE;
};

const resolveSiteBase = () => {
  const bodyBase = document.body?.dataset.siteBase;
  const metaBase = document.querySelector('meta[name="site-base"]')?.content;
  const rawBase = (bodyBase ?? metaBase ?? "").trim();
  if (!rawBase) {
    return "";
  }
  const normalized = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
  if (!normalized || normalized === "/") {
    return "";
  }
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
};

const injectPartial = async (selector, partialName, basePath) => {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  const url = new URL(`${basePath}${partialName}.html`, document.baseURI);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load ${partialName}: ${response.status}`);
    }
    const html = await response.text();
    target.innerHTML = html;
  } catch (error) {
    console.warn(`[includes] ${error.message}`);
  }
};

const rewriteInternalLinks = (siteBase) => {
  if (!siteBase) {
    return;
  }
  const links = document.querySelectorAll('a[href^="/"]');
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("//")) {
      return;
    }
    if (href.startsWith(siteBase + "/") || href === siteBase) {
      return;
    }
    link.setAttribute("href", `${siteBase}${href}`);
  });
};

const setupMobileNav = () => {
  const header = document.querySelector(".site-header");
  const toggle = header?.querySelector(".nav-toggle");
  if (!header || !toggle) {
    return;
  }

  const setExpanded = (isOpen) => {
    header.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  toggle.addEventListener("click", () => {
    setExpanded(!header.classList.contains("nav-open"));
  });

  header.addEventListener("click", (event) => {
    if (!header.classList.contains("nav-open")) {
      return;
    }
    const link = event.target.closest("a");
    if (!link) {
      return;
    }
    if (window.matchMedia("(max-width: 980px)").matches) {
      setExpanded(false);
    }
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  const basePath = resolvePartialsBase();
  await Promise.all([
    injectPartial("#site-header", "header", basePath),
    injectPartial("#site-footer", "footer", basePath),
  ]);
  rewriteInternalLinks(resolveSiteBase());
  setupMobileNav();
});
