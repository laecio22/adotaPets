interface CardAnimalProps {
  pet: {
    id: number;
    nome: string;       
    tipo: string;     
    idade: string;
    sexo: string;       
    tamanho: string;
    peso: string;
    imagem: string;
    descricao: string;
    adotado: boolean;
    quantidade_dias_adocao: number;
  }
} 

const CardAnimal = (pet:CardAnimalProps) => {
  return (
    <div className="h-[350px] w-[30%] bg-amber-900 ">
      <img src={pet.pet.imagem} alt={pet.pet.nome} className="h-48 w-full object-cover"/>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{pet.pet.nome}</h2>
        <p className="text-gray-700 mb-1"><strong>Tipo:</strong> {pet.pet.tipo}</p>
        <p className="text-gray-700 mb-1"><strong>Idade:</strong> {pet.pet.idade}</p>
        <p className="text-gray-700 mb-1"><strong>Sexo:</strong> {pet.pet.sexo}</p>
        <p className="text-gray-700 mb-1"><strong>Tamanho:</strong> {pet.pet.tamanho}</p>
        <p className="text-gray-700 mb-1"><strong>Peso:</strong> {pet.pet.peso}</p>
        <p className="text-gray-700 mb-1"><strong>Descrição:</strong> {pet.pet.descricao}</p>
        <p className="text-gray-700 mb-1"><strong>Dias para adoção:</strong> {pet.pet.quantidade_dias_adocao}</p>
        <p className={`font-bold ${pet.pet.adotado ? 'text-red-500' : 'text-green-500'}`}>
          {pet.pet.adotado ? 'Adotado' : 'Disponível para adoção'}
        </p>
      </div>
    </div>
  )
}

export default CardAnimal