import React from "react";

interface Plan {
  id: string;
  planName: string;
  totalPrincipalInterest: string;
  totalInterest: string;
  percentagePaid: string;
  durationMonths: string;
  debtFreeDate: string;
  frequency: string;
  amount: string;
  fundingSource: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const PaymentPlan: React.FC<ModalProps> = ({ isOpen, onClose, plan }) => {
  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-full max-w-xl">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold text-[#011B33] mb-2">
            Payment Plan {plan.id}
          </h2>
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
        <p className="text-[#828282] text-sm mb-4">
          This is a breakdown of your payment plan
        </p>
        <div className="space-y-2 mt-5">
          <div className="flex justify-between">
            <span>Total principal & interest:</span>
            <span>{plan.totalPrincipalInterest}</span>
          </div>
          <div className="flex justify-between">
            <span>Total interest:</span>
            <span>{plan.totalInterest}</span>
          </div>
          <div className="flex justify-between">
            <span>Percentage paid:</span>
            <span>{plan.percentagePaid}</span>
          </div>
          <div className="flex justify-between">
            <span>Duration in months:</span>
            <span>{plan.durationMonths}</span>
          </div>
          <div className="flex justify-between">
            <span>Est. Debt free date:</span>
            <span>{plan.debtFreeDate}</span>
          </div>
          <div className="flex justify-between">
            <span>Frequency:</span>
            <span>{plan.frequency}</span>
          </div>
          <div className="flex justify-between">
            <span>Amount:</span>
            <span>{plan.amount}</span>
          </div>
          <div className="flex justify-between">
            <span>Funding Source:</span>
            <span>{plan.fundingSource}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
