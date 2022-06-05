// Select the form
const form = document.querySelector("#form");

// ***************** Input Validation Methods ***************

// Names
const validName = (input) =>
  new RegExp("^[a-zA-Zéèï]{2,30}$", "g").test(input.value);

// Email
const validEmail = (input) =>
  new RegExp("^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$").test(
    input.value
  );

// Birthdate
const validBirthdate = (input) =>
  new RegExp("^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$").test(input.value);

// Number of tournaments done
const validQuantity = (input) => new RegExp("^[0-9]{1,2}$").test(input.value);

// ************** Usage Conditions Validation Method ****************

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

// **************** To show success message *****************

const msgBground = document.querySelector(".msgBground");
const addName = document.querySelector(".addName");

// Display the message
function launchMsg(name) {
  msgBground.style.display = "block";
  modalbg.style.display = "none";
  addName.innerHTML = `Merci ${name} !`;
}

// ****************** Form Validation ********************

// Array containing objects made of :
// A function, a error message and the input for the function

validationArray = [
  { fn: validName, err: "Prénom non-valide ✘", input: form.first },
  { fn: validName, err: "Nom non-valide ✘", input: form.last },
  { fn: validEmail, err: "Adress e-mail non-valide ✘", input: form.email },
  { fn: validBirthdate, err: "Date non-valide ✘", input: form.birthdate },
  {
    fn: validQuantity,
    err: "Veuillez entrer un nombre à un ou deux chiffres ✘",
    input: form.quantity,
  },
];

// addEventListener to run the whole validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validationFlag = true;
  validationArray.forEach((element) => {
    let small = element.input.nextElementSibling;
    small.classList.remove("invalid");
    small.innerHTML = "";
    if (!element.fn(element.input)) {
      small.innerHTML = element.err;
      small.classList.add("invalid");
      validationFlag = false;
    }
  });
  if (!validConditions()) {
    validationFlag = false;
  }
  if (validationFlag) {
    setTimeout(() => {
      form.submit();
    }, 3000);
    launchMsg(validationArray[0].input.value);
  }
});
