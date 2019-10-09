import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";
import { Wrapper, SideBar } from "./Navbar.style";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";
import { Button } from "@material-ui/core";

const Navbar = props => {
  const [navbarColors, setColor] = useState("none");
  const [navbarButtonsColors, setNavbarButtonsColors] = useState("white");
  const [sideBarLeft, setSideBarLeft] = useState(false);

  useEffect(() => {
    const changeNavColors = () => {
      if (window.pageYOffset >= 200) {
        setColor("white");
        setNavbarButtonsColors("#555555");
      } else {
        setColor("none");
        setNavbarButtonsColors("white");
      }
    };
    window.addEventListener("scroll", changeNavColors);
    return () => window.removeEventListener("scroll", changeNavColors);
  });
  return (
    <Wrapper colors={navbarColors} buttonColors={navbarButtonsColors}>
      <Link
        to="/"
        className="nav-buttons"
        style={{ alignSelf: "center", textDecoration: "none" }}
      >
        Turkish Heights
      </Link>
      <Link to="/" className="nav-buttons" style={{ alignSelf: "center" }}>
        <HomeIcon />
      </Link>
      <Link
        to="/gallery"
        className="nav-buttons"
        style={{ alignSelf: "center" }}
      >
        <PhotoLibraryIcon />
      </Link>
      <Link
        to="/about-us"
        className="nav-buttons"
        style={{ alignSelf: "center" }}
      >
        <InfoIcon />
      </Link>
      <Link
        style={{ alignSelf: "center" }}
        to="#"
        className="nav-buttons"
        onClick={() => setSideBarLeft(!sideBarLeft)}
      >
        <MenuIcon />
      </Link>
      <SideBar sideBarLeft={sideBarLeft}>
        <ul>
          <li>
            <Link
              to="/"
              className="nav-buttons"
              style={{ textDecoration: "none" }}
            >
              Turkish Heights
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-buttons"
              style={{ textDecoration: "none" }}
            >
              <HomeIcon style={{ padding: "0 1rem" }} />
              {props.language ? "Home" : "الرئيسية"}
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="nav-buttons"
              style={{ textDecoration: "none" }}
            >
              <PhotoLibraryIcon style={{ padding: "0 1rem" }} />
              {props.language ? "Gallery" : "الجاليري"}
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="nav-buttons"
              style={{ textDecoration: "none" }}
            >
              <InfoIcon style={{ padding: "0 1rem" }} />
              {props.language ? "About Us" : "حولنا"}
            </Link>
          </li>
          <li>
            <Button
              onClick={props.switchLang}
              to="/about-us"
              className="nav-buttons"
              style={{ textDecoration: "none" }}
            >
              <LanguageIcon style={{ padding: "0 1rem" }} />
            </Button>
          </li>
        </ul>
      </SideBar>
    </Wrapper>
  );
};

export default Navbar;
