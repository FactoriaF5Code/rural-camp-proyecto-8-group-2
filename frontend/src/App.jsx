import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "../src/Components/Home/Home";
import { DataProvider } from "./Components/DataContext/DataContext";


export const App = () => {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </DataProvider>
  ) 
}
