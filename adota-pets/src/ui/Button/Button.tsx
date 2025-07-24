import { ReactNode } from "react";
import { IoAdd } from "react-icons/io5";

interface IButtonProps {
  children: ReactNode;
  width?: string;
  height?: string;
}

const Button = ({ children, width, height }: IButtonProps) => {
  return (
    <button
      role="button"
      className={`${width} ${height} bg-green-500 cursor-pointer text-white rounded-md hover:bg-green-600
    outline-offset-0 outline-green-500 focus:outline-2
    
    `}
    >
      {children}
    </button>
  );
};

export default Button;
