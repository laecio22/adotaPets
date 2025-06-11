
const ListAnimals = () => {
  return (
    <section className="max-w-[1200px]  mx-auto">
      <h1 className="font-semibold text-4xl">Listagem  de Animais</h1>
      <div className="mt-4">
        <input type="text" placeholder="buscar animal" className="border-none focus:border-blue-500 "/>
        <button>Adicionar</button>
      </div>

    </section>
  )
}

export default ListAnimals