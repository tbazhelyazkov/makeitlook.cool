window.onload = function(){

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;
  // Edge
  var isEdge = !isIE && !!window.StyleMedia;
  if(isIE == false && isEdge == false) {

    const slides = document.querySelectorAll('.slide');
    var showSlide1, showSlide2, showSlide3, showSlide4, showSlide5;
    var showSlide1 = setTimeout(
      function() {
        slides[0].classList.toggle('rotate');
        slides[1].classList.toggle('active');
      }, 1000);
      var showSlide2 = setTimeout(
        function() {
          slides[1].classList.toggle('rotate');
          slides[2].classList.toggle('active');
        }, 2500);
        var showSlide3 = setTimeout(
        function() {
          slides[2].classList.toggle('rotate');
          var video = document.querySelector('#slide3 video');
          video.autoplay= true;
          video.load();
          slides[3].classList.toggle('active');
        }, 4000);
        var showSlide4 = setTimeout(
        function() {
          slides[3].classList.toggle('rotate');
          slides[4].classList.toggle('active');
        }, 5500);
        var showSlide5 = setTimeout(
          function() {
            slides[4].classList.toggle('goDown');
            slides[5].classList.toggle('active');
            scrollindicator.style.display = "none";
          }, 7500);



    let scrollPos = 0;
    const scrollindicator = document.getElementById('scrolldown');

    function checkPosition() {
      let windowY = window.scrollY;
      if (windowY > scrollPos) {
        scrollindicator.classList.add('hidden');
        clearTimeout(showSlide2);
        clearTimeout(showSlide3);
        clearTimeout(showSlide4);
        clearTimeout(showSlide5);
        slides[0].classList.add('hidden');
        slides[1].classList.add('hidden');
        slides[2].classList.add('hidden');
        slides[3].classList.add('hidden');
        slides[4].classList.add('hidden');
        slides[5].classList.add('active');
      } else {
        scrollindicator.classList.remove('hidden');
      }
      scrollPos = windowY;
    }

    window.addEventListener('scroll', checkPosition);
    
  }
  else {
    var getIntro = document.getElementById('intro');
    getIntro.parentNode.removeChild(getIntro);
    var showWelcome = document.getElementById('welcome');
    showWelcome.style.display = "block";
    showWelcome.style.opacity = 1;
    showWelcome.style.marginTop = "10rem";
  }
  
};