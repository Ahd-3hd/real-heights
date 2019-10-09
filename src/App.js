import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [lang, setLang] = useState(true);
  return (
    <div className="App">
      <Header language={lang} />
      <button onClick={() => setLang(!lang)}>Click</button>
    </div>
  );
}

export default App;
