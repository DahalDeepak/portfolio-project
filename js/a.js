const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
};
//for scroll event
const sr = ScrollReveal({
  distance: "45px",
  duration: 1000,

  reset: false,
});
// Home text revaling from left
sr.reveal(".home-text", { delay: 100, origin: "left" });
// Home image revaling from rightt
sr.reveal(".home-img", { delay: 160, origin: "right" });
// revaling other section from buttom
sr.reveal(".sub-service,.about,.portfolio,.service,.cta,.contact", {
  delay: 160,
  origin: "bottom",
});
