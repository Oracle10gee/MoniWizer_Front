import React, { useState } from "react";

const ProfileSettingsForm = () => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleProceed = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const renderButtons = (options: string[]) => {
    return options.map((option) => (
      <button
        key={option}
        onClick={() => handleOptionClick(option)}
        className={`p-20 border rounded-lg hover:scale-110 transition duration-200  ${
          selectedOption === option ? "bg-[#011B33] text-white" : "bg-white"
        }`}
      >
        {option}
      </button>
    ));
  };

  return (
    <div className="px-20">
      <div className="text-center mt-10">
        <p className="font-bold text-[#101928] text-[28px]">Profile</p>
        <p className="text-[16px] mt-3 text-[#667185] leading-[23.2px]">
          Introduce Yourself in 5 Clicks
        </p>
      </div>
      <div>
        {step === 1 && (
          <div>
            <div className="mt-10">
              <p className="w-[153px]">What do you do?</p>
              <p className="text-[12px] leading-[16.8px] text-[#828282]">
                This gives us a summary of who you are{" "}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="w-full px-20 py-10 space-y-4 bg-white rounded-lg shadow-md border">
                <div>
                  <div className="grid grid-cols-3 gap-8">
                    {renderButtons([
                      "Student",
                      "Private sector employee",
                      "Civil servant",
                      "Freelancer",
                      "Self-employed",
                      "Others",
                    ])}
                  </div>
                </div>
                {/* Add additional steps here */}
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="mt-10">
              <p>What do you want to do?</p>
              <p>This tells us how best to cater for your needs.</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="w-full px-20 py-10 space-y-4 bg-white rounded-lg shadow-md border">
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {renderButtons([
                      "Pay Off My Debts",
                      "Manage All My Debts",
                      "Track My Spendings",
                      "Save for a Goal",
                      "Financial Literacy",
                      "Others",
                    ])}
                  </div>
                </div>
                {/* Add additional steps here */}
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div className="mt-10">
              <p>How much do you earn?</p>
              <p>This helps us understand your financial standing</p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="w-full px-20 py-10 space-y-4 bg-white rounded-lg shadow-md border">
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {renderButtons([
                      "30-50k",
                      "51-80k",
                      "81-120k",
                      "121-150k",
                      "151-200k",
                      "Others",
                    ])}
                  </div>
                </div>
                {/* Add additional steps here */}
              </div>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div className="mt-10">
              <p>Reasons for Loans</p>
              <p>This will enable us calculate and determine how quickly you have to pay off debts. </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="w-full px-20 py-10 space-y-4 bg-white rounded-lg shadow-md border">
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {renderButtons([
                      "Family",
                      "Business",
                      "School",
                      "Vehicle",
                      "Emergency",
                      "Others",
                    ])}
                  </div>
                </div>
                {/* Add additional steps here */}
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div>
            <div className="mt-10">
              <p>Other Expenditures</p>
              <p>This will further tell us your spending habit and profer recommendations.  </p>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <div className="w-full px-20 py-10 space-y-4 bg-white rounded-lg shadow-md border">
                <div>
                  <div className="grid grid-cols-3 gap-4">
                    {renderButtons([
                      "Rent",
                      "Food",
                      "Utility Bills",
                      "Clothing and Accessories",
                      "Black Tax",
                      "Others",
                    ])}
                  </div>
                </div>
                {/* Add additional steps here */}
              </div>
            </div>
          </div>
        )}
        <div className="mt-20 mb-10 flex justify-center">
          <button
            onClick={handleProceed}
            className="w-3/4 p-3 px-4 bg-[#011B33] text-white rounded-lg"
          >
            Proceed
          </button>
        </div>

        <div className="flex justify-center">
          <div className="flex justify-between mt-4 w-3/4">
            <button
              onClick={handleBack}
              className={`p-2 px-4 bg-[#011B33] text-white rounded-lg ${
                step === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={step === 1}
            >
              Back
            </button>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => setStep(num)}
                  className={`px-5 rounded-lg ${
                    step === num ? "bg-white-500 text-dark border-2 border-blue-600" : "bg-gray-200"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <button
              onClick={handleProceed}
              className="p-2 px-4 bg-[#011B33] text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsForm;
