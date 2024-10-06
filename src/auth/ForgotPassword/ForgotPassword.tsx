import { AuthDisplay } from "components/Auth";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
  return <AuthDisplay rightComponent={<ForgotPasswordForm />} />;
};

export default ForgotPassword;
