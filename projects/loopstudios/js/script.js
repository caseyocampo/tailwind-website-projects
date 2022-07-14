const MenuBtn = document.getElementById("menu-btn")
const Menu = document.getElementById("menu")
MenuBtn.addEventListener("click", navToggle)

function navToggle() {
  MenuBtn.classList.toggle("open")
  Menu.classList.toggle("flex")
  Menu.classList.toggle("hidden")
}
