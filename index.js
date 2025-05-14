const helpers = require("./validation.helper");
const validator = require("./validator");

console.log(
  validator("test").isValidEmail()
    .isValidEmail.name
);
module.exports = {
  ...helpers,
  validator,
};
