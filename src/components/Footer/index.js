import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/logo.png";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
const Wrapper = styled.div`
  width: 100%;
  background: #555555;
  border-radius: 5px 5px 0 0;
  padding: 1rem;
  box-sizing: border-box;
  text-align: justify;
  color: #dbdbdb;

  a {
    color: #dbdbdb;
    text-decoration: none;
    display: block;
    line-height: 2rem;
    transition: 0.4s;
  }
  .footer-links > a:hover {
    color: tomato;
    padding-left: 2rem;
  }
`;
const Footer = props => {
  return (
    <Wrapper>
      <Grid container spacing={3} justify="space-between">
        <Grid xs={12} sm={3} item>
          <img style={{ width: "100%" }} src={logo} alt="logo" />
          <p>{props.language ? "Footer Paragraph" : "فقرة"}</p>
          <p
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <LocationOnIcon style={{ marginRight: "1rem" }} />
            Mehterçeşme Mahallesi Ufuk Caddesi No: 88/B Esenyurt, İstanbul
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <CallIcon style={{ marginRight: "1rem" }} />
            +90 (531) 999 99 99
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <EmailIcon style={{ marginRight: "1rem" }} /> email@gmail.com
          </p>
        </Grid>
        <Grid sm={3} xs={12} item className="footer-links">
          <h5>{props.language ? "OUR SERVICES" : "خدماتنا"}</h5>
          <a href="#dead">Service number one</a>
          <a href="#dead">Service number two</a>
          <a href="#dead">Service number three</a>
          <a href="#dead">Service number four</a>
        </Grid>
        <Grid sm={3} xs={12} item className="footer-links">
          <h5>{props.language ? "OTHER LINKS" : "روابط اخرى"}</h5>
          <a href="#dead">Link number one</a>
          <a href="#dead">Link number two</a>
          <a href="#dead">Link number three</a>
          <a href="#dead">Link number four</a>
        </Grid>
        <Grid item sm={3} xs={12}>
          <h5>{props.language ? "FOLLOW US" : "تابعنا"}</h5>
          <div style={{ display: "flex" }}>
            <a href="#dead" style={{ margin: "0.5rem" }}>
              <FacebookIcon />
            </a>
            <a href="#dead" style={{ margin: "0.5rem" }}>
              <YouTubeIcon />
            </a>
            <a href="#dead" style={{ margin: "0.5rem" }}>
              <TwitterIcon />
            </a>
            <a href="#dead" style={{ margin: "0.5rem" }}>
              <InstagramIcon />
            </a>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Footer;
