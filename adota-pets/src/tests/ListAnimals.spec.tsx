import { render, screen } from "@testing-library/react";
import ListAnimals from "../components/ListAnimals/ListAnimals";


describe('Componente Listagem de animais',()=> {
   it('renderização componente de listagem dos  animais', ()=> {
      render(<ListAnimals/>)
      const titlePage = screen.getByRole('heading', {level:1})     
     
      const buttonAdd = screen.getByRole('button')
   })
})