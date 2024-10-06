import { EyeSlash } from "assets/icons/svgs";
import Field from "components/Form/Field";
import AuthForm from "components/Auth/AuthForm";
import { useNewPasswordForm } from "./hooks";

const NewPasswordForm = () => {
  const { formik, loading, new_password, verify_password, handleShowPassword } =
    useNewPasswordForm();

  return (
    <AuthForm
      loading={loading}
      header="Enter New Password"
      description="Choose a new password to access your account."
      onButtonClick={formik.handleSubmit}
      btnLabel="Reset Password"
      className="border-0"
      formComponent={
        <>
          <div className="flex flex-col gap-6 mt-8">
            <Field
              label="enter new password"
              type={new_password ? "text" : "password"}
              name="new_password"
              value={formik.values.new_password}
              onChange={formik.handleChange}
              placeholder="Enter new password"
              icon={EyeSlash}
              isClickableIcon
              onClickIcon={() => handleShowPassword("new_password")}
            />
            <Field
              label="verify new password"
              type={verify_password ? "text" : "password"}
              name="verify_password"
              value={formik.values.verify_password}
              onChange={formik.handleChange}
              placeholder="Verify new password"
              icon={EyeSlash}
              isClickableIcon
              onClickIcon={() => handleShowPassword("verify_password")}
            />
          </div>
        </>
      }
    />
  );
};

export default NewPasswordForm;
