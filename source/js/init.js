// (function(w) {
//   var sw = document.body.clientWidth,
//     sh = document.body.clientHeight;

//   $(w).resize(function() {
//     //Update dimensions on resize
//     sw = document.body.clientWidth;
//     sh = document.body.clientHeight;

//     //updateAds();
//   });}

  //Navigation toggle
function navToggle() {
  const button = document.querySelector('#primary-nav');
  // if contains --open remove --expanded, wait a moment then remove --open, else, add both at the same time
  if (button.classList.contains("primary-nav--open") || button.classList.contains("primary-nav--expanded")) {
    button.classList.remove("primary-nav--expanded")
    setTimeout(function(){
      button.classList.remove("primary-nav--open")
    },200);
    
  } else {
    button.classList.add("primary-nav--expanded")
    button.classList.add("primary-nav--open")
    
  }

}

function navInit() {
  const button = document.querySelector('#primary-nav__menu-button');
  button.addEventListener('click',navToggle)
}
navInit()