import * as React from "react";
import Image from "next/image";

import Link from "next/link";
import {
  ArticleWidget,
  ImgHolder,
  ArticleTag,
  TitleHolder,
  ArticleTitle,
} from "./ArticleCard.styles";

function ArticleCard({
  slug,
  featuredImageAltText,
  image,
  tag,
  title,
  bgcolor,
  color,
}) {
  return (
    <article>
      <ArticleWidget>
        <Link href={`/post/${slug}`}>
          <ImgHolder>
            <Image src={image} alt={featuredImageAltText} />
          </ImgHolder>
          <TitleHolder>
            <ArticleTag color={color} bgcolor={bgcolor}>
              {tag}
            </ArticleTag>
            <ArticleTitle>{title}</ArticleTitle>
          </TitleHolder>
        </Link>
      </ArticleWidget>
    </article>
  );
}

export default ArticleCard;
