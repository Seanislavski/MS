//variables
var introSpot = document.getElementsByClassName('intro')[0];
//functions
// window.load(function() {
//     introSpot.removeClass('hold');
// })
//script


//gsap
TweenMax.to(".columnOne", 5, {color:"rgba(255,0,255,30)"}, {delay:2});
TweenMax.to('.columnTwo',1, {color:"rgba(144,144,20,10)"}, {delay:2});

