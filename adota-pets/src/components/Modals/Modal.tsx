import { ReactNode } from "react"

interface IModalProps  {
    children: ReactNode,
    open: boolean;
    setOpen:  React.Dispatch<React.SetStateAction<boolean>>
}
const Modal = ({children, open, setOpen}: IModalProps) => {
    if (!open) return null
  return (
    <div>
       <div>
        {children}
       </div>
    </div>
  
  )
}

export default Modal