const DEFAULT_PARTIALS_BASE = "../../partials/";

const resolvePartialsBase = () => {
  const bodyBase = document.body?.dataset.partialsBase;
  if (bodyBase) {
    return bodyBase.endsWith("/") ? bodyBase : `${bodyBase}/`;
  }
  return DEFAULT_PARTIALS_BASE;
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

document.addEventListener("DOMContentLoaded", () => {
  const basePath = resolvePartialsBase();
  injectPartial("#site-header", "header", basePath);
  injectPartial("#site-footer", "footer", basePath);
});
