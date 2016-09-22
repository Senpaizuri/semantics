var homeBut = document.getElementById('home');
var homeRet = document.getElementById('homeReturn');
var Slider = false;
homeBut.addEventListener('click',Slide);
homeRet.addEventListener('click',SlideBack);
function Slide(){
  Slidables.style.left = '-100%';
}
function SlideBack(){
  Slidables.style.left = '0%';
}
