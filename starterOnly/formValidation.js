// Select the form
const form = document.querySelector("#form");

// *********** Array of objects to be validated *************

validationArray = [
  {
    err: "Prénom non-valide ✘",
    input: form.first,
    RegExp: RegExp("^[a-zA-Zéèï]{2,30}$"),
  },
  {
    err: "Nom non-valide ✘",
    input: form.last,
    RegExp: RegExp("^[a-zA-Zéèï]{2,30}$"),
  },
  {
    err: "Adress e-mail non-valide ✘",
    input: form.email,
    RegExp: RegExp("^[a-zA-Z0-9._-]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"),
  },
  {
    err: "Date non-valide ✘",
    input: form.birthdate,
    RegExp: RegExp("^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$"),
  },
  {
    err: "Veuillez entrer un nombre à un ou deux chiffres ✘",
    input: form.quantity,
    RegExp: RegExp("^[0-9]{1,2}$"),
  },
];

// ***************** Input Validation Method ***************

const validInput = (input, RegExp) => RegExp.test(input.value);

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

// addEventListener to run the whole validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validationFlag = true;

  // Validation Loop
  validationArray.forEach((el) => {
    let small = el.input.nextElementSibling;
    small.classList.remove("invalid");
    small.innerHTML = "";
    if (!validInput(el.input, el.RegExp)) {
      small.innerHTML = el.err;
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
      console.log(formData);
    }, 3000);
    launchMsg(validationArray[0].input.value);
  }
});
