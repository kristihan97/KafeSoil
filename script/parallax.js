const parallax = document.getElementById("pp1");
window.addEventListener("scroll", function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = (offset - 600) * 0.07 + "px";
})

