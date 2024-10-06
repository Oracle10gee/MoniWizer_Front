export interface ForgotPasswordFormType {
  email_address: string;
}

export interface NewPasswordFormType {
  new_password: string;
  verify_password: string;
}

export type PasswordField = "new_password" | "verify_password";
