const {
  validateEmail,
  validateIsraeliMobileNumber,
  isAlphaHebrewOrEnglish,
  isNumeric,
  isStrongPassword,
} = require("./validation.helper");

function validator(str = "") {
  let isValid = true;

  const pipe = {
    required: (length) => {
      isValid =
        isValid && str.length > 0;
      return pipe;
    },
    min: (length) => {
      isValid =
        isValid && str.length >= length;
      return pipe;
    },
    max: (length) => {
      isValid =
        isValid && str.length <= length;
    },
    isValidEmail: () => {
      isValid =
        isValid && validateEmail(str);
      return pipe;
    },
    isValidIsraeliMobileNumber: () => {
      isValid =
        isValid &&
        validateIsraeliMobileNumber(
          str
        );
      return pipe;
    },
    isAlphaHebrewOrEnglish: () => {
      isValid =
        isValid &&
        isAlphaHebrewOrEnglish(str);
      return pipe;
    },
    isNumeric: () => {
      isValid =
        isValid && isNumeric(str);
      return pipe;
    },
    isStrongPassword: () => {
      isValid =
        isValid &&
        isStrongPassword(str);
      return pipe;
    },
    isNumeric: () => {
      isValid =
        isValid && isNumeric(str);
      return pipe;
    },
    isValid: () => isValid,
  };
  return pipe;
}

module.exports = validator;
