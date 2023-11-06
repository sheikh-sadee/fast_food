import * as React from "react";
import Image from "next/image";
import { ItemCard, TextHolder, ImgHolder } from "./MenuItemCard.styles";

function MenuItemCard({ heading, paragraph, price, img }) {
  return (
    <ItemCard>
      {img &&
        <ImgHolder>
          <Image src={img} alt="image description" />
        </ImgHolder>
      }
      <TextHolder>
        <div className="textwrap">
          <h3>{heading}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{paragraph}</p>
      </TextHolder>
    </ItemCard>
  );
}

export default MenuItemCard;
