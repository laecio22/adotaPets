
interface ILabelProps {
    value: string
    forInput: string | undefined
}

const Label = ({value, forInput}: ILabelProps) => {
  return (
    <label htmlFor={forInput}>{value}:</label>
  )
}

export default Label