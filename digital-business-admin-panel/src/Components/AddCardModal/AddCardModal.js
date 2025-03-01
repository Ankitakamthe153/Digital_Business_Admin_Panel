import React, { useState } from "react";
import Modal from "react-modal";
import css from "./AddCardModal.module.css";

Modal.setAppElement("#root"); // Ensures accessibility compliance

const AddCardModal = ({ visible, onClose, handleCardAdd }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <Modal
      isOpen={visible}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          background: "rgb(58 58 58)",
          padding: "20px",
          width: "50%",
          maxWidth: "40rem",
          height: "fit-content",
          margin: "auto",
          borderRadius: "10px",
        },
      }}
    >
      <div className={css.container}>
        <div>
          <span className={css.label}>Card Title</span>
          <input
            type="text"
            className={css.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={css.inputGroup}>
          <span className={css.label}>Detail</span>
          <textarea
            rows={5}
            className={css.input}
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </div>
        <button
          className={css.saveButton}
          disabled={title.trim() === "" && detail.trim() === ""}
          onClick={() => {
            handleCardAdd(title, detail);
            setDetail("");
            setTitle("");
            onClose(); // Close the modal after adding
          }}
        >
          Add
        </button>
      </div>
    </Modal>
  );
};

export default AddCardModal;
