/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");
test("password has at least 5 characters", () => {
  // Arrange
  const password = "1245";
  const passwordArray = ["D@ra3", "BmW.7", "75&Mn"];
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("password has at least one English lowercase letter (a-z)", () => {
  // Arrange
  const password = "12A45";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});
test("password has at least one English uppercase letter (A-Z)", () => {
  // Arrange
  const password = "12aF5";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});
test("password has at least one of the following non-alphanumeric symbols: (!, #, $, %, ., *, &)", () => {
  // Arrange
  const password = "1$aF5";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(true);
});
test("password Must not be any previous password in the passwords array", () => {
  // Arrange
  const password = "BmW.7";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});
