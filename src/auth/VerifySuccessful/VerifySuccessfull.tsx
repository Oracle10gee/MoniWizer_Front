import { YellowSuccessEnvelope } from "assets/images/svgs";
import { CheckIcon } from "../../assets/icons/svgs";
import { useVerifySuccessfull } from "./useVerifySuccessfull";
import AuthMessage from "components/Auth/AuthMessage";

const VerifySuccessfull = () => {
  const { handleVerify, loading, success } = useVerifySuccessfull();

  return (
    <AuthMessage
      success={success}
      loading={loading}
      onVerify={handleVerify}
      img={YellowSuccessEnvelope}
      overlayIcon={true} 
      overlayImg={CheckIcon}
      header={"Confirmation successful"}
      message={
        "Your Email address has been successfully confirmed."
      }
      btnLabel={
        "Continue"
      }
    />
  );
};

export default VerifySuccessfull;
