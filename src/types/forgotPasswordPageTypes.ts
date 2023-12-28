import { ValidationResult } from './validationResult';

export type ForgotPasswordFormState = {
  email: string;
  captchaToken: string;
  isFormValid: boolean;
  emailValidation: ValidationResult;
  captchaValidation: ValidationResult;
};

export type ForgotPasswordFormAction = {
  type:
    | 'changed_email'
    | 'change_captcha_token'
    | 'reset_captcha'
    | 'validate_form';

  nextEmail?: string;
  nextCaptchaToken?: string;
};
