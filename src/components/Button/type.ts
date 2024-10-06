import { PlusIcon } from "assets/icons/svgs";
export interface ButtonType {
  disabled?: boolean;
  btnType?: "submit" | "reset" | "button";
  onClick?: () => void;
  label: string;
  className?: string;
  showPlusIcon?: boolean;
}
