import { ReactNode } from "react";


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
    flex justify-center items-center   
     text-xl sm:text-3xl
    `}
    >  
      {children}
    </button>
  );
};

export default Button;
