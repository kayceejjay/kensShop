/*
Want to pass the screen height vairable to CSS (wHeight)
*/

var x = document.getElementById("container");
var cHeight = document.getElementById("container").clientHeight;
var cWidth = document.getElementById("container").clientWidth;
var offHeight = document.getElementById("container").offsetHeight;
var offWidth = document.getElementById("container").offsetWidth;
var sHeight = document.getElementById("container").scrollHeight;
var sWidth = document.getElementById("container").scrollWidth;


function elSize() {
  document.getElementById("offHgt").innerHTML =  offHeight;
  document.getElementById("offWdth").innerHTML =  offWidth;
  document.getElementById("cHgt").innerHTML =  cHeight;
  document.getElementById("cWdth").innerHTML =  cWidth;
  document.getElementById("sHgt").innerHTML = sHeight;
  document.getElementById("sWdth").innerHTML = sWidth;  
}


function screenSize() {
  var offHeight = document.getElementById("container").offsetHeight;
  var offWidth = document.getElementById("container").offsetWidth;
  var vHeight = $(window).height();
  var vWidth = $(window).width();
  var diffHeight = vHeight - offHeight;
  var diffWidth = vWidth - offWidth;
  var output1 = diffHeight;
  var output2 = diffWidth;
  
//Pass values to CSS variables 
  var declaration = document.styleSheets[0].cssRules[0].style;
  declaration.setProperty("--winHeight", vHeight);
  declaration.setProperty("--winWidth", vWidth);
  declaration.setProperty("--elHeight", offHeight);
  
//Window dimesions
  document.getElementById("wHgt").innerHTML = vHeight;
  document.getElementById("wWdth").innerHTML = vWidth;
  document.getElementById("diffHgt").innerHTML = diffHeight;
//output;
  document.getElementById("diffWdth").innerHTML = diffWidth;

  alert(`The difference between the screen & element heights is ${diffHeight}`);
  
}

elSize();
screenSize();