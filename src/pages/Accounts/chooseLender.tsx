import {
  AccessBankLogo,
  FirstBankLogo,
  GtBankLogo,
  RightAngleIcon,
  SearchIcon,
  StandardBankLogo,
  ZenithBankLogo,
} from "assets/icons/svgs";
import React from "react";

interface Prop {
  searchVal: string;
  onSearch: (e: string) => void;
}

// lenders options
const ChooseLender = ({ searchVal, onSearch }: Prop) => {
  const lenders = [
    {
      logo: ZenithBankLogo,
      bank: "Zenith Bank",
    },
    {
      logo: AccessBankLogo,
      bank: "Access Bank",
    },
    {
      logo: FirstBankLogo,
      bank: "First Bank",
    },
    {
      logo: GtBankLogo,
      bank: "GT Bank",
    },

    {
      logo: StandardBankLogo,
      bank: "Standard Chartered",
    },
    {
      logo: StandardBankLogo,
      bank: "Sterling Bank",
    },
    {
      logo: StandardBankLogo,
      bank: "Sterling Bank",
    },
  ];
  return (
    <div className="mx-10">
      <div className="flex justify-center m-10">
        <p className="text-[#011B33] font-poppins font-semibold text-2xl">
          Choose your lender
        </p>
      </div>
      <div className="relative grid place-items-center">
        <input
          type="text"
          value={searchVal}
          name="search"
          id="search"
          onChange={(e: any) => onSearch(e)}
          className="bg-[#F2F2F266] p-3 px-5 w-full rounded-[16px] outline-none border-0 placeholder:text-[#828282]"
          placeholder="Search for your lender"
        />
        <img src={SearchIcon} alt="search" className="absolute right-0 mr-6" />
      </div>
      <div className="mt-10 flex flex-col gap-10  h-[500px] overflow-auto">
        {lenders.map((chi, idx) => {
          const { logo, bank } = chi;
          return (
            <div
              className="group flex justify-between cursor-pointer mr-3 items-center"
              key={idx}
            >
              <div className="flex items-center gap-3">
                <img src={logo} alt={bank} />
                <p>{bank}</p>
              </div>
              <img
                src={RightAngleIcon}
                alt="right angle"
                className="group-hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseLender;
