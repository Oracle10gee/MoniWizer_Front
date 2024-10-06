import Button from "components/Button/Button";
import Spinner from "components/Loader/Loader";
import { AuthMsgType } from "./types";
import AuthDisplay from "./Auth";
import AuthTopNav from "./AuthTopNav";

const AuthMessage = ({
  loading,
  success,
  error,
  onVerify,
  img,
  overlayIcon,
  overlayImg,
  header,
  message,
  btnLabel,
  pClassName,
  hClassName,
}: AuthMsgType) => {
  return (
    <>
      {/* FOR MOBILE VIEW */}
      <AuthTopNav />
      <AuthDisplay
        rightComponent={
          <>
            {" "}
            {loading ? (
              <Spinner />
            ) : (
              <div className="m-auto flex flex-col gap-3 w-[500px] items-center p-3 lg:p-0">
                <div className="relative">
                  <img
                    src={img}
                    alt="envelope"
                    className="translate-y-[10px]"
                  />
                  {overlayIcon ? (
                    <img
                      src={overlayImg}
                      alt="check"
                      className="absolute top-5 left-10"
                    />
                  ) : null}
                </div>
                <p
                  className={`text-[#011b33] font-semibold text-[32px] text-center lg:leading-0 leading-8 ${hClassName} ${
                    !success ? "mt-4" : ""
                  }`}
                >
                  {header}
                </p>
                <p
                  className={`text-[#011b33] text-xl text-center mt-3 leading-[22px] ${pClassName} ${
                    error ? "w-[300px]" : "w-[350px]"
                  } mb-10`}
                >
                  {message}
                </p>
                <Button label={btnLabel} onClick={onVerify} />
              </div>
            )}
          </>
        }
      />
    </>
  );
};

export default AuthMessage;
