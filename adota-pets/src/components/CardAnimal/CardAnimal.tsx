import { IPet } from "../../types/IPet";
import Button from "../../ui/Button/Button";

const CardAnimal = (pet: IPet) => {
  return (
    <div className="h-[400px] w-[360px] bg-gray-100 rounded-b-xl ">
      <img
        src={pet.imagem}
        alt={pet.nome}
        className="h-[250px] w-full object-cover border border-none rounded-t-xl "
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-3xl font-bold mb-2  text-black">{pet.nome}</h2>
        <div>
          <span className="text-gray-400 mb-1"> {pet.tipo} .</span>
          <span className="text-gray-400 mb-1"> {pet.idade} Anos .</span>
          <span className="text-gray-400 mb-1"> {pet.sexo}</span>
        </div>
        <div  className="mt-4 flex justify-between gap-3 ">
          {/* <Button width=" w-40" height="h-20" backgroundColor="bg-blue-400"
          hoverColor="hover:bg-blue-500"
          outLineColor="outline-blue-500">Adotar</Button> */}
          <Button width=" w-50" height="h-20" backgroundColor="bg-zinc-400"
          hoverColor="hover:bg-zinc-500"
          outLineColor="outline-zinc-500"
          >Detalhes</Button>
             <Button width=" w-40" height="h-20" 
          >Editar</Button>
             <Button width=" w-40" height="h-20" backgroundColor="bg-red-400"
          hoverColor="hover:bg-red-600"
          outLineColor="outline-red-600"
          >Excluir</Button>
        </div>
        {/* <p className="text-gray-700 mb-1"><strong>Tipo:</strong> {pet.tipo}</p>
        <p className="text-gray-700 mb-1"><strong>Idade:</strong> {pet.idade}</p>
        <p className="text-gray-700 mb-1"><strong>Sexo:</strong> {pet.sexo}</p>
        <p className="text-gray-700 mb-1"><strong>Tamanho:</strong> {pet.tamanho}</p>
        <p className="text-gray-700 mb-1"><strong>Peso:</strong> {pet.peso}</p>
        <p className="text-gray-700 mb-1"><strong>Descrição:</strong> {pet.descricao}</p>
        <p className="text-gray-700 mb-1"><strong>Dias para adoção:</strong> {pet.quantidade_dias_adocao}</p>
        <p className={`font-bold ${pet.adotado ? 'text-red-500' : 'text-green-500'}`}>
          {pet.adotado ? 'Adotado' : 'Disponível para adoção'}
        </p> */}
      </div>
    </div>
  );
};

export default CardAnimal;
