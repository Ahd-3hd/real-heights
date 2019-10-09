import React from "react";

const Map = props => {
  return (
    <div style={{ margin: "3rem 0" }}>
      <h1 style={{ textAlign: "center", color: "#555555", margin: "3rem 0" }}>
        {props.language ? "Our Location" : "موقعنا"}
      </h1>
      <div className="gmap_canvas">
        <iframe
          title="map"
          width="100%"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=1kentistanbul&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
