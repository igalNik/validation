const {
  validateEmail,
  validateIsraeliMobileNumber,
  isAlphaHebrewOrEnglish,
  isNumeric,
  isStrongPassword,
} = require("./validation.helper");

function validator(str = "") {
  let isValid = true;

  const errors = [];

  const pipe = {
    required: function () {
      const isValidLength =
        str.length > 0;

      isValid =
        isValid && isValidLength;

      if (!isValidLength) {
        errors.push(pipe.required.name);
      }

      return pipe;
    },
    min: function (length) {
      const isValidLength =
        str.length >= length;

      isValid =
        isValid && isValidLength;

      if (!isValidLength) {
        errors.push(pipe.min.name);
      }

      return pipe;
    },
    max: function (length) {
      const isValidLength =
        str.length <= length;

      isValid =
        isValid && isValidLength;

      if (!isValidLength) {
        errors.push(pipe.max.name);
      }

      return pipe;
    },
    isValidEmail: function () {
      const currentResult =
        validateEmail(str);

      isValid =
        isValid && currentResult;

      if (!currentResult) {
        errors.push(
          pipe.isValidEmail.name
        );
      }
      return pipe;
    },
    isValidIsraeliMobileNumber:
      function () {
        const currentResult =
          validateIsraeliMobileNumber(
            str
          );

        isValid =
          isValid && currentResult;
        if (!currentResult) {
          errors.push(
            pipe
              .isValidIsraeliMobileNumber
              .name
          );
        }
        return pipe;
      },
    isAlphaHebrewOrEnglish:
      function () {
        const currentResult =
          isAlphaHebrewOrEnglish(str);

        isValid =
          isValid && currentResult;
        if (!currentResult) {
          errors.push(
            pipe.isAlphaHebrewOrEnglish
              .name
          );
        }
        return pipe;
      },
    isNumeric: function () {
      const currentResult =
        isNumeric(str);

      isValid =
        isValid && currentResult;
      if (!currentResult) {
        errors.push(
          pipe.isNumeric.name
        );
      }
      return pipe;
    },
    isStrongPassword: function () {
      const currentResult =
        isStrongPassword(str);
      isValid =
        isValid && currentResult;
      if (!currentResult) {
        errors.push(
          pipe.isStrongPassword.name
        );
      }
      return pipe;
    },
    isNumeric: function () {
      const currentResult =
        isNumeric(str);

      isValid =
        isValid && currentResult;
      if (!currentResult) {
        errors.push(
          pipe.isNumeric.name
        );
      }
      return pipe;
    },
    result: () => ({
      isValid,
      errors,
    }),
    isValid: () => isValid,
  };
  return pipe;
}

module.exports = validator;
