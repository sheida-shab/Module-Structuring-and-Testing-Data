function passwordValidator(password) {
  //password has at least 5 characters
  if (password.length >= 5) {
    //password has at least one English uppercase letter (a-z)
    if (containUpperCase(password)) {
      //password has at least one English lowercase letter (a-z)
      if (containLowerCase(password)) {
        //password has at least one of the following non-alphanumeric symbols: (!, #, $, %, ., *, &)
        if (containSymbols(password)) {
          //password Must not be any previous password in the passwords array
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
