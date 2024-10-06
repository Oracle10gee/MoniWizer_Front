export interface CreateAccountFormType {
  fullname: string;
  email: string;
  phoneNumber: string | number;
  password: string;
  confirmPassword: string;
  referral: number | string;
  isAgreement: boolean;
}
export type PasswordField = "password" | "confirmPassword";
