const buttonMenu = document.querySelector("#burguer");
const nav = document.querySelector("nav");

buttonMenu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

window.addEventListener("load", () => {
  const body = document.querySelector("body");
  const widthBody = body.scrollWidth;

  if (widthBody >= 600) {
    nav.classList.remove("hidden");
  }
});