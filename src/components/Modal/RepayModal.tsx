import React from "react";

interface RepaymentItem {
  id: number;
  payee: string;
  date: string;
  amount: string;
  percentage: string;
  interestRate: string;
  fundingSource: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  repaymentItem: RepaymentItem | null;
}

const RepayModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  repaymentItem,
}) => {
  if (!isOpen || !repaymentItem) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-2xl">
        <div className="flex justify-between">
          <div>
            {/* <h2 className="text-lg font-semibold">Repayment History Details</h2> */}
          </div>

          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.97639 1.13664C1.58587 0.746119 0.952705 0.746119 0.56218 1.13664C0.171656 1.52717 0.171656 2.16033 0.56218 2.55086L5.51193 7.5006L0.56218 12.4504C0.171656 12.8409 0.171656 13.474 0.56218 13.8646C0.952705 14.2551 1.58587 14.2551 1.97639 13.8646L6.92614 8.91482L11.8759 13.8646C12.2664 14.2551 12.8996 14.2551 13.2901 13.8646C13.6806 13.474 13.6806 12.8409 13.2901 12.4504L8.34035 7.5006L13.2901 2.55086C13.6806 2.16033 13.6806 1.52717 13.2901 1.13664C12.8996 0.746119 12.2664 0.746119 11.8759 1.13664L6.92614 6.08639L1.97639 1.13664Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
        <div className="mt-10">
          <div className="space-y-4">
            <div className="flex justify-between">
              <strong>Payee</strong>
              <span>{repaymentItem.payee}</span>
            </div>
            <div className="flex justify-between">
              <strong>Date</strong>
              <span>{repaymentItem.date}</span>
            </div>
            <div className="flex justify-between">
              <strong>Amount</strong>
              <span>{repaymentItem.amount}</span>
            </div>
            <div className="flex justify-between">
              <strong>Percentage</strong>
              <span className="text-green-600">{repaymentItem.percentage}</span>
            </div>
            <div className="flex justify-between">
              <strong>Interest Rate</strong>
              <span>{repaymentItem.interestRate}</span>
            </div>
            <div className="flex justify-between">
              <strong>Funding Source</strong>
              <span>{repaymentItem.fundingSource}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepayModal;
