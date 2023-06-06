// navbar
let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// sdjh
let section = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    for(top >= offset && top < offset + height) {
        navlinks.forEach(links =>{

        })
    }
  });
};
// sticky

let header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 100);
