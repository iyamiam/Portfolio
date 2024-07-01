document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let parallaxBackground = document.querySelector(".parallax-background");
    parallaxBackground.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
  });
  