import { ReactNode } from "react";

export interface AuthType {
  btnLabel: string;
  className?: string;
  loading: boolean;
  header: string;
  description: string;
  formComponent: ReactNode;
  bottomComponent?: ReactNode;
  onButtonClick: () => void;
}

export interface AuthBgType {
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
}

export interface AuthMsgType {
  loading: boolean;
  success: boolean;
  error?: boolean;
  onVerify: () => void;
  img: string;
  overlayIcon?: boolean;
  header: string;
  pClassName?: string;
  hClassName?: string;
  message: string | ReactNode;
  btnLabel: string;
  overlayImg?: string;
}
