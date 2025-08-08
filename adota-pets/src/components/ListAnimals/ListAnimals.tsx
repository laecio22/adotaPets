import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import { IoAdd } from "react-icons/io5";

const ListAnimals = () => {
  return (
    <section className="max-w-[1200px]  mx-auto ">
      <header className="bg-white px-8 py-12 border border-indigo-200 rounded-xl">
        <h1 className="font-semibold text-4xl">Listagem de Animais</h1>
        <div className="mt-4 flex justify-between">
          <Input type="text" name="search" placeholder="Buscar  animal" />
          <Button width="w-[150px]" height="h-18">
            <IoAdd size={25} width={25} />
            Adicionar
          </Button>
        </div>
      </header>
      <section className="bg-white border border-indigo-200 rounded-xl mt-20   ">
        <header className=" px-8 py-12">
          <h1 className="font-semibold text-4xl">Animais para Adoção</h1>         
        </header>
      </section>
    </section>
  );
};

export default ListAnimals;
