//declarations
const btn = document.querySelector('.mobile-menu-button');
const sidebar = document.querySelector('.sidebar');

//functions

btn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});