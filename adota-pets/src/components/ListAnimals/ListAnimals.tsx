import { useContext } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import CardAnimal from "../CardAnimal/CardAnimal";
import { IoAdd } from "react-icons/io5";
import { AnimalContext } from "../../contexts/AnimalContext";
import { IPet } from "../../types/IPet";

const ListAnimals = () => {
  const { listPets }: { listPets: IPet[] } = useContext(AnimalContext);

  return (
    <main className="max-w-[1200px] mx-auto">
      <header className="bg-white px-8 py-12 border border-indigo-200 rounded-xl mx-5">
        <h1 className="font-semibold text-4xl text-black">Listagem de Animais</h1>
        <nav className="mt-4 flex justify-between" aria-label="Ações de listagem">
          <Input type="text" name="search" placeholder="Buscar  animal" />
          <Button width="sm:w-[150px] w-56" height="sm:h-18 h-16">
            <IoAdd className="h-16 w-8 sm:w-10 sm:h-16" />
            Adicionar
          </Button>
        </nav>
      </header>
      <section className="bg-white border border-indigo-200 rounded-xl min-h-[400px] mt-20 mx-5 overflow-y-auto">
        <header className="px-8 py-12">
          <h2 className="font-semibold text-4xl text-black">Animais para Adoção</h2>
        </header>
        <section className="flex justify-between flex-wrap gap-y-12 px-8" aria-label="Lista de animais">
          {listPets.length > 0 ? (
            listPets.map((pet) => (
              <article key={pet.id}>
                <CardAnimal {...pet} />
              </article>
            ))
          ) : (
            <p>Nenhum animal disponível para adoção no momento.</p>
          )}
        </section>
      </section>
    </main>
  );
};

export default ListAnimals;
