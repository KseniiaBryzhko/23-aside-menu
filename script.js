const headers = [...document.querySelectorAll("h3")];
const sidebarLinks = document.querySelectorAll(".toc > li");

window.addEventListener("scroll", () => {
  updateSidebar();
});

const updateSidebar = () => {
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];

    if (elementInView(header)) {
      sidebarLinks.forEach((link) => link.classList.remove("selected"));
      sidebarLinks[i].classList.add("selected");
      break;
    }
  }
};

const elementInView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return elementTop > 0 && elementTop <= window.innerHeight;
};
