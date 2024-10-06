import { ReactNode } from "react";

export interface FieldType {
  label?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
  type: string;
  icon?: string;
  onClickIcon?: () => void;
  isRequired?: boolean;
  isClickableIcon?: boolean;
  className?: string;
  disabled?: boolean;
  parentClass?: string;
  labelClass?: string;
  leftIcon?: string;
}

export interface CheckboxType {
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  label: ReactNode;
}
