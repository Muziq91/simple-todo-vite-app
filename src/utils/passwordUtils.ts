import { ValidationResult } from '../types/validationResult';
import {
  atLeast8CharReg,
  lowercaseLetterReg,
  oneDigitReg,
  oneSpecialCharacterReg,
  strongPasswordReg,
  uppercaseLetterReg,
} from './regexUtils';

export function calculatePasswordStrength(password: string) {
  let strengthPercentage = 0;
  let passwordStrength = 'progress-error';

  if (lowercaseLetterReg.test(password)) {
    strengthPercentage += 10;
  }

  if (uppercaseLetterReg.test(password)) {
    strengthPercentage += 10;
  }

  if (oneDigitReg.test(password)) {
    strengthPercentage += 10;
  }

  if (oneSpecialCharacterReg.test(password)) {
    strengthPercentage += 10;
  }

  if (atLeast8CharReg.test(password)) {
    passwordStrength = 'progress-warning';
    strengthPercentage += 10;
  }

  if (strongPasswordReg.test(password)) {
    passwordStrength = 'progress-success';
    strengthPercentage += 50;
  }

  return { passwordStrength, strengthPercentage };
}

export function validatePassword(password: string): ValidationResult {
  let isValid = true;
  let errorMessages: Array<string> = [];

  if (!lowercaseLetterReg.test(password)) {
    isValid = false;
    errorMessages.push('Password must contain a lower case letter.');
  }

  if (!uppercaseLetterReg.test(password)) {
    isValid = false;
    errorMessages.push('Password must contain an upper case letter.');
  }

  if (!oneDigitReg.test(password)) {
    isValid = false;
    errorMessages.push('Password must contain at least one digit.');
  }

  if (!oneSpecialCharacterReg.test(password)) {
    isValid = false;
    errorMessages.push('Password must contain at least one special character.');
  }

  if (!atLeast8CharReg.test(password)) {
    isValid = false;
    errorMessages.push('Password must be at least 8 characters long.');
  }

  if (strongPasswordReg.test(password)) {
    isValid = true;
    errorMessages = [];
  }

  return { isValid, errorMessages };
}
