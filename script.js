// scroll section
let section = document.querySelector("section");
let navlink = document.querySelector("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttributr("id");
  });
};
