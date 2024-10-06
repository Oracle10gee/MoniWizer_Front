import { CheckboxType } from "./types";

const Checkbox = ({ id, onChange, checked, label }: CheckboxType) => {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="checkbox"
        className="w-6 h-6  border-[1.5px] border-[#D0D5DD] rounded cursor-pointer appearance-none checked:bg-[#D0D5DD]"
        id={id}
        name={id}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id} className="font-medium text-sm text-[#101928]">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
