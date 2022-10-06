const galleryInit = () => {
  setTimeout(() => {
    const galleryContainer = document.querySelectorAll(
      "[data-gallery-container]"
    ) as NodeListOf<HTMLElement>;
    [...galleryContainer].forEach((container) => {
      const containerHeight = container.clientHeight;
      const containerPadding = parseInt(
        window.getComputedStyle(container).paddingTop
      );
      const containerHeightMinusPadding =
        containerHeight - containerPadding * 2;
      const slides = container.querySelectorAll(
        "[data-gallery-slide]"
      ) as NodeListOf<HTMLElement>;
      [...slides].forEach((slide) => {
        const image = slide.querySelector("img") as HTMLImageElement;
        const aspectRatio = image.naturalHeight / image.naturalWidth;
        const width = containerHeightMinusPadding / aspectRatio;
        slide.style.width = `${width}px`;
        slide.style.minWidth = `${width}px`;
      });
    });
  }, 50);
};
export default galleryInit;
