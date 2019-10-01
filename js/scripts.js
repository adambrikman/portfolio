// Burger Menu
const burger = document.querySelector(".navBurger");
const list = document.querySelector(".menu");

burger.addEventListener("click", () => {
  if (list.classList.contains("open")) {
    return list.classList.remove("open");
  }
  return list.classList.add("open");
});
