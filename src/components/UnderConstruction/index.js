import React from 'react';
import {ContainerWrap} from './UnderConstruction.styles'; // You can create this CSS file for styling
import bgImg from "../../../public/image_11.png";

const UnderConstruction = () => {
  return (
    <ContainerWrap style={{ backgroundImage: `url(${bgImg.src})` }}>

    </ContainerWrap>
  );
};

export default UnderConstruction;