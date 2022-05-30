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

// To launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// To close modal
function closeModal() {
  modalbg.style.display = "none";
}

// *** Event Listener Functions ***

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClose.addEventListener("click", closeModal);

// ***************** Form Validation for each entry ***************

// Select the form
const form = document.querySelector("#form");

// *** Methods ***

// FirstName
const validFirst = (inputName) => {
  let nameRegExp = new RegExp("^[a-zA-Zéèï]{2,30}$", "g");
  let small = inputName.nextElementSibling;
  if (nameRegExp.test(inputName.value)) {
    small.innerHTML = "Prénom valide ✔";
    small.classList.remove("invalid");
    small.classList.add("valid");
    return true;
  } else {
    small.innerHTML = "Prénom non-valide ✘";
    small.classList.remove("valid");
    small.classList.add("invalid");
    return false;
  }
};

// Lastname
const validLast = (inputName) => {
  let nameRegExp = new RegExp("^[a-zA-Zéèï]{2,30}$", "g");
  let small = inputName.nextElementSibling;
  validEmail(form.email);
  if (nameRegExp.test(inputName.value)) {
    small.innerHTML = "Nom valide ✔";
    small.classList.remove("invalid");
    small.classList.add("valid");
    return true;
  } else {
    small.innerHTML = "Nom non-valide ✘";
    small.classList.remove("valid");
    small.classList.add("invalid");
    return false;
  }
};

// Email
const validEmail = (inputEmail) => {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
  );
  let small = inputEmail.nextElementSibling;
  if (emailRegExp.test(inputEmail.value)) {
    small.innerHTML = "Adresse e-mail valide ✔";
    small.classList.remove("invalid");
    small.classList.add("valid");
    return true;
  } else {
    small.innerHTML = "Adresse e-mail non-valide ✘";
    small.classList.remove("valid");
    small.classList.add("invalid");
    return false;
  }
};

const validBirthdate = (inputBirthdate) => {
  let birthdateRegExp = new RegExp("^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$");
  let small = inputBirthdate.nextElementSibling;
  if (birthdateRegExp.test(inputBirthdate.value)) {
    small.innerHTML = "Date valide ✔";
    small.classList.remove("invalid");
    small.classList.add("valid");
    return true;
  } else {
    small.innerHTML = "Date non-valide ✘";
    small.classList.remove("valid");
    small.classList.add("invalid");
    return false;
  }
};

const validQuantity = (inputQuantity) => {
  let quantityRegExp = new RegExp("^[0-9]{1,2}$");
  let small = inputQuantity.nextElementSibling;
  if (quantityRegExp.test(inputQuantity.value)) {
    small.innerHTML = "Réponse valide ✔";
    small.classList.remove("invalid");
    small.classList.add("valid");
    return true;
  } else {
    small.innerHTML = "Veuillez entrer un nombre à un ou deux chiffres ✘";
    small.classList.remove("valid");
    small.classList.add("invalid");
    return false;
  }
};

const validConditions = () => {
  let small = document.getElementById("conditions");
  if (form.checkbox1.checked) {
    small.innerHTML = "";
    small.classList.remove("invalid");
    return true;
  } else {
    small.innerHTML = "Veuillez accepter les conditions d'utilisation ✘";
    small.classList.add("invalid");
    return false;
  }
};

// Location

const radioButtons = document.querySelectorAll('input[name="location"]');

for (const radioButton of radioButtons) {
  radioButton.addEventListener("click", (e) => {
    city = radioButton.value;
  });
}

// ******** Form Validation event listener *******

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validFirst(form.first);
  validLast(form.last);
  validEmail(form.email);
  validBirthdate(form.birthdate);
  validQuantity(form.quantity);
  validConditions();
  if (
    validFirst(form.first) &&
    validLast(form.last) &&
    validEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    validConditions()
  ) {
    form.submit();
    console.log(FormData);
  }
});
