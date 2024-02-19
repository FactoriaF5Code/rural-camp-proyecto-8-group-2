import addButton from "../../assets/add_boton.svg";
import "./AddButton.css";
import { useState } from "react";
import AddModal from "../AddModal/AddModal";

export const AddButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  
  return (
    <section className="contenedoraddModal" onClick={openModal}>
      <img className="addButton" src={addButton} alt="botonAdd" />
      {modalVisible && <AddModal onClose={closeModal} />}
    </section>
  );
};
