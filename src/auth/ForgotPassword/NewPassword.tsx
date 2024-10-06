import { AuthDisplay } from "components/Auth";
import NewPasswordForm from "./NewPasswordForm";

const NewPassword = () => {
  return <AuthDisplay rightComponent={<NewPasswordForm />} />;
};

export default NewPassword;
