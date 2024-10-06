import { YellowEnvelope, YellowSuccessEnvelope } from "assets/images/svgs";
import { CheckIcon, ErrorIcon } from "../../assets/icons/svgs";
import { useVerifyEmail } from "./useVerifyEmail";
import AuthMessage from "components/Auth/AuthMessage";

const VerifyEmail = () => {
  const { handleVerify, loading, success, error } = useVerifyEmail();

  return (
    <AuthMessage
      success={success}
      error={error}
      loading={loading}
      onVerify={handleVerify}
      img={success || error ? YellowSuccessEnvelope : YellowEnvelope}
      overlayIcon={success || error}
      overlayImg={success ? CheckIcon : ErrorIcon}
      header={
        success
          ? "Confirmation successful"
          : error
          ? "Email not confirmed !"
          : "Check your email"
      }
      message={
        success
          ? "Your Email address has been successfully confirmed."
          : error
          ? "Confirm your email address to continue."
          : "A confirmation link has been sent to your email address."
      }
      btnLabel={
        success ? "Continue" : error ? "Restart Confirmation" : "Open Email"
      }
    />
  );
};

export default VerifyEmail;
