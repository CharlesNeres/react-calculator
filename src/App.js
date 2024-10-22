import { useState } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("0");

  function addValue(e) {
    setResult((result) =>
      result === "0" ? e.target.textContent : result + e.target.textContent
    );
  }

  function calculate() {
    setResult(eval(result));
  }

  return (
    <div className="container">
      <div className="visor">{result}</div>
      <div className="container-c" onClick={addValue}>
        7
      </div>
      <div className="container-c" onClick={addValue}>
        8
      </div>
      <div className="container-c" onClick={addValue}>
        9
      </div>
      <div className="container-c" onClick={addValue}>
        -
      </div>
      <div className="container-c" onClick={addValue}>
        4
      </div>
      <div className="container-c" onClick={addValue}>
        5
      </div>
      <div className="container-c" onClick={addValue}>
        6
      </div>
      <div className="container-c" onClick={addValue}>
        *
      </div>
      <div className="container-c" onClick={addValue}>
        1
      </div>
      <div className="container-c" onClick={addValue}>
        2
      </div>
      <div className="container-c" onClick={addValue}>
        3
      </div>
      <div className="container-c" onClick={addValue}>
        /
      </div>
      <div className="container-c" onClick={addValue}>
        0
      </div>
      <div className="container-c" onClick={addValue}>
        .
      </div>
      <div className="container-c">AC</div>
      <div className="container-c" onClick={addValue}>
        +
      </div>
      <div className="container-c equal" onClick={calculate}>
        =
      </div>
    </div>
  );
}

export default App;
