import Button from "components/Button/Button";
import Spinner from "components/Loader/Loader";
import { AuthType } from "./types";
import {
  MoniWizrLogo,
  MoniWizrLogoName,
  MoniWizrWave,
  WizrDot,
} from "assets/icons/svgs";
import AuthTopNav from "./AuthTopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = ({
  loading,
  header,
  description,
  formComponent,
  bottomComponent,
  onButtonClick,
  className,
  btnLabel,
}: AuthType) => {
  return (
    <>
      {/* FOR MOBILE VIEW */}
      <AuthTopNav />
      {/* {loading ? (
        <Spinner />
      ) : (
        <form
          className={`lg:border relative rounded-[10px] w-[456px] m-auto border-[#DOD5DD] py-8 px-7 ${className}`}
          autoComplete="off"
        >
          <p className="font-poppins font-semibold text-[28px] leading-[33.6px] tracking-[-2%] text-[#101928] text-center">
            {header}
          </p>
          <p className="mt-2 text-center">{description}</p>
          {formComponent}

          <Button className={"mt-8"} label={btnLabel} onClick={onButtonClick} />
          {bottomComponent}
        </form>
      )} */}
      <form
          className={`lg:border relative rounded-[10px] w-[456px] m-auto border-[#DOD5DD] py-8 px-7 ${className}`}
          autoComplete="off"
        >
          <p className="font-poppins font-semibold text-[28px] leading-[33.6px] tracking-[-2%] text-[#101928] text-center">
            {header}
          </p>
          <p className="mt-2 text-center">{description}</p>
          {formComponent}

          <Button className={"mt-8"} label={loading ? "loading" : btnLabel} onClick={onButtonClick} />
          {bottomComponent}
        </form>
        <ToastContainer/>
    </>
  );
};

export default AuthForm;
