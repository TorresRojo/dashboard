

var sideWidth = document.getElementById('dash');
var fire = document.getElementById('leftSide');
var icon = document.getElementById('iconPanel');


function navToogle() {
  sideWidth.classList.toggle("l-grid-action");
  icon.classList.toggle("l-icon-panel");
}

fire.addEventListener("click", navToogle)
