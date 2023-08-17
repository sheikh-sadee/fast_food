import React from 'react';
import { CardBox } from './ReviewCard.styles';

function ReviewCard({ title, para }) {
  return (
    <CardBox>
      <div className="head">
        <div className="img-box">{title.split('')[0]}</div>
        <div className="text-box">
          <span className="title">{title}</span>
          <ul className="rating">
            <li>
              <span className="plastk-icons">star</span>
              <span className="plastk-icons">star</span>
              <span className="plastk-icons">star</span>
              <span className="plastk-icons">star</span>
              <span className="plastk-icons">star</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text">{para}</div>
    </CardBox>
  );
}

export default ReviewCard;
