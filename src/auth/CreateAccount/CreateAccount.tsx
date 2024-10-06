import { AuthDisplay } from "components/Auth";
import { WavyLine } from "../../assets/icons/svgs";
import CreateAccountForm from "./CreateAccountForm";

const CreateAccount = () => {
  return (
    <AuthDisplay
      leftComponent={
        <div className="mt-14">
          <p className="text-[#F2F2F2] font-normal text-[19.31px]">
            The <span className="text-2xl font-bold">only app</span> you need to
          </p>
          <p className="text-[69.48px] w-[430px] font-bold leading-[74.45px] text-[#F2F2F2]">
            manage{" "}
            <span className="text-[#26BCFD] relative">
              <span className="font-poppins">ALL</span>
              <img
                src={WavyLine}
                alt="wavy line"
                className="absolute left-0 bottom-[3px] "
              />
            </span>{" "}
            your money
          </p>
        </div>
      }
      rightComponent={<CreateAccountForm />}
    ></AuthDisplay>
  );
};

export default CreateAccount;
