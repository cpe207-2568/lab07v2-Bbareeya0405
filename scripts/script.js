// === Get input fields ===
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

// === Get buttons ===
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#clear-btn");

// === Email validation function ===
function validateEmail(email) {
  const atPos = email.indexOf("@");
  const dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// === Reset field state to gray when user types ===
[firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
  input.addEventListener("input", () => {
    input.classList.remove("is-valid", "is-invalid");
  });
});

// === Submit button click ===
submitBtn.onclick = () => {
  let isValid = true;

  // Validate first name (non-empty)
  if (firstNameInput.value.trim() === "") {
    firstNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    firstNameInput.classList.add("is-valid");
  }

  // Validate last name (non-empty)
  if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    lastNameInput.classList.add("is-valid");
  }

  // Validate email
  if (!validateEmail(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
    isValid = false;
  } else {
    emailInput.classList.add("is-valid");
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordInput.classList.add("is-valid");
  }

  // Validate confirm password
  if (
    confirmPasswordInput.value !== passwordInput.value ||
    confirmPasswordInput.value.length < 6
  ) {
    confirmPasswordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    confirmPasswordInput.classList.add("is-valid");
  }

  // If all valid, show success alert
  if (isValid) {
    alert("Registered successfully");
  }
};

// === Reset button click ===
resetBtn.onclick = () => {
  [firstNameInput, lastNameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
    input.value = "";
    input.classList.remove("is-valid", "is-invalid");
  });
};

