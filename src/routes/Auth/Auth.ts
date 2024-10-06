import { CreateAccount } from "auth/CreateAccount";
import {
  CheckResetMail,
  ForgotPassword,
  NewPassword,
} from "auth/ForgotPassword";
import { Login } from "auth/Login";
import { VerifyEmail } from "auth/VerifyEmail";
import { ProfileSettings } from "auth/ProfileSettings";
import { VerifySuccessfull } from "auth/VerifySuccessful";
import { Website } from "auth/website";

export const Auth_route_group = [
  {
    element: Login,
    path: "/login",
  },
  {
    element: CreateAccount,
    path: "/create-account",
  },
  {
    element: VerifyEmail,
    path: "/verify-email",
  },  {
    element: VerifySuccessfull,
    path: "/verify-successful",
  },
  {
    element: ForgotPassword,
    path: "/forgot-password",
  },
  {
    element: CheckResetMail,
    path: "/check-email-reset",
  },
  {
    element: NewPassword,
    path: "/new-password/:id",
  },
  {
    element: CheckResetMail,
    path: "/password-reset-success",
  },
  {
    element: ProfileSettings,
    path: "/profile-settings",
  },
  {
    element: Website,
    path: "/landing-page",
  }
];
