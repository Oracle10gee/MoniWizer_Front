import { EyeSlash, MsgIcon } from "assets/icons/svgs";
import Field from "components/Form/Field";
import Checkbox from "components/Form/Checkbox";
import { useLoginForm } from "./useLoginForm";
import AuthForm from "components/Auth/AuthForm";


const LoginForm = () => {
  const {
    formik,
    showPassword,
    handleTogglePassword,
    loading,
    handleCreateAccountRoute,
    handleForgotPasswordRoute,
  } = useLoginForm();

  return (
    <AuthForm
      btnLabel="Log into Account"
      loading={loading}
      header="Log In"
      description="Enter your credentials to access your account"
      onButtonClick={formik.handleSubmit}
      formComponent={
        <>

          <div className="flex flex-col gap-6 mt-8">
            <Field
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="enter email"
              icon={MsgIcon}
            />
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="enter password"
              icon={EyeSlash}
              isClickableIcon
              onClickIcon={handleTogglePassword}
            />
          </div>

         
        </>
      }
      bottomComponent={
        <div className="mt-10 flex justify-center">
          <p className="text-[#98a2b3] text-xs tracking-[0.5%]">
            {"Are you new here?"}{" "}
            <span
              className="text-[#26bcfd] font-bold text-sm cursor-pointer"
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

export default LoginForm;



//  <div className="mt-8 flex justify-between items-center">
//             <Checkbox
//               id="remember_me"
//               checked={formik.values.remember_me}
//               onChange={formik.handleChange}
//               label="Remember me for 30 days"
//             />
//             <p
//               className="cursor-pointer text-[#cc400c] font-medium text-sm"
//               onClick={handleForgotPasswordRoute}
//             >
//               Forgot Password?
//             </p>
//           </div>