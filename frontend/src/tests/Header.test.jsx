import { fireEvent, render, screen } from "@testing-library/react";
import { test } from "vitest";
import { Header } from "../Components/Header/Header";

test("El panel no muestra el título", () => {
  render(<Header />);

  expect(screen.queryByText("Hola!")).not.toBeInTheDocument();
});

test("Funciona el input", () => {

  const handleSearchInput = jest.fn();

  render(<Header onSearch={handleSearchInput} />);

  const searchInput = screen.getByPlaceholderText("Buscar...");

  fireEvent.change(searchInput, { target: { value: "term" } });

  expect(handleSearchInput).toHaveBeenCalledWith("term");
});

//   test("handles search input correctly", () => {
//     // Definir una función simulada para pasar como prop

//     render(<Header />);

//     // Obtener el input de búsqueda
//     const searchInput = screen.getByPlaceholderText("Buscar...");

//     // Simular la entrada del usuario
//     fireEvent.change(searchInput, { target: { value: "term" } });

//     // Asegurarse de que la función onSearch se llama con el término de búsqueda
//     expect(handleSearch).toHaveBeenCalledWith("term");
//   });
// });

// Puedes agregar más pruebas según sea necesario
