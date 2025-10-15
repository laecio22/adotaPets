import { InputProps } from "../../types/InputProps"

const Input = ({type, name,  placeholder, width="w-1/2", height="h-16", id}: InputProps) => {
  return (
     <input type={type} placeholder={placeholder}  name= {name} id={id} className={
      `border border-slate-300 rounded-md outline-offset-0 outline-blue-500 focus:outline-2 
     px-4 py-1 ${width} ${height} placeholder:text-cyan-800`
     }/>
  )
}

export default Input