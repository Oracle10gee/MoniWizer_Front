import { AuthDisplay } from "components/Auth";
import { WavyLine } from "../../assets/icons/svgs";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <AuthDisplay
      leftComponent={
        <div className="mt-14">
          <p className="text-[#F2F2F2] font-normal text-[19.31px]">
            Welcome back <span className="text-2xl font-bold">Wizr!</span>
          </p>
          <p className="text-[69.48px] w-[430px] font-bold leading-[74.45px] text-[#F2F2F2]">
            resume{" "}
            <span className="text-[#26BCFD] relative">
              <span className="font-poppins">Your</span>
              <img
                src={WavyLine}
                alt="wavy line"
                className="absolute left-[15px] bottom-[3px] "
              />
            </span>{" "}
            journey to be debt-free.
          </p>
        </div>
      }
      rightComponent={<LoginForm />}
    />
  );
};

export default Login;
