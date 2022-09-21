const setActiveLinks = () => {
  const links = document.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
};
export default setActiveLinks;
