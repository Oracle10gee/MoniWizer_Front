import { YellowEnvelope } from "assets/images/svgs";
import { LgCheckIcon } from "../../assets/icons/svgs";
import AuthMessage from "components/Auth/AuthMessage";
import { useCheckResetMail } from "./hooks/useCheckResetMail";

const CheckResetMail = () => {
  const { handleCheckResetMail, loading, success, isPasswordResetSuccess } =
    useCheckResetMail();

  return (
    <AuthMessage
      success={success}
      loading={loading}
      onVerify={handleCheckResetMail}
      img={isPasswordResetSuccess ? LgCheckIcon : YellowEnvelope}
      header={
        isPasswordResetSuccess
          ? "Password Reset Successfully"
          : "Check your email"
      }
      hClassName={isPasswordResetSuccess ? "mt-24" : ""}
      message={
        isPasswordResetSuccess ? (
          <p className="leading-[22px]">
            Your password has been reset <br />
            successfully.
          </p>
        ) : (
          <p className="leading-[22px]">
            A password reset link has been sent <br />
            to your email address.
          </p>
        )
      }
      pClassName="w-[300px]"
      btnLabel={isPasswordResetSuccess ? "Continue to MoniWizr" : "Open Email"}
    />
  );
};

export default CheckResetMail;
