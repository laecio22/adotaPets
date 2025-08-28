import { IPet } from "../../types/IPet"

const CardAnimal = (pet:IPet) => {
  
  return (
    <div className="h-[350px] w-[30%] bg-amber-900 ">
      <img src={pet.imagem} alt={pet.nome} className="h-48 w-full object-cover"/>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{pet.nome}</h2>
        <p className="text-gray-700 mb-1"><strong>Tipo:</strong> {pet.tipo}</p>
        <p className="text-gray-700 mb-1"><strong>Idade:</strong> {pet.idade}</p>
        <p className="text-gray-700 mb-1"><strong>Sexo:</strong> {pet.sexo}</p>
        <p className="text-gray-700 mb-1"><strong>Tamanho:</strong> {pet.tamanho}</p>
        <p className="text-gray-700 mb-1"><strong>Peso:</strong> {pet.peso}</p>
        <p className="text-gray-700 mb-1"><strong>Descrição:</strong> {pet.descricao}</p>
        <p className="text-gray-700 mb-1"><strong>Dias para adoção:</strong> {pet.quantidade_dias_adocao}</p>
        <p className={`font-bold ${pet.adotado ? 'text-red-500' : 'text-green-500'}`}>
          {pet.adotado ? 'Adotado' : 'Disponível para adoção'}
        </p>
      </div>
    </div>
  )
}

export default CardAnimal