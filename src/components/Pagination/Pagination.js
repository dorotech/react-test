import React, { useState, useEffect, Fragment } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  }, []);

  return (
    <Fragment>
      <style jsx>{`
        .prev > a,
        .next > a {
          color: var(--bs-white);
          text-decoration: none !important;
        }
        @media (max-width: 768px) {
          .next,
          .prev {
            display: none;
          }
          .pagination {
            font-size: 14px;
          }
        } ;
      `}</style>
      <ReactPaginate
        className="col-lg-8 col-12 pagination justify-content-center gap-4 my-4"
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName="btn btn-primary next"
        previousClassName="btn btn-primary prev"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        activeClassName="active"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
        }}
        pageCount={info?.pages}
      />
    </Fragment>
  );
};

export default Pagination;
