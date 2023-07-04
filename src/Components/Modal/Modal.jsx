import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/features/modalSlics";

function Modal({ message }) {
  const dispatch = useDispatch();

  return (
    <div className="contact_modal--container">
      <div
        className="contact__modal"
        // variants={modalVariant}
        // initial="hidden"
        // animate="visible"
      >
        <div className="contact__modal_text">
          <p className="font_20 font_black">{message}</p>
        </div>
        <button
          className="contact__modal--btn"
          onClick={() => dispatch(hideModal())}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default Modal;
