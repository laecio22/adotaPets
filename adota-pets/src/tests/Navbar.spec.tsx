import {render, screen} from "@testing-library/react"
import Navbar from "../components/Navbar/Navbar"

describe('Navbar', ()=>{
    it('Renderização  do componente  Navbar', ()=>{
       render(<Navbar/>)
       screen.getByText("Dashboard")
       
    })
})