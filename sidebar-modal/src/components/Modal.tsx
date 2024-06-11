import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isMododalOpen, closeModal } = useGlobalContext();

  return (
    <div className={`${isMododalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}>
      <div className="modal-container">
        <h3>modal content</h3>
      </div>
      <button className="close-modal-btn" onClick={closeModal}>
        <FaTimes />
      </button>
    </div>
  );

}

export default Modal;