import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Editor from "./components/Editor";
import Result from "./components/Result.js";
import Language from "./components/Language";

function App() {
  const [language, setLanguage] = useState("nodejs");
  const [script, setScript] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/execute/", {
        language,
        script,
      });
      setOutput(response.data.output);
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  return (
    <div className="App">
      <Language language={language} setLanguage={setLanguage} />
      <Editor script={script} setScript={setScript} />
      <button onClick={handleSubmit}>Run</button>
      <Result output={output} />
    </div>
  );
}

export default App;
