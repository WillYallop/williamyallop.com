import setActiveLinks from "./functions/active-links";
import Toggler from "@functionalities/toggler";
import Animations from "@functionalities/animations";

new Toggler();
new Animations({
  threshold: 0.1,
});
setActiveLinks();
