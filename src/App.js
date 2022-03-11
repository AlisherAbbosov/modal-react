import React from "react";
import "./App.css";
import ModalRef from "./Components/ModalRef/ModalRef";
import ModalState from "./Components/ModalState/ModalState";

function App() {
  const [state, setState] = React.useState(false);

  const modalRef = React.useRef("");

  return (
    <div className="App">
      <button className="show-modal" onClick={() => setState(true)}>
        Show modal with <span className="strong">useState</span>
      </button>

      <button
        className="show-modal"
        onClick={() => modalRef.current.classList.remove("hidden")}
      >
        Show modal with <span className="strong">useEffect</span>
      </button>

      <ModalRef ref={modalRef} />
      <ModalState state={state} setState={setState} />
    </div>
  );
}

export default App;
