import * as React from "react";
import UsePagination from "./UsePagination";
import DOTS from "./PaginationDots";
import Image from "next/image";
import arrowPrev from "../../../../public/arrow-prev_[plastk,FAQ,pagination].png";
import arrowNext from "../../../../public/arrow-next_[plastk,FAQ,pagination].png";
import {
  PaginationList,
  PaginationButton,
  PaginationHolder,
  TotalItems,
} from "./Pagination.styles";

function Pagination(props) {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    customCss,
  } = props;

  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <PaginationHolder>
      <TotalItems style={{ display: "none" }}>
        Total {totalCount} Items
      </TotalItems>

      <PaginationList css={customCss}>
        <li>
          <PaginationButton
            className="btn-prev"
            type="primary"
            shape="circle"
            onClick={onPrevious}
            disabled={currentPage === 1}
            size={28}
          >
            <Image src={arrowPrev} alt="arrow" />
            Prev
          </PaginationButton>
        </li>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots" key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={index}>
              <PaginationButton
                onClick={() => onPageChange(pageNumber)}
                className={`${
                  (pageNumber === currentPage && "selected") || ""
                }`}
                $pageNumBtn
              >
                {pageNumber}
              </PaginationButton>
            </li>
          );
        })}
        <li>
          <PaginationButton
            className="btn-next"
            type="primary"
            shape="circle"
            onClick={onNext}
            disabled={currentPage === lastPage}
            size={28}
          >
            Next
            <Image src={arrowNext} alt="arrow" />
          </PaginationButton>
        </li>
      </PaginationList>
    </PaginationHolder>
  );
}

export default Pagination;
