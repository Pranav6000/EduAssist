export function scaleElementByViewport(id, options = {}) {
  const {
    minScale = 0.75,
    maxScale = 0.9,
    baseWidth = 1600,
    origin = "center center",
  } = options;

  const vw = window.innerWidth;
  const scale = Math.min(Math.max(vw / baseWidth, minScale), maxScale);
  const element = document.getElementById(id);

  if (element) {
    element.style.transform = `scale(${scale})`;
    element.style.transformOrigin = origin;
  }
}
