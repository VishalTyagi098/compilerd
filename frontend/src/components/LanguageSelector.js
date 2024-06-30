import React from "react";

function LanguageSelector({ language, setLanguage }) {
  return (
    <div className="language-selector">
      <label htmlFor="language">Select Language:</label>
      <select
        id="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="nodejs">Node.js</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
