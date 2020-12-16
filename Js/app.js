// * GET VARIABLE UI
const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// * Functions
// Check Required Inputs
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      //* Show Error
      showError(input, `${getFeildsName(input)} is required`);
    } else {
      //* Show success inputs
      showSuccess(input);
      //* Check Email
      checkEmail(email);
      // * Check Length
      checkLength(userName, 3, 15);
      checkLength(password, 6, 15);
      // * Password match
      checkPassword(password, password2);
    }
  });
}
// Get name form input
function getFeildsName(input) {
  return input.className.charAt(0).toUpperCase() + input.className.slice(1);
}
// Show Error Message
function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  formControl.querySelector("small").innerHTML = msg;
}
// Show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Check valid Email
function checkEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    //   show input email if is true
    showSuccess(email);
  } else {
    //   not Valid
    showError(email, "Email is not Valid");
  }
}
// Length of Name and Password
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFeildsName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFeildsName(input)} must be less than ${max} characters`
    );
  }
}
// Passwords Checks
function checkPassword(p1, p2) {
  if (p1.value !== p2.value) {
    // password error
    showError(p2, "Password did not match");
  } else {
    showSuccess(p2);
  }
}
// * Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
});
