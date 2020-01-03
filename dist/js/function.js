

var sideWidth = document.getElementById('dash');
var fire = document.getElementById('leftSide');
var iconRotate = document.getElementById('iconPanel');
var panelHide = document.getElementsByClassName('l-item__description');
var boxPanel = document.getElementsByClassName('l-content__item');
var bottomFlex = document.getElementById('bottomPanel')


function navToogle() {
  sideWidth.classList.toggle("l-grid-action");
  iconRotate.classList.toggle("l-icon-panel");
  var i;
  for (i = 0; i < panelHide.length; i++) {
    var inner = panelHide[i];
    inner.classList.toggle("u-hide");
  }
  var e;
  for (e = 0; e < boxPanel.length; e++) {
     var middleFix = boxPanel[e];
       middleFix.classList.toggle("l-fix-flex");
  }

}


fire.addEventListener("click", navToogle)
