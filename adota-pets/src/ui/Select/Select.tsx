import { ISelectProps } from "../../types/ISelectProps";

const Select = ({name, id, children, width="w-1/2", height="h-16"}: ISelectProps) => {
  return <select name={name} id={id}
  className={`${width} ${height} border border-slate-300 rounded-md outline-offset-0 outline-blue-500 focus:outline-2 
     px-4 py-1  `}>
    {children}
    </select>
}
export default Select;