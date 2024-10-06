import { MoniWizrLogo } from "../../assets/icons/svgs";
import { AuthBgType } from "./types";

const AuthDisplay = ({ leftComponent, rightComponent }: AuthBgType) => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="bg-custom-gradient w-[45%] lg:flex hidden">
        <div className="m-auto">
          <div className="m-auto">
            <img src={MoniWizrLogo} alt="moniwizr logo" />
            {/* BACKGROUND DISPLAY */}
            {leftComponent}
          </div>
        </div>
      </div>
      {/* FORM DISPLAY */}
      <div className="w-[55%] m-auto">{rightComponent}</div>
    </div>
  );
};

export default AuthDisplay;
