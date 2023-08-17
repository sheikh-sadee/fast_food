import * as React from "react";
import { ArticleBox, ImgBox, TextBox } from "./ArticleColumn.styles";

function ArticleColumn({ img, title, para, ...rest }) {
  return (
    <ArticleBox data-aos="fade-up" data-aos-offset="300" {...rest}>
      <ImgBox>{img}</ImgBox>
      <TextBox>
        <strong className="title">{title}</strong>
        <p>{para}</p>
      </TextBox>
    </ArticleBox>
  );
}

export default ArticleColumn;
