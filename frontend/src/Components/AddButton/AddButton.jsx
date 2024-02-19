import "./AddButton.css";
import { useState } from "react";
import AddModal from "../AddModal/AddModal";
import { AddIcon } from "../../assets/AddIcon";

export const AddButton = () => {
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
    <section className="contenedoraddModal">
      <button className="addButton" onClick={openModal}>
        <AddIcon className="addIcon" />
      </button>
      {modalVisible && <AddModal onClose={closeModal} />}
    </section>
  );
};
