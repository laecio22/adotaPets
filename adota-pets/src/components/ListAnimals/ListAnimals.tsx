import Button from "../../ui/Button/Button"
import Input from "../../ui/Input/Input"
const ListAnimals = () => {
  return (
    <section className="max-w-[1200px]  mx-auto">
      <h1 className="font-semibold text-4xl">Listagem  de Animais</h1>
      <div className="mt-4 flex">
        <Input/>
        <Button>Adicionar</Button>
      </div>

    </section>
  )
}

export default ListAnimals