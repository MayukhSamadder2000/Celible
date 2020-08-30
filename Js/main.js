// var options = {
//   damping: 0.05,
// };
// Scrollbar.init(document.querySelector("#my-scrollbar"), options);
// const body = document.body,
//   scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
//   height = scrollWrap.getBoundingClientRect().height - 1,
//   speed = 0.04;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//   offset += (window.pageYOffset - offset) * speed;

//   var scroll = "translateY(-" + offset + "px) translateZ(0)";
//   scrollWrap.style.transform = scroll;

//   callScroll = requestAnimationFrame(smoothScroll);
// }
// smoothScroll();
var cross = document.getElementById("cross");
var items = document.getElementById("items");
var open = document.getElementById("open");
var navbar = document.getElementById("navbar");
cross.addEventListener("click", function () {
  items.style.top = "-100rem";
  navbar.style.top = "-0rem";
});
open.addEventListener("click", function () {
  items.style.top = "0rem";
  navbar.style.top = "-4rem";
});
var i = 0;

var timeOne = 20000;
