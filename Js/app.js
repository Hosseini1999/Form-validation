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
      // Show Error
      showError(input, `is required`);
    } else {
      // Show success inputs
      showSuccess(input);
    }
  });
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
// * Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([userName, email, password, password2]);
});
