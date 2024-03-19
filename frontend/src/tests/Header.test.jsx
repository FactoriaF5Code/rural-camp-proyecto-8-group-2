import { fireEvent, render, screen } from "@testing-library/react";
import { test, createMockFunction } from "vitest";
import { Header } from "../Components/Header/Header";

test("El panel no muestra el título", () => {
  render(<Header />);

  expect(screen.queryByText("Hola!")).not.toBeInTheDocument();
});

test("Funciona el input", () => {
  const inputElement = screen.getByPlaceholderText("Buscar...");
  fireEvent.change(inputElement, { target: { value: "Harry Potter" } });
  expect(inputElement.value).toBe("Harry Potter");
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
