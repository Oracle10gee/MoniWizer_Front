import { FieldType } from "./types";

const Field = ({
  name,
  onChange,
  value,
  placeholder,
  icon,
  type,
  onClickIcon,
  label,
  isRequired,
  isClickableIcon,
  className,
  disabled,
  parentClass,
  labelClass,
  leftIcon,
}: FieldType) => {
  return (
    <div className="flex flex-col gap-1">
      {label ? (
        <label
          htmlFor={name}
          className={`capitalize flex gap-1 text-[#828282] font-medium text-sm ${labelClass}`}
        >
          {label}
          {isRequired ? <span className="text-[#CC400C]">*</span> : null}
        </label>
      ) : null}
      <div className={` relative grid place-items-center ${parentClass}`}>
        <input
          type={type}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={`placeholder-[#98A2B3] border border-[#D0D5DD] p-4 rounded-md  placeholder:capitalize font-normal  w-full outline-none appearance-none bg-transparent ${className}`}
          disabled={disabled}
        />
        {leftIcon ? (
          <img
            src={leftIcon}
            alt={`${name} icon`}
            className="absolute left-0 ml-[10px]"
          />
        ) : null}
        {icon ? (
          <img
            src={icon}
            alt={`${name} icon`}
            className={`absolute right-4 w-[20px] h-[20px] ${
              isClickableIcon ? "cursor-pointer" : ""
            } `}
            onClick={onClickIcon}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Field;
