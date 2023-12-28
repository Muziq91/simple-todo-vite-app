export type CreateUserDto = {
  email: string;
  password: string;
  displayName: string;
  captchaToken: string;
};

export type UserEmailDto = {
  email: string;
};
