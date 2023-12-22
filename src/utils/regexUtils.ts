const lowercaseLetter = '(?=.*[a-z])'.trim();
export const lowercaseLetterReg = new RegExp(lowercaseLetter);

const uppercaseLetter = ' (?=.*[A-Z])'.trim();
export const uppercaseLetterReg = new RegExp(uppercaseLetter);

const oneDigit = '(?=.*[0-9])'.trim();
export const oneDigitReg = new RegExp(oneDigit);

const oneSpecialCharacter = '(?=.*[^A-Za-z0-9])'.trim();
export const oneSpecialCharacterReg = new RegExp(oneSpecialCharacter);

const allUppercaseLetters = '(^[A-Z]+$)'.trim();
export const allUppercaseLettersReg = new RegExp(allUppercaseLetters);

const atLeast3Char = '(?=.{3,})'.trim();
export const atLeast3CharReg = new RegExp(atLeast3Char);

const atLeast8Char = '(?=.{8,})'.trim();
export const atLeast8CharReg = new RegExp(atLeast8Char);

const atLeast12Char = '(?=.{12,})'.trim();
export const atLeast12CharReg = new RegExp(atLeast12Char);

const atMost30Char = '(?=.{31,})'.trim();
export const atMost30CharReg = new RegExp(atMost30Char);

const strongPassword =
  `${lowercaseLetter}${uppercaseLetter}${oneDigit}${oneSpecialCharacter}${atLeast12Char}`.trim();
export const strongPasswordReg = new RegExp(strongPassword);

const validEmailAddress =
  '(^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$)'.trim();
export const validEmailAddressReg = new RegExp(validEmailAddress);
