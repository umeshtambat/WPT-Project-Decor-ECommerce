// const form = document.querySelector("form")
// allInput = form.querySelectorAll(".first input");

// // Get the full name input field
// var fullNameInput = document.querySelector('input[type="text"][placeholder="Enter Your Name"]');

// // Add an event listener to the input field
// fullNameInput.addEventListener('input', function() {
//   // Get the current value of the input field
//   var fullName = fullNameInput.value;

//   // Check if the full name meets the validation criteria
//   var isValid = /^[A-Za-z\s]{5,12}$/.test(fullName) && !/\d/.test(fullName);

//   // Display an error message if the validation fails
//   if (!isValid) {
//     fullNameInput.setCustomValidity('Please enter a valid full name without numbers (5-12 characters)');
//   } else {
//     fullNameInput.setCustomValidity('');
//   }
// });



var emailField = document.getElementById("uname");
var emailLabel = document.getElementById("email-label");

function validatEmail() {
  emailLabel.style.bottom = "45px";

if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailField.style.borderBottomColor="red";
  return false;
}
emailField.style.borderBottomColor="green";
}




    // if (!email.match(regex)) {
    //   alert("Invalid email address");
    //   return false;
    // }

    // return true;
  // }
// For password validation

// var passwordInput = document.getElementById('password');
// var confirmPasswordInput = document.getElementById('confirmPassword');
// var passwordError = document.getElementById('passwordError');

// function validatePassword() {
//   if (passwordInput.value !== confirmPasswordInput.value) {
//     passwordError.textContent = "Passwords do not match";
//     confirmPasswordInput.setCustomValidity("Passwords do not match");
//   } else {
//     passwordError.textContent = "";
//     confirmPasswordInput.setCustomValidity("");
//   }
// }

// passwordInput.addEventListener('input', validatePassword);
// confirmPasswordInput.addEventListener('input', validatePassword);







