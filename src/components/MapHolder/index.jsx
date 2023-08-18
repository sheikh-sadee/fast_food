import React from "react";
import { MapSection } from "./MapHolder.styles";


function MapHolder() {

  return (
    <MapSection>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.347183216988!2d-6.768077023390248!3d41.79928077034447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a4a1de1f62ab1%3A0xf81654ac874a99ef!2sAv.%20S%C3%A1%20Carneiro%2C%205300-252%20Bragan%C3%A7a%2C%20Portugal!5e0!3m2!1sen!2s!4v1692338116308!5m2!1sen!2s"></iframe>
    </MapSection>
  );
}

export default MapHolder;
