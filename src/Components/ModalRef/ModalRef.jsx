import React from "react";

const ModalRef = React.forwardRef((_, modalRef) => {
  return (
    <div
      className="overlay hidden "
      ref={modalRef}
      onClick={evt => {
        if (evt.target.matches(".overlay")) {
          modalRef.current.classList.add("hidden");
        }
      }}
    >
      <div className="modal ">
        <button
          className="close-modal"
          onClick={() => modalRef.current.classList.add("hidden")}
        >
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
});

export default ModalRef;
