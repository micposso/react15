import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context.tsx";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  console.log("from modal", isModalOpen);
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
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