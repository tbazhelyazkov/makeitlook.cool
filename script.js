window.onload = function(){

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge
  var isEdge = !isIE && !!window.StyleMedia;
  if(isIE == false && isEdge == false) {
    let scrollPos = 0;
    const clouds = document.querySelector('ul');
    const scrollindicator = document.getElementById('scrolldown');
    const welcomescreen = document.getElementById('welcome');

    function checkPosition() {
      let windowY = window.scrollY;
      if (windowY > scrollPos) {
        // Scrolling UP
        clouds.classList.add('is-visible');
        clouds.style.opacity=1;
        clouds.classList.remove('is-hidden');
        scrollindicator.classList.add('hidden');
        welcomescreen.classList.add('is-visible');
        welcomescreen.classList.remove('is-hidden');
      } else {
        clouds.classList.remove('is-visible');
        clouds.classList.add('is-hidden');
        scrollindicator.classList.remove('hidden');
        
      }
      scrollPos = windowY;
    }

    window.addEventListener('scroll', checkPosition);
    var slide1 = document.getElementById('slide1');
    var slide2 = document.getElementById('slide2');
    var slide3 = document.getElementById('slide3');
    var slide4 = document.getElementById('slide4');

    setTimeout(
      function() {
        slide1.classList.toggle('rotate');
        slide2.classList.toggle('active');
      }, 2200);
    setTimeout(
      function() {
        slide2.classList.toggle('rotate');
        var video = document.querySelector('#slide3 video');
        video.autoplay= true;
        video.load();
        slide3.classList.toggle('active');
      }, 5000);
    setTimeout(
      function() {
        slide3.classList.toggle('rotate');
        slide4.classList.toggle('active');
      }, 9000);
  }
  else {
    var getIntro = document.getElementById('intro');
    var getClouds = document.querySelector('.clouds');
    getIntro.parentNode.removeChild(getIntro);
    getClouds.parentNode.removeChild(getClouds);
    var showWelcome = document.getElementById('welcome');
    showWelcome.style.display = "block";
    showWelcome.style.opacity = 1;
    showWelcome.style.marginTop = "10rem";
  }
  
};
