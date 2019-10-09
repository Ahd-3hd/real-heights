import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FeautresWrapper } from "./App.style";

function App() {
  const [lang, setLang] = useState(true);

  const switchLang = () => {
    setLang(!lang);
  };
  return (
    <Router className="App">
      <Navbar language={lang} switchLang={switchLang} />

      <Switch>
        <Route path="/">
          <Header language={lang} />
          <FeautresWrapper>
            <Features language={lang} />
          </FeautresWrapper>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
