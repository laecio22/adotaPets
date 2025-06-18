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
    screen.getByText("Dashboard");
    screen.getByText("Listagem de Animais");
    screen.getByText("Adoções");
    screen.getByText("Voluntários");
    screen.getByText("Eventos");
    screen.getByText("Configurações");
  });
});
