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

// ***************** Inputs Validation ***************

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

// Birthdate
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

// Number of tournament done
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

// Usage Conditions
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

// Open success message

const msgBground = document.querySelector(".msgBground");
const addName = document.querySelector(".addName");

// launch modal form
function launchMsg(name) {
  msgBground.style.display = "block";
  modalbg.style.display = "none";
  addName.innerHTML = `Merci ${name} !`;
}

// To close modal
function closeMsg() {
  successMsg.style.display = "none";
}

// ************ Form Validation ***********

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
    setTimeout(() => {
      form.submit();
    }, 2000);
    launchMsg(form.first.value);
  }
});
