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
    button.classList.toggle("primary-nav--expanded")
    button.classList.toggle("primary-nav--open")
    
  }



function navInit() {
  const button = document.querySelector('#primary-nav__menu-button');
  button.addEventListener('click',navToggle)
}
navInit()