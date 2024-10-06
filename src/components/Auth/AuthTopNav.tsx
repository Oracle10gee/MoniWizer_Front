import { MoniWizrLogoName, MoniWizrWave, WizrDot } from "assets/icons/svgs";

const AuthTopNav = () => {
  return (
    <div className="flex gap-3 items-center absolute top-0 p-5 bg-white w-full z-10 lg:hidden">
      <div className="flex gap-1 ">
        <img src={MoniWizrWave} alt="logo" className="w-[50px]" />
        <img src={WizrDot} alt="logo" />
      </div>
      <img src={MoniWizrLogoName} alt="logo label" className="w-[120px]" />
    </div>
  );
};
export default AuthTopNav;
