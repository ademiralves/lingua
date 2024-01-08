//nav 0
function openNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 1
function openNav1() {
  document.getElementById("mySidebar1").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav1() {
  document.getElementById("mySidebar1").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 2
function openNav2() {
  document.getElementById("mySidebar2").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav2() {
  document.getElementById("mySidebar2").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 3
function openNav3() {
  document.getElementById("mySidebar3").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav3() {
  document.getElementById("mySidebar3").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 4
function openNav4() {
  document.getElementById("mySidebar4").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav4() {
  document.getElementById("mySidebar4").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 5
function openNav5() {
  document.getElementById("mySidebar5").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav5() {
  document.getElementById("mySidebar5").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 6
function openNav6() {
  document.getElementById("mySidebar6").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav6() {
  document.getElementById("mySidebar6").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 7
function openNav7() {
  document.getElementById("mySidebar7").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav7() {
  document.getElementById("mySidebar7").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 8
function openNav8() {
  document.getElementById("mySidebar8").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav8() {
  document.getElementById("mySidebar8").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 9
function openNav9() {
  document.getElementById("mySidebar9").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav9() {
  document.getElementById("mySidebar9").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 10
function openNav10() {
  document.getElementById("mySidebar10").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav10() {
  document.getElementById("mySidebar10").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 11
function openNav11() {
  document.getElementById("mySidebar11").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav11() {
  document.getElementById("mySidebar11").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 12
function openNav12() {
  document.getElementById("mySidebar12").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav12() {
  document.getElementById("mySidebar12").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//nav 13
function openNav13() {
  document.getElementById("mySidebar13").style.width = "350px";
  document.getElementById("main").style.marginLeft = "350px";
}

function closeNav13() {
  document.getElementById("mySidebar13").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//infinite slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}