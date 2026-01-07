import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Label from "../../ui/Label/Label";
import Select from "../../ui/Select/Select";
import { AnimalContext } from "../../contexts/AnimalContext";

const RegisterAnimal = () => {
  const navigate = useNavigate();
  const { setListPets } = useContext(AnimalContext);

  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    idade: "",
    sexo: "",
    tamanho: "",
    peso: "",
    imagem: "",
    descricao: "",
    situacao: "",
    diasAdocao: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type } = e.target;
    const val = type === "file" ? e.target.files?.[0] ?? null : value;
    setForm((s) => ({ ...s, [name]: val }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newPet = {
      id: String(Date.now()),
      nome: form.nome,
      tipo: form.tipo,
      idade: form.idade,
      sexo: form.sexo,
      tamanho: form.tamanho,
      peso: form.peso,
      imagem:
        typeof form.imagem === "string" || !form.imagem
          ? form.imagem
          : URL.createObjectURL(form.imagem),
      descricao: form.descricao,
      situacao: form.situacao,
      diasAdocao: form.diasAdocao,
    };

    if (setListPets) setListPets((prev: any) => [...prev, newPet]);
    navigate("/listarAnimais");
  };

  return (
    <main className="max-w-[1200px] mx-auto">
      <header className="bg-white px-8 py-12 border border-indigo-200 rounded-xl mx-5">
        <h1 className="font-semibold text-4xl text-black">
          Cadastro de Animal
        </h1>
      </header>
      <section className="bg-white border border-indigo-200 rounded-xl min-h-[400px] mt-8 mx-5 p-8">
        <form
          className="grid grid-cols-12 gap-y-6 gap-x-4 items-center"
          onSubmit={handleSubmit}
        >
          <div className="col-span-1">
            <Label forInput="nome" value="Nome" />
          </div>
          <div className="col-span-11">
            <Input
              type="text"
              name="nome"
              placeholder="Informe  o nome  do animal"
              id="nome"
              width="w-full"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-1">
            <Label forInput="tipo" value="Tipo" />
          </div>
          <div className="col-span-11">
            <Input
              type="text"
              name="tipo"
              placeholder="Informe  o tipo da  espécie  do animal"
              id="tipo"
              width="w-full"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-1">
            <Label forInput="idade" value="Idade" />
          </div>
          <div className="col-span-11">
            <Input
              type="number"
              name="idade"
              placeholder="Informe  a  idade  do animal"
              id="idade"
              width="w-full"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-1">
            <p>Sexo:</p>
          </div>
          <div className="col-span-11 flex items-center gap-4">
            <Label forInput="femea" value="Femêa" />
            <Input
              type="radio"
              name="sexo"
              id="femea"
              value="femea"
              onChange={handleChange as any}
            />
            <Label forInput="macho" value="Macho" />
            <Input
              type="radio"
              name="sexo"
              id="macho"
              value="macho"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-1">
            <Label forInput="tamanho" value="Tamanho" />
          </div>
          <div className="col-span-11">
            <Select
              name="tamanho"
              id="tamanho"
              width="w-full"
              onChange={handleChange as any}
            >
              <option value="" disabled>
                Selecione o tamanho do animal
              </option>
              <option value="pequeno">Pequeno</option>
              <option value="medio">Médio</option>
              <option value="grande">Grande</option>
            </Select>
          </div>

          <div className="col-span-1">
            <Label forInput="peso" value="Peso" />
          </div>
          <div className="col-span-11">
            <Input
              type="text"
              name="peso"
              placeholder="Informe o peso do  animal"
              id="peso"
              width="w-full"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-1">
            <Label forInput="imagem" value="Imagem" />
          </div>
          <div className="col-span-11">
            <Input
              type="file"
              id="imagem"
              name="imagem"
              accept="image/png, image/jpeg"
              width="w-full"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-1">
            <Label forInput="descricao" value="Descrição" />
          </div>
          <div className="col-span-11">
            <textarea
              name="descricao"
              id="descricao"
              className="w-full h-40 border border-slate-300 rounded-md p-2"
              onChange={handleChange as any}
            ></textarea>
          </div>

          <div className="col-span-1">
            <Label forInput="situacao" value="Situação" />
          </div>
          <div className="col-span-11">
            <Select
              name="situacao"
              id="situacao"
              width="w-full"
              onChange={handleChange as any}
            >
              <option value="" disabled>
                Selecione a situação atual do animal
              </option>
              <option value="adotado">Adotado</option>
              <option value="aguardando">Aguardando adoção</option>
              <option value="temporario">Lar temporário</option>
            </Select>
          </div>

          <div className="col-span-1">
            <Label forInput="diasAdocao" value="Dias para doação " />
          </div>
          <div className="col-span-11">
            <Input
              type="number"
              id="diasAdocao"
              name="diasAdocao"
              width="w-full"
               placeholder="Quantidade  de dias  para  adoção"
              onChange={handleChange as any}
            />
          </div>

          <div className="col-span-12 flex justify-end">
            <Button width="w-56" height="h-16">
              Salvar
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default RegisterAnimal;
