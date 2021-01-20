import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPicture from "../../../static/assets/images/Jason2.jpg";

export default function() {
  return (
  <div className="content-page-wrapper">
    <div 
      className="left-column" 
      style={{
        background: "url(" + contactPicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
    <div className="right-column">
      <div className="contact-bullet-points">
        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon="phone" />
          </div>

          <div className="text">
            785-614-3660
          </div>
        </div>

        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon="envelope" />
          </div>

          <div className="text">
            pastorjgrogan@yahoo.com
          </div>
        </div>

        <div className="bullet-point-group">
          <div className="icon">
            <FontAwesomeIcon icon="map-marked-alt" />
          </div>

          <div className="text">
            Concordia, KS 66901
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}