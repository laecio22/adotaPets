import { InputProps } from "../../types/InputProps"

const Input = ({type, name,  placeholder}: InputProps) => {
  return (
     <input type={type} placeholder={placeholder}  name= {name} className="border border-slate-300 rounded-md outline-offset-0 outline-blue-500 focus:outline-2 
     px-4 py-1 w-1/2 h-16  "/>
  )
}

export default Input