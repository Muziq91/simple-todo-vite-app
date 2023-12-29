import { ValidationResult } from './validationResult';

export type SignInFormState = {
  email: string;
  password: string;
  isFormValid: boolean;
  emailValidation: ValidationResult;
  passwordValidation: ValidationResult;
  captchaValidation: ValidationResult;
  captchaToken: string;
};

export type SignInFormAction = {
  type:
    | 'changed_email'
    | 'changed_password'
    | 'change_captcha_token'
    | 'reset_captcha'
    | 'validate_form';

  nextEmail?: string;
  nextPassword?: string;
  nextCaptchaToken?: string;
};
