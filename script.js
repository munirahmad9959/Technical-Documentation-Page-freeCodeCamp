const icon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const navlink = document.querySelectorAll(".nav-link");

icon.onclick = function () {
    navbar.classList.toggle("toggle-sidebar");
};

navlink.forEach(link => {
    link.onclick = () => {
      navbar.classList.toggle("toggle-sidebar")
    }
     
});


function removeMenuIcon() {
  const menuIcon = document.getElementById('menu-icon');
  if (menuIcon) {
    menuIcon.remove();
  }
}

const mediaQuery = window.matchMedia('(min-width: 1079px)');

function handleMediaChange(e) {
  if (e.matches) {
    removeMenuIcon();
  }
}

mediaQuery.addListener(handleMediaChange);

handleMediaChange(mediaQuery);
