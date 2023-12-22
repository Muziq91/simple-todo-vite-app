import { ValidationResult } from '../types/validationResult';
import {
  allUppercaseLettersReg,
  atLeast3CharReg,
  atMost30CharReg,
  oneSpecialCharacterReg,
  validEmailAddressReg,
} from './regexUtils';

export function validateDisplayName(displayName: string): ValidationResult {
  let isValid = true;
  const errorMessages: Array<string> = [];

  if (allUppercaseLettersReg.test(displayName)) {
    isValid = false;
    errorMessages.push('Display Name cannot contain all upper case letters.');
  }

  if (!atLeast3CharReg.test(displayName)) {
    isValid = false;
    errorMessages.push('Display Name should be at least 3 characters long.');
  }

  if (atMost30CharReg.test(displayName)) {
    isValid = false;
    errorMessages.push('Display Name should be at most 30 characters long.');
  }

  if (oneSpecialCharacterReg.test(displayName)) {
    isValid = false;
    errorMessages.push('Display Name cannot have special characters.');
  }

  return { isValid, errorMessages };
}

export function validateEmailAddress(emailAddress: string): ValidationResult {
  let isValid = true;
  const errorMessages: Array<string> = [];

  if (!validEmailAddressReg.test(emailAddress)) {
    isValid = false;
    errorMessages.push('Email address does not have the correct format.');
  }

  return { isValid, errorMessages };
}
