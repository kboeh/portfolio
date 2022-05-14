// toggle for ham button and fade effect for links within drop-down menu
// activates the listener when a link is clicked within the dropdown menu
const hamburger = document.querySelectorAll("svg, .nav-links li");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.forEach((ham) => {
    ham.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
    });
});


//toggle for the envelope-icon and the x-icon (to open/close the email pop-up)
const email = document.querySelectorAll(".email-button, .email-container > img, .overlay");
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
  const slideIn = document.querySelectorAll(".project-img-container, .project-img-container-mid, .slide-up");

  for (let i = 0; i < slideIn.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = slideIn[i].getBoundingClientRect().top;
    const projectVisible = 300;
    const buttonVisible = 0;

    if (elementTop < windowHeight - projectVisible) {
      slideIn[i].classList.add("proj-active");
    } else {
      slideIn[i].classList.remove("proj-active");
    }

    if (elementTop < windowHeight - buttonVisible) {
      slideIn[i].classList.add("button-active");
    } else {
      slideIn[i].classList.remove("button-active");
    }
  }
}
  
window.addEventListener("scroll", reveal);