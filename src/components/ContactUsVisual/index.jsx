import * as React from "react";
import bgImg from "../../../public/bg-img03.jpg";
import { ContactVisual, TextHolder } from "./ContactUsVisual.styles";

function ContactUsVisual() {
  return (
    <ContactVisual style={{ backgroundImage: `url(${bgImg.src})` }}>
      <div className="container">
        <TextHolder>
          <h2>Contact Us</h2>
          <h1 className="h2">Office Location</h1>
          <address>
            D548 Market Street Edmonton AB 99589 Canada 1-855-485-0102
          </address>
        </TextHolder>
      </div>
    </ContactVisual>
  );
}

export default ContactUsVisual;
