import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FeautresWrapper } from "./App.style";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Quotes from "./components/Quotes";
import Packages from "./components/Packages";
import Map from "./components/Map";
import Footer from "./components/Footer";
import GalleryPage from "./components/GalleryPage";
import AboutUsPage from "./components/AboutUsPage";

function App() {
  const [lang, setLang] = useState(true);

  const switchLang = () => {
    setLang(!lang);
  };
  return (
    <Router className="App">
      <Navbar language={lang} switchLang={switchLang} />

      <Switch>
        <Route exact path="/">
          <Header language={lang} />
          <FeautresWrapper>
            <Features language={lang} />
            <Team language={lang} />
          </FeautresWrapper>
          <Gallery language={lang} />
          <FeautresWrapper style={{ top: 0, background: "#555555" }}>
            <Quotes language={lang} />
          </FeautresWrapper>
          <Packages language={lang} />
          <Map language={lang} />
        </Route>
        <Route exact path="/gallery">
          <GalleryPage language={lang} />
        </Route>
        <Route exact path="/about-us">
          <AboutUsPage language={lang} />
        </Route>
      </Switch>
      <Footer language={lang} />
    </Router>
  );
}

export default App;
