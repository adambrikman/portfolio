// Burger Menu
const burger = document.querySelector(".navBurger");
const list = document.querySelector(".menu");

burger.addEventListener("click", () => {
  if (list.classList.contains("open")) {
    return list.classList.remove("open");
  }
  return list.classList.add("open");
});

// Close burger when list-item clicked
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  return list.classList.remove("open");
});

/* Reordering About Me - First picture & paragraph */

let pic = document.querySelector(".first");
let para = document.querySelector(".second");

window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth <= 900) {
    para.parentNode.removeChild(para);
    pic.parentNode.insertBefore(para, pic);
  }
});

// When screen is larger than 900px, reset order back to normal
window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth > 900) {
    pic.parentNode.removeChild(pic);
    para.parentNode.insertBefore(pic, para);
  }
});
