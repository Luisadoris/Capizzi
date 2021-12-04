// Variable to define size of sidenav
var sidenavSize = '300px';

function openNav() {
  // Expand the side menu
  document.getElementById('sidenav').style.width = sidenavSize;
  let navBurger = document.getElementById('nav-burger');
  navBurger.className += ' close';
  // Change onclick to now close the nav
  navBurger.onclick = closeNav;
}
function closeNav () {
  document.getElementById('sidenav').style.width = '0px';
  let navBurger = document.getElementById('nav-burger');
  navBurger.classList.remove('close');
  // Change onclick to open the nav
  navBurger.onclick = openNav;
}