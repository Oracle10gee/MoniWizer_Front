import { FadeLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="m-auto flex flex-col gap-3 items-center">
      <FadeLoader color="#011b33" />
      <p className="text-[#011b33] font-semibold text-[32px] mt-7">
        Loading...
      </p>
      <p className="mt-1 text-xl text-[#011b33]">
        This might take a few seconds.
      </p>
    </div>
  );
};
export default Spinner;
