export type CreateUserDto = {
  email: string;
  password: string;
  displayName: string;
  captchaToken: string;
};

export type SignInUserDto = {
  email: string;
  password: string;
  captchaToken: string;
};

export type ResetPasswordDto = {
  email: string;
  captchaToken: string;
};

export type UpdatePasswordDto = {
  password: string;
  captchaToken: string;
};
