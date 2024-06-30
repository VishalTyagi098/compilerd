import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

function CodeEditor({ script, setScript }) {
  return (
    <div className="code-editor">
      <CodeMirror
        value={script}
        options={{
          mode: "javascript",
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setScript(value);
        }}
      />
    </div>
  );
}

export default CodeEditor;
