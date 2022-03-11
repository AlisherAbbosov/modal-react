import React from "react";

const ModalState = ({ state, setState }) => {
  return (
    <div
      className={`overlay  ${!state ? "hidden" : ""}`}
      onClick={evt => {
        if (evt.target.matches(".overlay")) {
          setState(false);
        }
      }}
    >
      <div className="modal">
        <button className="close-modal" onClick={() => setState(false)}>
          &times;
        </button>

        <h1>I'm a modal window 😍</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ModalState;
