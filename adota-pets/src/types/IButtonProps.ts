import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  outLineColor?: string;
  hoverColor?: string;
  onClick?: () => void | undefined;
}
