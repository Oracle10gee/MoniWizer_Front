import {
  BackIcon,
  BgMoniLogo,
  CalendarIcon,
  GrayLogo,
  LockIcon,
  TimesIcon,
} from "assets/icons/svgs";
import Button from "components/Button/Button";
import { useState } from "react";
import ChooseLender from "./chooseLender";

interface Prop {
  onCancel: () => void;
}

const details = [
  {
    title: "Privacy",
    content:
      "Your credentials are safe and will never be stored or   shared  without your consent.",
    icon: LockIcon,
  },
  {
    title: "Security",
    content:
      "Your information is encrypted using the most secured encryption in the industry (AES-256)",
    icon: CalendarIcon,
  },
];

const DebitLinkModal = ({ onCancel }: Prop) => {
  const [isLenderOption, setIsLenderOption] = useState(false);
  return (
    <div className="relative ">
      <div className="border-b  p-5 grid place-items-center">
        {isLenderOption ? (
          <img
            src={BackIcon}
            alt="back"
            className="absolute left-0 ml-6 cursor-pointer hover:-translate-x-2 transition-all duration-300 ease-in-out"
            onClick={() => setIsLenderOption(false)}
          />
        ) : null}
        <img src={GrayLogo} alt="logo" />
        <img
          src={TimesIcon}
          alt="cancel"
          className="absolute right-0 mr-6 cursor-pointer"
          onClick={onCancel}
        />
      </div>
      {!isLenderOption ? (
        <>
          <div className="flex flex-col gap-4 items-center mt-10">
            <img src={BgMoniLogo} alt="logo" onClick={onCancel} />
            <p className="text-center font-poppins font-medium text-xl">
              <span className="text-[#011B33] font-semibold text-2xl">
                Moniwizr
              </span>{" "}
              <span className="text-[#4F4F4F]">
                wants to link <br /> your debt.
              </span>
            </p>
          </div>
          <div className="border p-7 rounded-lg m-10 flex flex-col gap-5 px-7">
            {details.map((chi, idx) => {
              const { title, content, icon } = chi;
              return (
                <div key={idx} className="flex gap-4 items-center">
                  <img src={icon} alt={title} />
                  <div>
                    <p className="text-[#333333] ">
                      <span className="font-poppins font-semibold text-sm">{`${title}:`}</span>
                      <span className="font-normal">{` ${content}`}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Button
              label="Link Debt"
              onClick={() => setIsLenderOption(true)}
              className="mx-10 mt-5"
            />
          </div>
          <p className="m-10 text-[#828282] font-poppins font-medium text-xs leading-8 ">
            Click here to learn how Moniwizr keeps your data safe and secure.{" "}
            <br /> By clicking{" "}
            <span className="text-[#011B33]">‘Link debt’</span> You agree
            to Moniwizr’s{" "}
            <span className="text-[#26BCFD]">End-user Policy.</span>
          </p>
        </>
      ) : (
        <ChooseLender searchVal="" onSearch={() => {}} />
      )}
    </div>
  );
};

export default DebitLinkModal;
