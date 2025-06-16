function passwordValidator(password) {
  if (password.length >= 5) {
    if (containUpperCase(password)) {
      if (containLowerCase(password)) {
        if (containSymbols(password)) {
          if (checkPreviousPass(password)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function containUpperCase(str) {
  return /[A-Z]/.test(str);
}

function containLowerCase(str) {
  return /[a-z]/.test(str);
}

function containSymbols(str) {
  return /[!#$%.*&]/.test(str);
}
function checkPreviousPass(str) {
  const passwordArray = ["D@ra3", "BmW.7", "75&Mn"];
  return !passwordArray.includes(str);
}

module.exports = passwordValidator;
