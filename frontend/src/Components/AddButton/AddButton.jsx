import addButton from "../../assets/add_boton.svg";
import "./AddButton.css";
import { useState } from "react";
import AddModal from "../AddModal/AddModal";
import { useFetch } from "../../useFetch";

export const AddButton = () => {
  const {data, setNeedsReload} = useFetch();
  const [modalVisible, setModalVisible] = useState(false);
  
  const openModal = () => {
    setModalVisible(true);
    console.log("el modal debe verse");
  };

  const closeModal = () => {
    setModalVisible(false);
    console.log("el modal debe cerrarse");
  };

  return (
    <section className="contenedoraddModal" >
      <img className="addButton" src={addButton} alt="botonAdd" onClick={openModal}/>
      {modalVisible && <AddModal onClose={closeModal} />}
    </section>
  );
};
