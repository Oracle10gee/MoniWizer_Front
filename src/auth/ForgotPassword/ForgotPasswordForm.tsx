import { MsgIcon } from "assets/icons/svgs";
import Field from "components/Form/Field";
import AuthForm from "components/Auth/AuthForm";
import { useForgotPasswordForm } from "./hooks";

const ForgotPasswordForm = () => {
  const { formik, loading, handleCreateAccountRoute } = useForgotPasswordForm();

  return (
    <AuthForm
      btnLabel="Reset Password"
      loading={loading}
      header="Forgot Password"
      description="Enter your email address below for password reset link"
      onButtonClick={formik.handleSubmit}
      formComponent={
        <>
          <div className="mt-8">
            <Field
              label="EMAIL ADDRESS"
              type="text"
              name="email_address"
              value={formik.values.email_address}
              onChange={formik.handleChange}
              placeholder="enter email"
              icon={MsgIcon}
            />
          </div>
        </>
      }
      bottomComponent={
        <div className="mt-10 flex justify-center">
          <p className="text-[#828282] text-xs font-medium tracking-[0.5%]">
            {"Are you new here?"}{" "}
            <span
              className="text-[#EB5757] font-medium text-sm cursor-pointer"
              onClick={handleCreateAccountRoute}
            >
              {"Create Account"}
            </span>
          </p>
        </div>
      }
    />
  );
};

export default ForgotPasswordForm;
