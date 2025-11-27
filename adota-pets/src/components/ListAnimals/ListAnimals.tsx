import { useContext, useState } from "react";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import CardAnimal from "../CardAnimal/CardAnimal";
import { IoAdd } from "react-icons/io5";
import { AnimalContext } from "../../contexts/AnimalContext";
import { IPet } from "../../types/IPet";
import Modal from "../Modals/Modal";
import Label from "../../ui/Label/Label";
import Select from "../../ui/Select/Select";

const ListAnimals = () => {
  const { listPets }: { listPets: IPet[] } = useContext(AnimalContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModalAnimal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className="max-w-[1200px] mx-auto">
      <Modal open={isOpenModal} setOpen={setIsOpenModal}>
        <header className="mb-8">
          <h2 className="text-4xl font-bold text-center ">
            Cadastro de Animal
          </h2>
        </header>
        <form className="flex flex-col gap-8">
          <div className="flex gap-4 items-center">
            <Label forInput="nome" value="Nome" />
            <Input
              type="text"
              name="nome"
              placeholder="Informe  o nome  do animal"
              id="nome"
              width="w-full"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label forInput="tipo" value="Tipo" />
            <Input
              type="text"
              name="tipo"
              placeholder="Informe  o tipo da  espécie  do animal"
              id="tipo"
              width="w-full"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label forInput="idade" value="Idade" />
            <Input
              type="number"
              name="idade"
              placeholder="Informe  a  idade  do animal"
              id="idade"
              width="w-full"
            />
          </div>
          <div className="flex gap-4 items-center">
            <p>Sexo:</p>
            <Label forInput="femea" value="Femêa" />
            <Input
              type="radio"
              name="sexo"
              id="femea"
              height="h-[25px]"
              width="w-[30px]"
            />

            <Label forInput="macho" value="Macho" />
            <Input
              type="radio"
              name="sexo"
              id="macho"
              height="h-[25px]"
              width="w-[30px]"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label forInput="tamanho" value="Tamanho" />
            <Select name="tamanho" id="tamanho"  width="w-full" >
                <option value="" disabled>
                {" "}
                Selecione o tamanho do animal
              </option>
              <option value="pequeno">Pequeno</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
             </Select>            
          </div>
          <div className="flex gap-4 items-center">
            <Label forInput="peso" value="Peso" />
            <Input
              type="text"
              name="peso"
              placeholder="Informe o peso do  animal"
              id="peso"
              width="w-full"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label forInput="imagem" value="Imagem" />
            <Input
              type="file"
              id="imagem"
              name="imagem"
              accept="image/png, image/jpeg"
              width="w-full"
            />
          </div>
          <div className="flex gap-4 items-center">
            <Label forInput="descricao" value="Descrição" />
             <textarea name="descricao" id="descricao" className="w-full h-40"></textarea>
          </div>
            <div className="flex gap-4 items-center">
            <Label forInput="situacao" value="Situação" />
            <Select name="adotado" id="situacao" width="w-full">
               <option value="" disabled>Selecione  a  situação atual do animal</option>
               <option value="adotado">Adotado</option>
               <option value="aguardando">Aguardando adoção</option>
               <option value="temporario">Lar temporário</option>
            </Select>
          </div>
            <div className="flex gap-4 items-center">
            <Label forInput="diasAdocao" value="Dias para doação " />
            <Input
              type="number"
              id="diasAdocao"
              name="quantidade_dias_adocao"              
              width="w-full"
            />
          </div>
        </form>
      </Modal>
      <header className="bg-white px-8 py-12 border border-indigo-200 rounded-xl mx-5">
        <h1 className="font-semibold text-4xl text-black">
          Listagem de Animais
        </h1>
        <nav
          className="mt-4 flex justify-between"
          aria-label="Ações de listagem"
        >
          <Input
            type="text"
            name="search"
            placeholder="Buscar  animal"
            id="search"
          />
          <Button
            width="sm:w-[150px] w-56"
            height="sm:h-18 h-16"
            onClick={openModalAnimal}
          >
            <IoAdd className="h-16 w-8 sm:w-10 sm:h-16" />
            Adicionar
          </Button>
        </nav>
      </header>
      <section className="bg-white border border-indigo-200 rounded-xl min-h-[400px] mt-20 mx-5 overflow-y-auto">
        <header className="px-8 py-12">
          <h2 className="font-semibold text-4xl text-black">
            Animais para Adoção
          </h2>
        </header>
        <section
          className="flex justify-between flex-wrap gap-y-12 px-8"
          aria-label="Lista de animais"
        >
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
