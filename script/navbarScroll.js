var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-container").style.top = "0";
  } else {
    document.getElementById("nav-container").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
} 

// window.onscroll = () => {
//   setTimeout(scroll, 1000);
// }

// let lastScrollTop = 0;
// const scroll = () => {
//   let st = window.pageYOffset || document.documentElement.scrollTop;
//   if (st > lastScrollTop) {
//     document.getElementById("nav-container").style.display = "none";
//   } else {
//     document.getElementById("nav-container").style.display = "flex";
//   }
//   lastScrollTop = st <= 0 ? 0 : st; 
// }
