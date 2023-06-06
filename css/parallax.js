window.addEventListener("scroll", function() {
    const arElement = document.querySelector(".desktop .ae-app");
    const xdElement = document.querySelector(".desktop .xd-app");
    const psElement = document.querySelector(".desktop .ps-app");
    const aiElement = document.querySelector(".desktop .ai-app");
    const cityElement = document.querySelector(".desktop .seattle");
    const htmlElement = document.querySelector(".desktop .html-app");
    const cssElement = document.querySelector(".desktop .css-app");

    const arDistance = arElement.getBoundingClientRect().top;
    const xdDistance = xdElement.getBoundingClientRect().top;
    const psDistance = psElement.getBoundingClientRect().top;
    const aiDistance = aiElement.getBoundingClientRect().top;
    const htmlDistance = htmlElement.getBoundingClientRect().top;
    const cityDistance = cityElement.getBoundingClientRect().top;
    const cssDistance = cssElement.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;

    if (cssDistance <= windowHeight * 0.2) {
      cssElement.style.transform = "translateY(" + (scrollPosition - cssDistance) * 0.2 + "px)"; 
    } else {
      cssElement.style.transform = "translateY(0)"; 
    }
  
    if (htmlDistance <= windowHeight * 0.2) {
      htmlElement.style.transform = "translateY(" + (scrollPosition - htmlDistance) * 0.4 + "px)"; 
    } else {
      htmlElement.style.transform = "translateY(0)"; 
    }

    if (cityDistance <= windowHeight * 0.1) {
      cityElement.style.transform = "translateY(" + (scrollPosition - cityDistance) * 0.09 + "px)"; 
    } else {
      cityElement.style.transform = "translateY(0)"; 
    }

    if (arDistance <= windowHeight * 0.2) {
      arElement.style.transform = "translateY(" + (scrollPosition - arDistance) * 0.2 + "px)"; 
    } else {
      arElement.style.transform = "translateY(0)"; 
    }

    if (xdDistance <= windowHeight * 0.2) {
      xdElement.style.transform = "translateY(" + (scrollPosition - xdDistance) * 0.2 + "px)"; 
    } else {
      xdElement.style.transform = "translateY(0)"; 
    }

    if (psDistance <= windowHeight * 0.2) {
      psElement.style.transform = "translateY(" + (scrollPosition - psDistance) * 0.2 + "px)"; 
    } else {
      psElement.style.transform = "translateY(0)"; 
    }

    if (aiDistance <= windowHeight * 0.1) {
      aiElement.style.transform = "translateY(" + (scrollPosition - aiDistance) * 0.1 + "px)"; 
    } else {
      aiElement.style.transform = "translateY(0)"; 
    }
  });

  window.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var rotateX = (mouseY - windowHeight/2) * 0.005; 
    var rotateY = (mouseX - windowWidth/2) * -0.005;

    if (cssDistance <= windowHeight * 0.2) {
        cssElement.style.transform = "translateY(" + (scrollPosition - cssDistance) * 0.4 + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"; /* set parallax effect with rotation */
    } else {
        cssElement.style.transform = "translateY(0)"; 
    }
});

window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-up-fast');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
  
      if (position < window.innerHeight) {
        element.classList.add('show');
      }
    }
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-up-slow');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
  
      if (position < window.innerHeight) {
        element.classList.add('show');
      }
    }
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-up-medium');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
  
      if (position < window.innerHeight) {
        element.classList.add('show');
      }
    }
  });

  window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-up-super-slow');
  
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
  
      if (position < window.innerHeight) {
        element.classList.add('show');
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const computerIcon = document.querySelector('.computer-icon');
    const paintIcon = document.querySelector('.paint-icon');
    const ellipses = document.querySelectorAll('.ellipse-1, .ellipse-2, .ellipse-3');
  
    function bounceElements() {
        ellipses.forEach(function(ellipse, index) {
            setTimeout(function() {
                ellipse.classList.add('bounce');
            }, index * 200);
        });
    }

    computerIcon.addEventListener('click', function() {
        bounceElements();
    });
  
    paintIcon.addEventListener('click', function() {
        bounceElements();
    });
  
    ellipses.forEach(function(ellipse) {
        ellipse.addEventListener('animationend', function() {
            this.classList.remove('bounce');
        });
    });
}); 
  