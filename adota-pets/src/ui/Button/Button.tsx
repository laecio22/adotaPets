import { IButtonProps } from "../../types/IButtonProps";

const Button = ({ children, width, height,
  backgroundColor="bg-green-500", textColor="text-white", outLineColor="outline-green-500",
  hoverColor="hover:bg-green-600", onClick
 }: IButtonProps) => {
  return (
    <button
      role="button"
      className={`${width} ${height} ${backgroundColor} cursor-pointer ${textColor} rounded-md ${hoverColor}
    outline-offset-0 ${outLineColor} focus:outline-2
    flex justify-center items-center   
     text-xl sm:text-3xl
    `}
    onClick={onClick}
    >  
      {children}
    </button>
  );
};

export default Button;
