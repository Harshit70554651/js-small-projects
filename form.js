const form = document.querySelector("#form");
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const button = document.getElementById("btn");
const nameError = document.querySelector("#nameError")
const emailError = document.querySelector("#emailerror")
const passwordError = document.querySelector("#passworderror");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (name.value.length > 3 && name.value.length <= 15) {
    nameError.textContent = "Name is valid"
    nameError.style.color = "green"
  }
  else {
    nameError.textContent = "Name is not valid"
  };

  if (email.value !== "" && email.value.length <= 12 && email.value.length <= 20) {
    emailError.textContent = "email 13 se 20"
    emailError.style.color = "red"
  } else if (email.value !== email.value.trim()) {
    emailError.textContent = "Email should not have a space"
  } else if (email.value.split("@").length - 1 !== 1) {
    emailError.textContent = "email must contain only one @"
    emailError.style.color = "red"
  } else {
    const parts = email.value.split("@");

    const domain = parts[1];
    if (!domain.includes(".") || domain.startsWith(".") || domain.endsWith(".")) {
      emailError.textContent = "Enter a valid Email"
      emailError.style.color = "red"
    }
    else {
      emailError.textContent = "Email is valid "
      emailError.style.color = "green"
    }
  }
  if (password.value.length >= 8 && password.value.length <= 12) {
    const hasUpper = /[A-Z]/.test(password.value);
    const hasLower = /[a-z]/.test(password.value);
    const hasNumber = /\d/.test(password.value);
    const hasspacial = /[^A-Za-z0-9]/.test(password.value)
    // passwordError.textContent = "valid password"
    // passwordError.style.color = "green";
   if (hasUpper && hasLower && hasspacial && hasNumber) {
    passwordError.textContent = "Password is valid"
    passwordError.style.color = "green"
  }else{
    passwordError.textContent = "Password must isclude uppercase, lowercase, number and spaical charctor"
  }
  }
  else if (password.value.length < 8) {
    passwordError.textContent = "password is too short"
    passwordError.style.color = "red"
  }
  else {
    passwordError.textContent = "password is too long"
    passwordError.style.color = "red"
  }
})

