window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

window.addEventListener('scroll', function() {
    var images = document.querySelectorAll('.logos-header, .flier-header, .pm-header, .brochure-header, .video-editing-header');
    var windowHeight = window.innerHeight;

    images.forEach(function(img) {
        var positionFromTop = img.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            img.classList.add('swipe-from-left');
        }
    });
});

window.addEventListener('scroll', function() {
    var images = document.querySelectorAll('.urban-coffee-logo-2, .st-mary-logo-2, .king-tut-logo-2, .smsa-logo-2, .winter-basketball-2, .dental-van-2, .pensoteer-flyer-2, .abouna-brochure, .asd-brochure, .mv-thumbnail, .iom-thumbnail, .ct-thumbnail, .messi, .genesis-poster-2, .pensoteer-poster-red-2, .draft-4');
    var windowHeight = window.innerHeight;

    images.forEach(function(img) {
        var positionFromTop = img.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            img.classList.add('swipe-from-up');
        }
    });

    window.addEventListener('scroll', function() {
        var images = document.querySelectorAll('.logos-photoshop, .logos-illustrator, .fliers-photoshop fliers, .fliers-illustrator fliers, .pm-photoshop, .brochures-photoshop brochures, .brochures-illustrator brochures, .premiere-pro');
        var windowHeight = window.innerHeight;

        images.forEach(function(img) {
            var positionFromTop = img.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                img.classList.add('swipe-from-up');
            }
        });
    });
    
    window.addEventListener('scroll', function() {
        const elem = document.querySelector('.desktop .skyline-top');
        const elemTop = elem.getBoundingClientRect().top;
        const elemBottom = elem.getBoundingClientRect().bottom;
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      
        if (isVisible) {
          elem.classList.add('visible');
        }
      });
      
      window.addEventListener('scroll', function() {
        const elem = document.querySelector('.desktop .skyline-bottom');
        const elemTop = elem.getBoundingClientRect().top;
        const elemBottom = elem.getBoundingClientRect().bottom;
        const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      
        if (isVisible) {
          elem.classList.add('visible');
        }
      });

      var computerIcon = document.getElementById('computer-icon');
      var paintIcon = document.getElementById('paint-icon');
      var graphicGallery = document.querySelector('.graphic-gallery');
      var programmingGallery = document.querySelector('.programming-gallery');
  
      computerIcon.addEventListener('click', function() {
        setTimeout(function() {
          graphicGallery.classList.add('shift-left');
          programmingGallery.classList.add('shift-right');
        }, 10);
      });
  
      paintIcon.addEventListener('click', function() {
        setTimeout(function() {
          graphicGallery.classList.remove('shift-left');
          programmingGallery.classList.remove('shift-right');
        }, 10);
      });
});
  
