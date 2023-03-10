history.scrollRestoration = 'manual';
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
} else {
  window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }
}


window.addEventListener('scroll', function() {
    const kingTutLogo = document.querySelector('.king-tut-logo-1-LohQFh');
    const stMaryLogo = document.querySelector('.st-mary-logo-1-LohQFh');
    const urbanCoffeeLogo = document.querySelector('.urban-coffee-logo-1-LohQFh');
    const smsaLogo = document.querySelector('.smsa-logo-1-LohQFh');
    const winterBasketball  = document.querySelector('.winter-basketball-1-t0aNkK');
    const dentalVan = document.querySelector('.dental-van-1-t0aNkK');
    const nativity = document.querySelector('.nativity-1-t0aNkK');
    const pensoteer = document.querySelector('.pensoteer-version-6-1-t0aNkK');
    const pM = document.querySelector('.home .pm-FpKU5h');
    const brochure = document.querySelector('.home .brochures-FpKU5h');
    const video = document.querySelector('.home .videos-FpKU5h');
    const dots = document.querySelector('.home .dots-nb3zlc');

    const logos = [kingTutLogo, stMaryLogo, urbanCoffeeLogo, smsaLogo, winterBasketball, dentalVan, nativity, pensoteer, pM, brochure, video, dots];
    
    logos.forEach(function(logo) {
      if (isElementInViewport(logo)) {
        logo.classList.add('animate');
      }
    });
  });
  

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    );
  }
  
  window.addEventListener('scroll', () => {
    const elem1 = document.querySelector('.home .im-an-aspiring-ui-graphic-designer-nb3zlc');
    const elem2 = document.querySelector('.home .m-y-goal-is-to-alway-nb3zlc');
    const elem3 = document.querySelector('.home .exceed-expectations-nb3zlc');
    const elem4 = document.querySelector('.home .nahome-headband-01-1-nb3zlc');
    const elem5 = document.querySelector('.home .hi-im-nahome-nb3zlc');
    const elem6 = document.querySelector('.home .s-eattle-wa-nb3zlc');
    const elem7 = document.querySelector('.home .n-ahom-ey-o2002gmailcom-nb3zlc');
    const elem8 = document.querySelector('.home .n-ahome-y-ohannes-nb3zlc');
  
    // Check if the seattle skyline and vector elements are visible
    const skyline = document.querySelector('.home .seattle-skyline-nb3zlc');
    const vector = document.querySelector('.home .vector-nb3zlc');
    const skylineTop = skyline.getBoundingClientRect().top;
    const skylineBottom = skyline.getBoundingClientRect().bottom;
    const vectorTop = vector.getBoundingClientRect().top;
    const vectorBottom = vector.getBoundingClientRect().bottom;
    const skylineIsVisible = skylineTop < window.innerHeight && skylineBottom >= 0;
    const vectorIsVisible = vectorTop < window.innerHeight && vectorBottom >= 0;
  
    // Add a class to trigger the fade-up animation if the elements are visible
    if (skylineIsVisible && vectorIsVisible) {
      if (isElementInViewport(elem1)) {
        elem1.classList.add('fade-up');
      }
  
      if (isElementInViewport(elem2)) {
        elem2.classList.add('fade-up');
      }
  
      if (isElementInViewport(elem3)) {
        elem3.classList.add('fade-up');
      }
  
      if (isElementInViewport(elem4)) {
        elem4.classList.add('fade-up');
      }
  
      if (isElementInViewport(elem5)) {
        elem5.classList.add('fade-up');
      }

      if (isElementInViewport(elem6)) {
        elem6.classList.add('fade-up');
      }

      if (isElementInViewport(elem7)) {
        elem7.classList.add('fade-up');
      }

      if (isElementInViewport(elem8)) {
        elem8.classList.add('fade-up');
      }
    }
  });
  
  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .seattle-skyline-nb3zlc');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });
  
  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .vector-nb3zlc');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });

  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .logo-header-FpKU5h');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });

  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.brochure-header-FpKU5h');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });

  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .flier-header-FpKU5h');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });

  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .photo-manip-header-FpKU5h');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });

  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .video-editing-header-FpKU5h');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });

  window.addEventListener('scroll', function() {
    const elem = document.querySelector('.home .nahome-headband-01-1-nb3zlc');
    const elemTop = elem.getBoundingClientRect().top;
    const elemBottom = elem.getBoundingClientRect().bottom;
    const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  
    if (isVisible) {
      elem.classList.add('visible');
    }
  });
  
  