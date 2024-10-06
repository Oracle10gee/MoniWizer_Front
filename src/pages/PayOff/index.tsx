import { useState, useEffect, useRef } from "react";
import Modal from "../../components/Modal/RepayModal";
import PaymentPlanModal from "../../components/Modal/PaymentPlan";

const Index = () => {
  const [debtName, setDebtName] = useState<string>("School");
  const [currentBalance, setCurrentBalance] = useState<string>("₦12000");
  const [minimumPayment, setMinimumPayment] = useState<number>(600);
  const [annualRate, setAnnualRate] = useState<number>(5.5);

  const [payoffBudget, setPayoffBudget] = useState<number>(1000);
  const [monthlyFund, setMonthlyFund] = useState<number>(400);
  const [startDate, setStartDate] = useState<string>("2024-07-05");
  const [frequency, setFrequency] = useState<string>("Weekly");
  const [fundingSource, setFundingSource] = useState<string>("FCMB");
  const [selectedPlan, setSelectedPlan] = useState<string>("Blanket");
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Manage modal visibility
  const [selectedItem, setSelectedItem] = useState<RepaymentItem | null>(null);
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState<Plan | null>(null);   // Selected Payment Plan

  const [isPaymentPlanModalOpen, setIsPaymentPlanModalOpen] = useState<boolean>(false); // State for Payment Plan Modal
  const menuRef = useRef<HTMLDivElement | null>(null);

  interface RepaymentItem {
    id: number;
    payee: string;
    date: string;
    amount: string;
    percentage: string;
    interestRate: string;
    fundingSource: string;
  }

  interface Plan {
    id: string;
    planName: string;
    dueDate: string;
    numberOfDebt: number;
    totalPrincipalInterest: string;
    totalInterest: string;
    percentagePaid: string;
    durationMonths: string;
    debtFreeDate: string;
    frequency: string;
    amount: string;
    fundingSource: string;
  }

  const rows = [
    {
      id: 1,
      payee: "Rukewe",
      date: "Feb 12, 2024",
      fundingSource: "FCMB",
      percentageValue: 74,
      percentage: "74%",
      percentageColor: "text-green-600",
      interestRate: "7%",
      amount: "₦911,000",
    },
    {
      id: 2,
      payee: "YouPay",
      date: "Feb 12, 2024",
      fundingSource: "Jaiz Bank",
      percentage: "14%",
      percentageValue: 14,
      percentageColor: "text-red-600",
      interestRate: "2.5%",
      amount: "₦21,000",
    },
    {
      id: 3,
      payee: "Eyowo",
      date: "Feb 12, 2024",
      fundingSource: "FCMB",
      percentage: "64%",
      percentageValue: 64,
      percentageColor: "text-green-600",
      interestRate: "4.5%",
      amount: "₦101,000",
    },
  ];
  const plans = [
    {
      id: "#0067",
      planName: "Payment Plan",
      dueDate: "13/03/2024",
      numberOfDebt: 3,
      totalPrincipalInterest: "₦63,761",
      totalInterest: "₦1,782",
      percentagePaid: "2.80%",
      durationMonths: "18",
      debtFreeDate: "Aug 2025",
      frequency: "Weekly",
      amount: "₦400",
      fundingSource: "FCMB",
    },
    {
      id: "#0066",
      planName: "Payment Plan",
      dueDate: "16/03/2024",
      numberOfDebt: 1,
      totalPrincipalInterest: "₦50,000",
      totalInterest: "₦1,500",
      percentagePaid: "3.00%",
      durationMonths: "12",
      debtFreeDate: "July 2025",
      frequency: "Monthly",
      amount: "₦500",
      fundingSource: "GTBank",
    },
    {
      id: "#0064",
      planName: "Payment Plan",
      dueDate: "11/05/2024",
      numberOfDebt: 5,
      totalPrincipalInterest: "₦70,000",
      totalInterest: "₦5,500",
      percentagePaid: "5.00%",
      durationMonths: "12",
      debtFreeDate: "November 2025",
      frequency: "Daily",
      amount: "₦700",
      fundingSource: "Polaris Bank",
    },
  ];

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  const toggleMenu = (id: any) => {
    setIsMenuOpen(isMenuOpen === id ? null : id); // Toggle menu visibility for the specific row
  };

  const handleView = (id: number) => {
    const selectedRow = rows.find((row) => row.id === id) || null;
    setSelectedItem(selectedRow); // Set the selected item
    setIsModalOpen(true); // Open the modal
    setIsMenuOpen(null); // Close the menu
  };

  const handleViewPlan = (id: any) => {
    const selectedRow = plans.find((plan) => plan.id === id) || null;
    setSelectedPaymentPlan(selectedRow); // Set the selected plan for the modal
    setIsPaymentPlanModalOpen(true); // Open Payment Plan modal
    setIsMenuOpen(null); // Close the action menu
  };

  const handleEdit = (id: any) => {
    alert(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id: any) => {
    alert(`Delete item with ID: ${id}`);
  };

  // Detect click outside of the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(null);
      }
    };

    // Add event listener when the menu is open
    if (isMenuOpen !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div>
      <div className="p-6">
        <h1 className="text-[#011B33] font-semibold text-[28px] font-poppins">
          Payoff
        </h1>
        <p className="text-[#828282] text-[14px] font-normal leading-[19.6px] mt-2 mb-4">
          Manage your payments below.
        </p>
        <div className="mt-7 pl-7">
          <div className="flex items-center mb-2">
            <h2 className="text-[#011B33] font-semibold text-[28px] leading-[33.6px] font-semibold font-poppins">
              Repayment History
            </h2>
          </div>
          <p className="text-[#828282] text-[14px] font-normal leading-[19.6px] mb-4">
            Table below shows your debt repayment history
          </p>
          <div className="flex mb-2">
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              S/N
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Payee
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Date
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Funding Source
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Percentage
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Interest Rate
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Amount
            </div>
            <div className="flex-1 text-center font-sarabun font-medium text-[20px] leading-[29px] text-[#011B33]">
              Actions
            </div>
          </div>
          <div className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.id}
                className="flex items-center justify-between bg-white py-5 rounded-lg border shadow hover:bg-gray-50 pr-20"
              >
                <div className="flex flex-1">
                  <div className="flex-1 text-center font-bold text-[20px] leading-[24px] text-[#011B33]">
                    {row.id}
                  </div>
                  <div className="flex-1 text-center font-medium text-[20px] leading-[29px] text-[#011B33]">
                    {row.payee}
                  </div>
                  <div className="flex-1 text-center font-medium text-[14px] leading-{24px] text-[#828282] mt-1">
                    {row.date}
                  </div>
                  <div className="flex-1 text-center font-medium text-[20px] leading-[29px] text-[#011B33]">
                    {row.fundingSource}
                  </div>
                  <div
                    className={`flex-1 text-center py-3 font-bold text-[20px] leading-[24px] ${
                      row.percentageValue > 50
                        ? "bg-[#E6FFE880] text-green-600"
                        : "bg-[#EB57571A] text-red-600"
                    } rounded-lg`}
                  >
                    {row.percentage}
                  </div>
                  <div className="flex-1 text-center bg-[#F0F2F5] font-bold text-[20px] leading-[24px] text-[#011B33] rounded-lg py-2 ml-3">
                    {row.interestRate}
                  </div>
                  <div className="flex-1 text-center font-medium text-[20px] leading-[29px] text-[#011B33] font-sarabun">
                    {row.amount}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-[#011B33] hover:text-gray-700"
                    onClick={() => toggleMenu(row.id)}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>

                  {isMenuOpen === row.id && (
                    <div
                      ref={menuRef}
                      className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10"
                    >
                      <button
                        onClick={() => handleView(row.id)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      >
                        View History
                      </button>
                      <button
                        onClick={() => handleEdit(row.id)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      >
                        Share History
                      </button>
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                      >
                        Download History
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Modal */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            repaymentItem={selectedItem}
          />
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-[#011B33] font-semibold text-[28px] font-poppins">
          Payment Plan
        </h1>
        <p className="text-[#828282] text-[14px] font-normal leading-[19.6px] mt-2 mb-4">
          Manage your payments below.
        </p>
        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex items-center justify-between bg-white p-4 border rounded-lg shadow hover:bg-gray-50"
            >
              <div className="flex items-center space-x-4 border-solid border-2 border-[#1019280D] ... pr-5 rounded-lg">
                <div className="p-2 bg-[#6FCF971A]-200 rounded-full">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="32"
                      height="32"
                      rx="8"
                      fill="#6FCF97"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M17.5 19.5V24.5C17.5 25.3284 18.1716 26 19 26H24C24.8284 26 25.5 25.3284 25.5 24.5V19.5C25.5 18.6716 24.8284 18 24 18H19C18.1716 18 17.5 18.6716 17.5 19.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M6.5 19.5L6.5 24.5C6.5 25.3284 7.17157 26 8 26H13C13.8284 26 14.5 25.3284 14.5 24.5V19.5C14.5 18.6716 13.8284 18 13 18H8C7.17157 18 6.5 18.6716 6.5 19.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M6.5 8.5L6.5 13.5C6.5 14.3284 7.17157 15 8 15H13C13.8284 15 14.5 14.3284 14.5 13.5V8.5C14.5 7.67157 13.8284 7 13 7L8 7C7.17157 7 6.5 7.67157 6.5 8.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M17.5 8.5V13.5C17.5 14.3284 18.1716 15 19 15H24C24.8284 15 25.5 14.3284 25.5 13.5V8.5C25.5 7.67157 24.8284 7 24 7L19 7C18.1716 7 17.5 7.67157 17.5 8.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M17.5 19.5V24.5C17.5 25.3284 18.1716 26 19 26H24C24.8284 26 25.5 25.3284 25.5 24.5V19.5C25.5 18.6716 24.8284 18 24 18H19C18.1716 18 17.5 18.6716 17.5 19.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M6.5 19.5L6.5 24.5C6.5 25.3284 7.17157 26 8 26H13C13.8284 26 14.5 25.3284 14.5 24.5V19.5C14.5 18.6716 13.8284 18 13 18H8C7.17157 18 6.5 18.6716 6.5 19.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M6.5 8.5L6.5 13.5C6.5 14.3284 7.17157 15 8 15H13C13.8284 15 14.5 14.3284 14.5 13.5V8.5C14.5 7.67157 13.8284 7 13 7L8 7C7.17157 7 6.5 7.67157 6.5 8.5Z"
                      fill="#011B33"
                    />
                    <path
                      d="M17.5 8.5V13.5C17.5 14.3284 18.1716 15 19 15H24C24.8284 15 25.5 14.3284 25.5 13.5V8.5C25.5 7.67157 24.8284 7 24 7L19 7C18.1716 7 17.5 7.67157 17.5 8.5Z"
                      fill="#011B33"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-normal text-[14px] leading-[20px] text-[#011B33]">
                    {plan.id} {plan.planName}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-10 border-solid border-2 border-[#1019280D] ... px-5 py-3 rounded-lg">
                <span className="font-poppins font-medium text-[14px] leading-[20px] text-[#011B33]">
                  Next Due Date
                </span>
                <span className="font-poppins font-medium text-[14px] leading-[20px] text-[#011B33]">
                  {plan.dueDate}
                </span>
              </div>
              <div className="flex items-center justify-between space-x-10 border-solid border-2 border-[#1019280D] ... px-5 py-3 rounded-lg">
                <span className="font-poppins font-medium text-[14px] leading-[20px] text-[#011B33]">
                  Number of Debt
                </span>
                <span className="font-poppins font-bold text-[14px] leading-[20px] text-[#011B33]">
                  {plan.numberOfDebt}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <button className="bg-[#011B33] text-white px-10 py-3 rounded-lg shadow hover:bg-blue-700 font-poppins">
                  Pay Off Now
                </button>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => toggleMenu(plan.id)}
                >
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3.5V5.62602C9.72523 6.07006 11 7.63616 11 9.5C11 11.3638 9.72523 12.9299 8 13.374V21.5C8 22.0523 7.55228 22.5 7 22.5C6.44772 22.5 6 22.0523 6 21.5L6 13.374C4.27477 12.9299 3 11.3638 3 9.5C3 7.63616 4.27477 6.07006 6 5.62602L6 3.5C6 2.94772 6.44772 2.5 7 2.5C7.55228 2.5 8 2.94772 8 3.5ZM5 9.5C5 8.39543 5.89543 7.5 7 7.5C8.10457 7.5 9 8.39543 9 9.5C9 10.6046 8.10457 11.5 7 11.5C5.89543 11.5 5 10.6046 5 9.5Z"
                      fill="#011B33"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 19.374V21.5C16 22.0523 16.4477 22.5 17 22.5C17.5523 22.5 18 22.0523 18 21.5V19.374C19.7252 18.9299 21 17.3638 21 15.5C21 13.6362 19.7252 12.0701 18 11.626V3.5C18 2.94772 17.5523 2.5 17 2.5C16.4477 2.5 16 2.94772 16 3.5V11.626C14.2748 12.0701 13 13.6362 13 15.5C13 17.3638 14.2748 18.9299 16 19.374ZM19 15.5C19 14.3954 18.1046 13.5 17 13.5C15.8954 13.5 15 14.3954 15 15.5C15 16.6046 15.8954 17.5 17 17.5C18.1046 17.5 19 16.6046 19 15.5Z"
                      fill="#011B33"
                    />
                  </svg>
                </button>
                {isMenuOpen === plan.id && (
                  <div
                    ref={menuRef}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-10"
                  >
                    <button
                      onClick={() => handleViewPlan(plan.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      View Plan
                    </button>
                    <button
                      onClick={() => handleEdit(plan.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Edit Plan
                    </button>
                    <button
                      onClick={() => handleDelete(plan.id)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    >
                      Delete Plan
                    </button>
                  </div>
                )}
              </div>
              <PaymentPlanModal
                isOpen={isPaymentPlanModalOpen}
                onClose={() => setIsPaymentPlanModalOpen(false)}
                plan={selectedPaymentPlan}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-[#011B33] font-semibold text-[28px] font-poppins">
          Debt Payment Plan
        </h1>
        <p className="text-[#828282] text-[14px] font-normal leading-[19.6px] mt-2 mb-4">
          Plan your payment
        </p>
        <div className="mt-20">
          <h2 className="text-[#4F4F4F] font-semibold text-[18px] leading-[21.6px] font-poppins mb-2">
            Add debt plan
          </h2>
          <div className="bg-white p-6 rounded-lg border shadow">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <span className="text-[14px] font-medium leading-[20.3px] font-inter text-[#011B33]">
                  Debt Name
                </span>
                <input
                  type="text"
                  value={debtName}
                  onChange={(e) => setDebtName(e.target.value)}
                  className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[14px] font-medium leading-[20.3px] font-inter text-[#011B33]">
                  Current Balance
                </span>
                <input
                  type="text"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(e.target.value)}
                  className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[14px] font-medium leading-[20.3px] font-inter text-[#011B33]">
                  Minimum Payment
                </span>
                <input
                  type="number"
                  value={minimumPayment}
                  onChange={(e) =>
                    setMinimumPayment(parseFloat(e.target.value))
                  }
                  className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[14px] font-medium leading-[20.3px] font-inter text-[#011B33]">
                  Annual Rate
                </span>
                <div className="relative mt-2">
                  <input
                    type="number"
                    step="0.1"
                    value={annualRate}
                    onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
                    className="font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2 font-poppins font-normal text-[14px] leading-[20px] text-gray-600">
                    %
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center ms-20 mt-6">
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5V11.5H9C8.44772 11.5 8 11.9477 8 12.5C8 13.0523 8.44772 13.5 9 13.5H11V15.5C11 16.0523 11.4477 16.5 12 16.5C12.5523 16.5 13 16.0523 13 15.5V13.5H15C15.5523 13.5 16 13.0523 16 12.5C16 11.9477 15.5523 11.5 15 11.5H13V9.5Z"
                    fill="#011B33"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5ZM4 12.5C4 8.08172 7.58172 4.5 12 4.5C16.4183 4.5 20 8.08172 20 12.5C20 16.9183 16.4183 20.5 12 20.5C7.58172 20.5 4 16.9183 4 12.5Z"
                    fill="#011B33"
                  />
                </svg>
                <span className="ms-3 font-medium text-[16px] leading-[23.2px] text-[#011B33] font-poppins">
                  Add Debt
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between mt-10">
          <div className="flex flex-col items-center">
            <span className="text-[#4F4F4F] font-semibold text-[18px] leading-[21.6px] font-poppins">
              Payoff Budget
            </span>
            <div className="relative mt-2 w-full max-w-sm">
              <div className="absolute left-3 top-3 text-gray-600 text-[32px] font-inter font-semibold leading-[38.4px]">
                ₦
              </div>
              <input
                type="number"
                value={payoffBudget}
                onChange={(e) => setPayoffBudget(parseFloat(e.target.value))}
                className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#4F4F4F] font-semibold text-[18px] leading-[21.6px] font-poppins">
              Monthly Fund
            </span>
            <div className="relative mt-2 w-full max-w-sm">
              <div className="absolute left-3 top-3 text-gray-600 text-[32px] font-inter font-semibold leading-[38.4px]">
                ₦
              </div>
              <input
                type="number"
                value={monthlyFund}
                onChange={(e) => setMonthlyFund(parseFloat(e.target.value))}
                className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#4F4F4F] font-semibold text-[18px] leading-[21.6px] font-poppins">
              Start Date
            </span>
            <div className="relative mt-2 w-full max-w-sm">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
              />
              {/* <FaCalendarAlt className="absolute ms-2 top-6 text-gray-600" /> */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#4F4F4F] font-semibold text-[18px] leading-[21.6px] font-poppins">
              Frequency
            </span>
            <div className="relative mt-2 w-full max-w-sm">
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
              >
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Quarterly">Quarterly</option>
              </select>
              {/* <AiFillCaretDown className="absolute right-3 top-3 text-gray-600" /> */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[#4F4F4F] font-semibold text-[18px] leading-[21.6px] font-poppins">
              Funding Source
            </span>
            <div className="relative mt-2 w-full max-w-sm">
              <select
                value={fundingSource}
                onChange={(e) => setFundingSource(e.target.value)}
                className="mt-2 font-poppins font-semibold text-[14px] leading-[20px] text-center bg-white border-solid border-2 border-[#1019280D] rounded-lg p-2"
              >
                <option value="FCMB">FCMB</option>
                <option value="GTBank">GTBank</option>
                <option value="Access Bank">Access Bank</option>
              </select>
              {/* <AiFillCaretDown className="absolute right-3 top-3 text-gray-600" /> */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className={`p-4 border mt-10 rounded-lg ${
              selectedPlan === "Blanket"
                ? "border-2 border-[#011B33]"
                : "border-gray-300"
            } hover:shadow-lg cursor-pointer`}
            onClick={() => handlePlanChange("Blanket")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-poppins leading-[28.8px] text-[#011B33] font-semibold">
                Blanket
              </h2>
              <input
                type="radio"
                checked={selectedPlan === "Blanket"}
                onChange={() => handlePlanChange("Blanket")}
              />
            </div>
            <p className="font-sarabun text-[14px] leading-[19.6px] font-normal text-[#828282]">
              The highest interest first
            </p>
            <div className="mt-4 text-[#4F4F4F]">
              <div className="flex justify-between">
                <span>Total principal & interest:</span>
                <span>₦63761</span>
              </div>
              <div className="flex justify-between">
                <span>Total interest:</span>
                <span>₦1782</span>
              </div>
              <div className="flex justify-between">
                <span>Percentage paid:</span>
                <span>2.80%</span>
              </div>
              <div className="flex justify-between">
                <span>Duration in months:</span>
                <span>18</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Debt free date:</span>
                <span>Aug 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Funding Source:</span>
                <span>FCMB</span>
              </div>
            </div>
          </div>
          <div
            className={`p-4 border mt-10 rounded-lg ${
              selectedPlan === "Typhoon"
                ? "border-2 border-[#011B33] hover:shadow-lg"
                : "border-gray-300"
            } hover:shadow-lg cursor-pointer`}
            onClick={() => handlePlanChange("Typhoon")}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-[24px] font-poppins leading-[28.8px] text-[#011B33] font-semibold">
                Typhoon
              </h2>
              <input
                type="radio"
                checked={selectedPlan === "Typhoon"}
                onChange={() => handlePlanChange("Typhoon")}
              />
            </div>
            <p className="font-sarabun text-[14px] leading-[19.6px] font-normal text-[#828282]">
              The highest balance first
            </p>
            <div className="mt-4 text-[#4F4F4F]">
              <div className="flex justify-between">
                <span>Total principal & interest:</span>
                <span>₦63761</span>
              </div>
              <div className="flex justify-between">
                <span>Total interest:</span>
                <span>₦1782</span>
              </div>
              <div className="flex justify-between">
                <span>Percentage paid:</span>
                <span>2.80%</span>
              </div>
              <div className="flex justify-between">
                <span>Duration in months:</span>
                <span>18</span>
              </div>
              <div className="flex justify-between">
                <span>Est. Debt free date:</span>
                <span>Aug 2025</span>
              </div>
              <div className="flex justify-between">
                <span>Funding Source:</span>
                <span>FCMB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button className="bg-[#011B33] text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 w-2/5 font-poppins">
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
