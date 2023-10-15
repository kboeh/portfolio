// toggle for ham button and fade effect for links within drop-down menu
// activates the listener when a link is clicked within the dropdown menu
const hamburger = document.querySelectorAll(".ham, .nav-links li");
const hamAnimate = document.querySelector(".ham");
const navMenu = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.forEach((ham) => {
    ham.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        hamAnimate.classList.toggle("active");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    });
});


//toggle for the envelope-icon and the x-icon (to open/close the email pop-up)
const email = document.querySelectorAll(".contact-button, .email-button, .email-container > img, .overlay");
const eContainer = document.querySelector(".email-container");
const overlay = document.querySelector(".overlay");

email.forEach((e) => {
    e.addEventListener("click", () => {
      eContainer.classList.toggle("eToggle");
      overlay.classList.toggle("eToggle");
    })
})


//slide-in project imgs
function reveal() {
  const slideIn = document.querySelectorAll(".slide-from-left, .slide-from-right, .about-link, .slide-up, .slide-up-footer");
  //loop runs on every scroll checking for target elements
  for (let i = 0; i < slideIn.length; i++) {
    const windowHeight = window.innerHeight;
    //slideIn[i] = each target class
    //.getBoundingClientRect().top = area from top of viewport to top of target element
    const elementTop = slideIn[i].getBoundingClientRect().top;
    const projectVisible = 200;
    //windowHeight - projectVisible = sets desired distance between top of viewport to top of target element.
    //if function fires at desired distance 
    if (elementTop < windowHeight - projectVisible) {
      slideIn[i].classList.add("animate");
    }
    //footer buttons
    if (elementTop < windowHeight) {
      slideIn[i].classList.add("footer-animate");
    }
  }
}
  
window.addEventListener("scroll", reveal);