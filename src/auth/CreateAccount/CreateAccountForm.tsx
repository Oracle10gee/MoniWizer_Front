import { CallIcon, EyeSlash, MsgIcon } from "assets/icons/svgs";
import Field from "components/Form/Field";
import Checkbox from "components/Form/Checkbox";
import { useCreateAccountForm } from "./useCreateAccountForm";
import AuthForm from "components/Auth/AuthForm";
import { ToastContainer } from "react-toastify";


const CreateAccountForm = () => {
  const {
    formik,
    handleShowPassword,
    loading,
    handleLoginRoute,
    password,
    confirmPassword,
  } = useCreateAccountForm();

  return (
    <AuthForm
      btnLabel="Create Account"
      loading={loading}
      header="Create Account"
      description="  Enter your details to start managing your money"
      onButtonClick={formik.handleSubmit}
      className="w-[500px] lg:border-0  h-screen overflow-y-auto customScrollbar mt-10 lg:mt-0 "
      formComponent={
        <>
    <ToastContainer/>
          <div className="flex flex-col gap-6 mt-8">
            <Field
              type="text"
              name="fullname"
              label="legal full name"
              isRequired
              value={formik.values.fullname}
              onChange={formik.handleChange}
              placeholder="enter legal full name"
            />

            <Field
              type="text"
              name="email"
              label="email address"
              isRequired
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="enter email address"
              icon={MsgIcon}
            />

            <Field
              type="text"
              name="phoneNumber"
              label="phone number"
              isRequired
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="enter phone number"
              icon={CallIcon}
            />

            <Field
              type={password ? "text" : "password"}
              name="password"
              label="Password"
              isRequired
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="enter password {alphanumeric}"
              icon={EyeSlash}
              isClickableIcon
              onClickIcon={() => handleShowPassword("password")}
            />

            <Field
              type={confirmPassword ? "text" : "password"}
              name="confirmPassword"
              label="confirm password"
              isRequired
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="enter password {alphanumeric}"
              icon={EyeSlash}
              isClickableIcon
              onClickIcon={() => handleShowPassword("confirmPassword")}
            />

            <Field
              type="text"
              name="referral"
              label="referral code"
              value={formik.values.referral}
              onChange={formik.handleChange}
              placeholder="(optional)"
            />
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Checkbox
              id="isAgreement"
              checked={formik.values.isAgreement}
              onChange={formik.handleChange}
              label={
                <div className="flex w-full">
                  <p className="text-xs text-[#828282]">
                    I have read and agree to MoniWizr's{" "}
                    <span className="text-[#26BCFD] underline cursor-pointer">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-[#26BCFD] underline cursor-pointer">
                      Privacy Policy.
                    </span>{" "}
                    <span className="text-[#CC400C]">*</span>
                  </p>
                </div>
              }
            />
          </div>
        </>
      }
      bottomComponent={
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between items-center gap-5">
            <span className="h-[1px] w-full bg-[#f0f2f5]"></span>
            <p className="text-[#667185] text-sm">Or</p>
            <span className="h-[1px] w-full bg-[#f0f2f5]"></span>
          </div>
          <div className=" flex justify-center">
            <p className="text-[#667185]  tracking-[0.5%]">
              Already have an account?{" "}
              <span
                className="text-[#26bcfd] font-bold cursor-pointer"
                onClick={handleLoginRoute}
              >
                Log In
              </span>
            </p>
          </div>
        </div>
      }
    />
  );
};

export default CreateAccountForm;
