import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Components/Header/Header";
import { describe } from "node:test";

describe("<Header/>", () => {
  test("renders Header component", () => {
    render(<Header />);
    const logoElement = screen.getByText(/Logo:/i);
    const buscarElement = screen.getByText(/buscar/i);

    // Asegurarse de que el componente se renderiza correctamente
    expect(logoElement).toBeInTheDocument();
    expect(buscarElement).toBeInTheDocument();
  });

  test("handles search input correctly", () => {
    // Definir una función simulada para pasar como prop
    

    render(<Header/>);

    // Obtener el input de búsqueda
    const searchInput = screen.getByPlaceholderText("Buscar...");

    // Simular la entrada del usuario
    fireEvent.change(searchInput, { target: { value: "term" } });

    // Asegurarse de que la función onSearch se llama con el término de búsqueda
    expect(handleSearch).toHaveBeenCalledWith("term");
  });
});

// Puedes agregar más pruebas según sea necesario
