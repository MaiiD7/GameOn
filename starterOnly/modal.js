function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// *********** Open and Close Modal *********************

// // DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// *** Methods ***

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// To close modal
function closeModal() {
  modalbg.style.display = "none";
}

// *** Event Listener Functions ***

// To launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
modalClose.addEventListener("click", closeModal);
