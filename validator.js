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
      const isValidEmail =
        validateEmail(str);

      isValid = isValid && isValidEmail;

      if (!isValidEmail) {
        errors.push(
          pipe.isValidEmail.name
        );
      }
      return pipe;
    },
    isValidIsraeliMobileNumber:
      function () {
        const isValidIsraeliMobileNumber =
          validateIsraeliMobileNumber(
            str
          );

        isValid =
          isValid &&
          isValidIsraeliMobileNumber;
        if (
          !isValidIsraeliMobileNumber
        ) {
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
        const isAlphaHebrewOrEnglish =
          isAlphaHebrewOrEnglish(str);

        isValid =
          isValid &&
          isAlphaHebrewOrEnglish;
        if (!isAlphaHebrewOrEnglish) {
          errors.push(
            pipe.isAlphaHebrewOrEnglish
              .name
          );
        }
        return pipe;
      },
    isNumeric: function () {
      const isNumeric = isNumeric(str);

      isValid = isValid && isNumeric;
      if (!isNumeric) {
        errors.push(
          pipe.isNumeric.name
        );
      }
      return pipe;
    },
    isStrongPassword: function () {
      const isStrongPassword =
        isStrongPassword(str);
      isValid =
        isValid && isStrongPassword;
      if (!isStrongPassword) {
        errors.push(
          pipe.isStrongPassword.name
        );
      }
      return pipe;
    },
    isNumeric: function () {
      const isNumeric = isNumeric(str);

      isValid = isValid && isNumeric;
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
