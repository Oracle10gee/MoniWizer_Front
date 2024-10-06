import {
  DebtIcon,
  FlutterIcon,
  PolarisIcon,
  RateIcon,
  RepaidIcon,
  RightAngleIcon,
} from "assets/icons/svgs";
import Button from "components/Button/Button";
import BasicModal from "./debtLinkModal";
import DebitLinkModal from "./debtLinkModal";
import useDisclosure from "hooks/useDisclosure";
import DashboardModal from "components/Modal/Modal";

const Account = () => {
  const trackingDetails = [
    {
      icon: DebtIcon,
      label: "Total Debts Owed",
      amount: "₦ 415,823",
      percentage: "10",
      path: "",
    },
    {
      icon: RepaidIcon,
      label: "Total Debts Repaid",
      amount: "₦ 50,823",
      percentage: "70",
      path: "",
    },
  ];

  const lendersDetails = [
    {
      bankIcon: PolarisIcon,
      bankName: "Polaris",
      bankDescription: "Polaris Capital Money Market Fund",
      percent_paid: "20.00",
      interest_rate: "9.12",
    },
    {
      bankIcon: FlutterIcon,
      bankName: "FlutterWave",
      bankDescription: "Flutterwave SME Money Market",
      percent_paid: "50.50",
      interest_rate: "3.12",
    },
    {
      bankIcon: PolarisIcon,
      bankName: "Polaris",
      bankDescription: "Polaris Capital Money Market Fund",
      percent_paid: "20.00",
      interest_rate: "9.12",
    },
    {
      bankIcon: PolarisIcon,
      bankName: "Polaris",
      bankDescription: "Polaris Capital Money Market Fund",
      percent_paid: "20.00",
      interest_rate: "9.12",
    },
    {
      bankIcon: PolarisIcon,
      bankName: "Polaris",
      bankDescription: "Polaris Capital Money Market Fund",
      percent_paid: "20.00",
      interest_rate: "9.12",
    },
  ];

  const {
    isOpen: openDebitLinkModal,
    open: onOpenDebitLinkModal,
    close: closeDebitLinkModal,
  } = useDisclosure();

  const LinkDebitBtn = (
    <div className="border rounded-lg p-5 min-w-[352px] flex justify-center items-center h-[240px] ">
      <div className="flex justify-center">
        <Button
          label="Link Debt"
          onClick={onOpenDebitLinkModal}
          showPlusIcon
          className="w-[200px]"
        />
      </div>
    </div>
  );

  return (
    <div className="font-poppins">
      <p className="text-[#011B33] font-semibold text-[28px]">Accounts</p>
      <p className="text-[#828282] font-sarabun text-sm mt-1">
        Manage your accounts below.
      </p>
      <div className="mt-20">
        <p className="text-[#011B33] font-semibold text-[28px]">Overview</p>
        <p className="text-[#828282] font-sarabun text-sm mt-1">
          Track your progress
        </p>
        <div className="border flex rounded-lg mt-10 p-5 px-24 gap-10 items-center mr-28">
          {trackingDetails.map((chi, idx) => {
            const { icon, label, amount, percentage } = chi;
            return (
              <div key={idx} className="border rounded-lg  w-full ">
                <div className="p-5">
                  <div className="flex gap-2 items-center">
                    <img src={icon} alt={label} />
                    <p className="text-[#828282] font-inter font-medium text-sm">
                      {label}
                    </p>
                  </div>
                  <p className="text-[#011B33] font-semibold text-[32px] mt-10">
                    {amount}
                  </p>
                  <div className="flex gap-2 items-center mt-5">
                    <div className="flex gap-1 items-center bg-[#26BCFD1A] p-[2px] px-[5px] border-0 rounded-[12px]">
                      <img src={RateIcon} alt="rate" />
                      <p className="font-medium text-xs font-inter text-[#219653] ">{`${percentage}%`}</p>
                    </div>
                    <p className="text-[#98A2B3] font-medium text-sm font-sarabun">
                      Compared to last month
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 group overflow-hidden cursor-pointer border-t bg-[#F9FAFB]">
                  <p className="font-poppins font-semibold text-xs ">
                    View history
                  </p>
                  <img
                    src={RightAngleIcon}
                    alt="right angle"
                    className="group-hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <p className="text-[#011B33] font-semibold font-inter text-[16px]">
            Lenders
          </p>
          <p className="text-[#667185] text-xs font-inter font-normal mt-3 mb-4">
            This is the list of lenders you owe
          </p>

          <div className="flex gap-10 w-full overflow-auto customScrollbar">
            {LinkDebitBtn}
            {lendersDetails.map((chi, idx) => {
              const {
                bankIcon,
                bankName,
                bankDescription,
                percent_paid,
                interest_rate,
              } = chi;
              return (
                <div
                  key={idx}
                  className="border rounded-lg p-5 min-w-[352px] h-[240px]"
                >
                  <div className="flex items-center justify-between">
                    <img src={bankIcon} alt={bankName} />
                    <p className="text-[#011B33] font-semibold text-xs border p-1 rounded-[10px] px-3 cursor-pointer">
                      Pay One off
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="text-[#011B33] font-semibold text-[20px]">
                      {bankName}
                    </p>
                    <div className="flex cursor-pointer mt-2 justify-between group items-center ">
                      <p className="text-[#828282] font-medium text-xs font-sarabun">
                        {bankDescription}
                      </p>
                      <img
                        src={RightAngleIcon}
                        alt="right angle"
                        className="group-hover:translate-x-2 cursor-pointer transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div className="flex mt-6 justify-between items-center">
                      <p className="text-[#828282] font-medium text-xs">
                        Percentage Paid
                      </p>
                      <p className="text-[#011B33] font-semibold text-[16px]">{`${percent_paid}%`}</p>
                    </div>
                    <div className="flex justify-between items-center mt-5">
                      <p className="text-[#828282] font-semibold text-xs">
                        Interest Rate
                      </p>
                      <p className="text-[#828282] font-semibold text-sm ">{`${interest_rate}%`}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* debit link modal wrap  */}
        <DashboardModal open={openDebitLinkModal} onClose={closeDebitLinkModal}  width={"531px"}>
          <DebitLinkModal onCancel={closeDebitLinkModal} />
        </DashboardModal>
      </div>
    </div>
  );
};

export default Account;
