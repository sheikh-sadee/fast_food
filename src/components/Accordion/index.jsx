import React, { useState } from "react";
import { AccordionSection } from "./Accordion.styles";
import Pagination from "../UI/Pagination";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <AccordionSection>
      <div className="container">
        <div className="holder">
          <h1>Frequently Asked Questions </h1>
          {items.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="accordion-title">
                <strong className="title">{item.title}</strong>
                <span
                  className="accordion-opener"
                  onClick={() => onItemClick(index)}
                >
                  Click to <span className="close">Close</span>
                  <span className="show">Show</span> answer
                  <span class="material-icons-outlined icon-add">
                    add_circle_outline
                  </span>
                  <span class="material-icons-outlined icon-remove">
                    remove_circle_outline
                  </span>
                </span>
              </div>
              <div className="accordion-content">
                <div className="content-wrap">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          onPageChange={() => {}}
          totalCount={7}
          siblingCount={1}
          currentPage={1}
          pageSize={3}
        />
      </div>
    </AccordionSection>
  );
};

export default Accordion;
