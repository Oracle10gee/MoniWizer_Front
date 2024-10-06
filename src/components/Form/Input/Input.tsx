import React from "react";

const Input = ({
  id,
  type,
  label,
  onChange,
  className,
  labelClass,
  placeholder,
  value,
  disabled,
}: {
  id: string;
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  labelClass?: string;
  placeholder: string;
  value: string | number;
  disabled?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`${labelClass} text-[#101928] font-poppins font-medium text-[14px]`}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`${className} outline-none border rounded-[6px] border-[#D0D5DD] p-4 w-full`}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
