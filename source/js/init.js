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
    button.classList.toggle("primary-nav--expanded");
    button.classList.toggle("primary-nav--open");
    
  }


function navInit() {
  const button = document.querySelector('#primary-nav__menu-button');
  if (button) {
    
    button.addEventListener('click',navToggle);
  }
}

function accordionToggle(event) {
  const value = event.target.value;
  const accordion = document.querySelector(`#${value}`);
  const open = accordion.open;
    accordion.open = !open;
    
  }


function accordionInit() {
  const buttonList = document.querySelectorAll('.accordion__close-button');
  for (const button of buttonList) {
    button.addEventListener('click',accordionToggle);
  }
}
navInit();
accordionInit();