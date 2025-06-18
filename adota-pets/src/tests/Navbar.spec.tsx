import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

describe("Navbar", () => {
  it("Renderização do componente Navbar", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
   const LinkDashboard = screen.getByText("Dashboard");
   const LinkListAnimals = screen.getByText("Listagem de Animais");
   const LinkAdoptions = screen.getByText("Adoções");
   const LinkVolunteers = screen.getByText("Voluntários");
   const LinkEventos = screen.getByText("Eventos");
   const LinkSettings = screen.getByText("Configurações");
  });
});
