"use strict";

new Swiper("#swiper-1", {
  pagination: {
    el: "#swiper-1, .swiper-pagination",
    clickable: "true"
  },
  lazyLoading: true,
  keyboard: {
    enabled: true
  }, 
  breakpoints: {
    920: {
      slidesPerView: 3,
    }
  }
});

const hamburger = document.getElementById("hamburger");
const middleNav = document.querySelector(".middle-nav");
const emailCheck = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

function displayMiddleNav(event) {
  middleNav.classList.toggle("hidden");
  event.stopPropagation();
}

function changeHamburger() {
  if (hamburger.getAttribute('src') === "./images/icon-hamburger.svg") {
    hamburger.setAttribute('src', "./images/icon-close.svg");
  }
  else {
    hamburger.setAttribute('src', "./images/icon-hamburger.svg");
  }
}

function validateEmail(event) {
  if(!emailCheck.checkValidity()) {
    emailError.textContent = "Valid email required";
  } else {
    emailError.textContent = "";
  }
}

hamburger.addEventListener("click", displayMiddleNav);
emailCheck.addEventListener("input", validateEmail);

document.addEventListener("click", function(event) {
  if (!middleNav.contains(event.target)) {
    middleNav.classList.remove("hidden");
    middleNav.classList.toggle("hidden");
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    emailError.textContent = "";
  }
});