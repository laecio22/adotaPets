import { ReactNode } from "react"

interface IButtonProps {
   children: ReactNode
   width?: string
   height?: string
}

const Button = ({children}:IButtonProps) => {
  return (
    <button>{children}</button>
  )
}

export default Button