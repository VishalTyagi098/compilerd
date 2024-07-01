import React from "react";

function Result({ output }) {
  return (
    <div className="output-display">
      <h3>Output:</h3>
      <pre>{output}</pre>
    </div>
  );
}

export default Result;
