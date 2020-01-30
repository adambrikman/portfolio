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

var reorderParagraphs = function () {
  if (document.documentElement.clientWidth <= 900) {
    para.parentNode.removeChild(para);
    pic.parentNode.insertBefore(para, pic);
  }
};

// Upon load, swap order of first picture & first paragraph
document.addEventListener("DOMContentLoaded", reorderParagraphs, false);

// When screen is less than or equal to 900px, swap order of first picture & first paragraph
window.addEventListener("resize", reorderParagraphs, false);

// When screen is larger than 900px, change order back to normal
window.addEventListener("resize", () => {
  if (document.documentElement.clientWidth > 900) {
    pic.parentNode.removeChild(pic);
    para.parentNode.insertBefore(pic, para);
  }
});

// Handle e-mail submissions
const formElement = document.querySelector(".form");

formElement.addEventListener("submit", event => {
  event.preventDefault();
  const data = new URLSearchParams(new FormData(formElement));
  fetch("https://getform.io/f/63974a73-8303-4bc8-aa6e-e3b03bf24a65", {
    method: "post",
    body: data
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  emailSentSnackbar();
});

// Snackbar notification for e-mail sent
function emailSentSnackbar() {
  var snackbar = document.getElementById("snackbar");

  snackbar.className = "show";

  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

// Project button hover effect
document.querySelectorAll('.btn--project').forEach(button => {

  let div = document.createElement('div'),
    letters = button.textContent.trim().split('');

  function elements(letter, index, array) {

    let element = document.createElement('span'),
      part = (index >= array.length / 2) ? -1 : 1,
      position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
      move = position / (array.length / 2),
      rotate = 1 - move;

    element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
    element.style.setProperty('--move', move);
    element.style.setProperty('--rotate', rotate);
    element.style.setProperty('--part', part);

    div.appendChild(element);

  }

  letters.forEach(elements);

  button.innerHTML = div.outerHTML;

  button.addEventListener('mouseenter', e => {
    if (!button.classList.contains('out')) {
      button.classList.add('in');
    }
  });

  button.addEventListener('mouseleave', e => {
    if (button.classList.contains('in')) {
      button.classList.add('out');
      setTimeout(() => button.classList.remove('in', 'out'), 950);
    }
  });

});
