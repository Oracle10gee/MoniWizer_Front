import { AuthDisplay } from "components/Auth";
import ProfileSettingsForm from "./ProfileSettingsForm";

const ProfileSettings = () => {
  return (
    <AuthDisplay
      leftComponent={
        <div className="mt-40">
          <p className="text-[#F2F2F2] font-bold text-[40px] width-[369px]">
            Set up Your Profile
          </p>
          <p className="text-[#FFFFFF] font-normal text-[18px] mt-10 leading-[29.78px]">
            Provide Accurate information in order for us to determine the best{" "}
            <br />
            way to incorporate and manage your debts, Provide recommendations
            <br />
            and timely financial insights for you to be debt free
          </p>
        </div>
      }
        rightComponent={<ProfileSettingsForm />}
     
    />
  );
};

export default ProfileSettings;
