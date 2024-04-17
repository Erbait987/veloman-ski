import React from "react";

export const Modal = ({ onClose, children }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" onClick={onClose}></div>ы
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};
