import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import CodeEditor from "./components/CodeEditor";
import OutputDisplay from "./components/OutputDisplay.js";
import LanguageSelector from "./components/LanguageSelector";

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
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor script={script} setScript={setScript} />
      <button onClick={handleSubmit}>Run</button>
      <OutputDisplay output={output} />
    </div>
  );
}

export default App;
