import setActiveLinks from "./functions/active-links";
import Toggler from "@functionalities/toggler";
import Animations from "@functionalities/animations";

new Toggler();
new Animations({
  threshold: 0.1,
});
setActiveLinks();

const galleryContainer = document.querySelectorAll(
  "[data-gallery-container]"
) as NodeListOf<HTMLElement>;
[...galleryContainer].forEach((container) => {
  const containerHeight = container.clientHeight;
  const slides = container.querySelectorAll(
    "[data-gallery-slide]"
  ) as NodeListOf<HTMLElement>;
  [...slides].forEach((slide) => {
    const image = slide.querySelector("img") as HTMLImageElement;
    const aspectRatio = image.naturalHeight / image.naturalWidth;
    const width = containerHeight / aspectRatio;
    slide.style.width = `${width}px`;
    slide.style.minWidth = `${width}px`;
  });
});
