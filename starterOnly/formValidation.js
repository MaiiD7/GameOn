// Select the form
const form = document.querySelector("#form");

// Select the message box and the name to display in it 
const msgBground = document.querySelector(".msgBground");
const addName = document.querySelector(".addName");

// *********** Array of objects to be validated *************

// Objects in array are made of an error message, the input concerned and the RegExp to be validated
validationArray = [
  {
    err: "Prénom non-valide ✘",
    input: form.first,
    regexp: RegExp("^[a-zA-Zéèï]{2,30}$"),
  },
  {
    err: "Nom non-valide ✘",
    input: form.last,
    regexp: RegExp("^[a-zA-Zéèï]{2,30}$"),
  },
  {
    err: "Adress e-mail non-valide ✘",
    input: form.email,
    regexp: RegExp("^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"),
  },
  {
    err: "Date non-valide ✘",
    input: form.birthdate,
    regexp: RegExp("^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$"),
  },
  {
    err: "Veuillez entrer un nombre à un ou deux chiffres ✘",
    input: form.quantity,
    regexp: RegExp("^[0-9]{1,2}$"),
  },
];

// ***************** Input Validation Method ***************

// Validates all the inputs except the checkboxes
const validate = (input, regexp) => regexp.test(input.value);

// ************** Usage Conditions Validation Method ****************

// Verifying that the conditions of usage are checked
const validateConditions = () => {
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

// Display the message
function launchMsg(name) {
  msgBground.style.display = "block";
  modalbg.style.display = "none";
  addName.innerHTML = `Merci ${name} !`;
}

// ****************** Form Validation ********************

// addEventListener to run the whole validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validationFlag = true;

  // Validation Loop in validationArray
  validationArray.forEach((el) => {
    let small = el.input.nextElementSibling;
    small.classList.remove("invalid");
    small.innerHTML = "";
    if (!validate(el.input, el.regexp)) {
      small.innerHTML = el.err;
      small.classList.add("invalid");
      validationFlag = false;
    }
  });

  // Checking if conditions of usage are checked
  if (!validateConditions()) {
    validationFlag = false;
  }

  // Submit form if validated
  if (validationFlag) {
    setTimeout(() => {
      form.submit();
      console.log(formData);
    }, 3000);

    // Display the success message
    launchMsg(validationArray[0].input.value);
  }
});
