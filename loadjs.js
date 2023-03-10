// Wait for the website to load
window.addEventListener("load", function() {
    // Hide the loading overlay after 3 seconds
    setTimeout(function() {
      document.body.classList.add("loaded");
    }, 3000);
  });

  window.addEventListener("scroll", function() {
    const prElement = document.querySelector(".home .pr-app-DDEW5g");
    const lrElement = document.querySelector(".home .lr-app-DDEW5g");
    const arElement = document.querySelector(".home .ae-app-DDEW5g");
    const xdElement = document.querySelector(".home .xd-app-DDEW5g");
    const psElement = document.querySelector(".home .ps-app-DDEW5g");
    const aiElement = document.querySelector(".home .ai-app-DDEW5g");
    const cityElement = document.querySelector(".home .seattle-DDEW5g");
    const htmlElement = document.querySelector(".home .html-app");
    const cssElement = document.querySelector(".home .css-app");

    

    const prDistance = prElement.getBoundingClientRect().top;
    const lrDistance = lrElement.getBoundingClientRect().top;
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
      cssElement.style.transform = "translateY(" + (scrollPosition - cssDistance) * 0.4 + "px)"; /* set parallax effect */
    } else {
      cssElement.style.transform = "translateY(0)"; /* reset transform */
    }
  
    if (htmlDistance <= windowHeight * 0.2) {
      htmlElement.style.transform = "translateY(" + (scrollPosition - htmlDistance) * 0.4 + "px)"; /* set parallax effect */
    } else {
      htmlElement.style.transform = "translateY(0)"; /* reset transform */
    }

    if (cityDistance <= windowHeight * 0.2) {
      cityElement.style.transform = "translateY(" + (scrollPosition - cityDistance) * 0.4 + "px)"; /* set parallax effect */
    } else {
      cityElement.style.transform = "translateY(0)"; /* reset transform */
    }

    if (prDistance <= windowHeight * 0.2) {
      prElement.style.transform = "translateY(" + (scrollPosition - prDistance) * 0.25 + "px)"; /* set parallax effect */
    } else {
      prElement.style.transform = "translateY(0)"; /* reset transform */
    }
  
    if (lrDistance <= windowHeight * 0.2) {
      lrElement.style.transform = "translateY(" + (scrollPosition - lrDistance) * 0.2 + "px)"; /* set parallax effect */
    } else {
      lrElement.style.transform = "translateY(0)"; /* reset transform */
    }

    if (arDistance <= windowHeight * 0.2) {
      arElement.style.transform = "translateY(" + (scrollPosition - arDistance) * 0.2 + "px)"; /* set parallax effect */
    } else {
      arElement.style.transform = "translateY(0)"; /* reset transform */
    }

    if (xdDistance <= windowHeight * 0.2) {
      xdElement.style.transform = "translateY(" + (scrollPosition - xdDistance) * 0.2 + "px)"; /* set parallax effect */
    } else {
      xdElement.style.transform = "translateY(0)"; /* reset transform */
    }

    if (psDistance <= windowHeight * 0.2) {
      psElement.style.transform = "translateY(" + (scrollPosition - psDistance) * 0.2 + "px)"; /* set parallax effect */
    } else {
      psElement.style.transform = "translateY(0)"; /* reset transform */
    }

    if (aiDistance <= windowHeight * 0.2) {
      aiElement.style.transform = "translateY(" + (scrollPosition - aiDistance) * 0.25 + "px)"; /* set parallax effect */
    } else {
      aiElement.style.transform = "translateY(0)"; /* reset transform */
    }
  });

  window.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var rotateX = (mouseY - windowHeight/2) * 0.005; /* calculate rotation value based on mouse position */
    var rotateY = (mouseX - windowWidth/2) * -0.005;

    if (cssDistance <= windowHeight * 0.2) {
        cssElement.style.transform = "translateY(" + (scrollPosition - cssDistance) * 0.4 + "px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"; /* set parallax effect with rotation */
    } else {
        cssElement.style.transform = "translateY(0)"; /* reset transform */
    }

    /* repeat for other elements */
});

  
  
  