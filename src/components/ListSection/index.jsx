import * as React from "react";
import { Container } from "../../styles/common";
import {
  ListBlock,
  TextHolder,
  ImgHolder,
  InfoText,
} from "./ListSection.styles";

function ListSection({ title, text, img, list, reverse, info }) {
  return (
    <ListBlock>
      <Container reverse={reverse} className="listContainer">
        <div className="heading-holder tablet-hide">
          <h2>{title}</h2>
        </div>
        <ImgHolder data-aos="flip-left" data-aos-offset="400">
          {img}
        </ImgHolder>
        <TextHolder data-aos="fade-up">
          <div className="heading-holder mobile-hide">
            <h2>{title}</h2>
          </div>
          {text && <p>{text}</p>}
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <InfoText>{info}</InfoText>
        </TextHolder>
      </Container>
    </ListBlock>
  );
}

export default ListSection;
