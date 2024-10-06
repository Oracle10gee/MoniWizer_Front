import { GrayLogo, TimesIcon } from "assets/icons/svgs";
import React from "react";

interface Prop {
  onCancel: () => void;
}

const PayOffModal = ({ onCancel }: Prop) => {
  return (
    <div>
      <div className="border-b  p-5 grid place-items-center">
        <img src={GrayLogo} alt="logo" />
        <img
          src={TimesIcon}
          alt="cancel"
          className="absolute right-0 mr-6 cursor-pointer"
          onClick={onCancel}
        />
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};

export default PayOffModal;
