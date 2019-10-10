import React, { useState, useEffect } from "react";
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
import Airtable from "airtable";
const base = new Airtable({ apiKey: "keysCfEVasgvHuc5U" }).base(
  "appQMmdk9NHh7KQY1"
);
//keysCfEVasgvHuc5U

Airtable.configure({ apiKey: "keysCfEVasgvHuc5U" });
function App() {
  const [lang, setLang] = useState(true);
  const [products, setProducts] = useState([]);

  const switchLang = () => {
    setLang(!lang);
  };
  useEffect(() => {
    base("Furniture")
      .select({ view: "Grid View" })
      .eachPage((records, fetchNextPage) => {
        setProducts(records);
        // console.log(records[0].fields.Images[0].url);
        fetchNextPage();
      });
  }, []);
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
          <Gallery language={lang} products={products} />
          <FeautresWrapper style={{ top: 0, background: "#555555" }}>
            <Quotes language={lang} />
          </FeautresWrapper>
          <Packages language={lang} />
          <Map language={lang} />
        </Route>
        <Route exact path="/gallery">
          <GalleryPage language={lang} products={products} />
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
