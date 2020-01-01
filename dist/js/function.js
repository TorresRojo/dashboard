

var sideWidth = document.getElementById('dash');
var fire = document.getElementById('leftSide');

function navToogle() {
  sideWidth.classList.toggle("l-grid-action")
}

fire.addEventListener("click", navToogle)
