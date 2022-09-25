import setActiveLinks from "./functions/active-links";
import Toggler from "@functionalities/toggler";
import Animations from "@functionalities/animations";
import galleryInit from "./functions/gallery";

new Toggler();
new Animations({
  threshold: 0.1,
});
setActiveLinks();

// on page fully loaded
window.addEventListener("load", () => {
  galleryInit();
});
