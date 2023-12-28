import { ValidationResult } from './validationResult';

export type SignUpFormState = {
  displayName: string;
  email: string;
  password: string;
  isFormValid: boolean;
  displayNameValidation: ValidationResult;
  emailValidation: ValidationResult;
  passwordValidation: ValidationResult;
  captchaValidation: ValidationResult;
  captchaToken: string;
};

export type SignUpFormAction = {
  type:
    | 'changed_display_name'
    | 'changed_email'
    | 'changed_password'
    | 'change_captcha_token'
    | 'reset_captcha'
    | 'validate_form';

  nextDisplayName?: string;
  nextEmail?: string;
  nextPassword?: string;
  nextCaptchaToken?: string;
};
