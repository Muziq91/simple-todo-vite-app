import { ValidationResult } from './validationResult';

export type ResetPasswordFormState = {
  password: string;
  captchaToken: string;
  isFormValid: boolean;
  passwordValidation: ValidationResult;
  captchaValidation: ValidationResult;
};

export type ResetPasswordFormAction = {
  type:
    | 'changed_password'
    | 'change_captcha_token'
    | 'reset_captcha'
    | 'validate_form';

  nextPassword?: string;
  nextCaptchaToken?: string;
};
