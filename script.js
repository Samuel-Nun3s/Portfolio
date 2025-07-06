const buttonMenu = document.querySelector("#burguer");
const nav = document.querySelector("nav");

buttonMenu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});