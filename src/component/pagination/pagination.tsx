import React, { useEffect, useState } from 'react';
import './pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import paginate from '../../utils/paginate';
import { PaginateInfo } from '../../models/paginateInfo';
interface PaginationProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

/**
 * @brief Component for the pagination.
 * @param param0 Needed to pass the itemsCount, pageSize, currentPage, onPageChange.
 * @returns Styled pagination component.
 */

const Pagination = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const [pageInfo, setPageInfo] = useState<PaginateInfo>();
  useEffect(() => {
    setPageInfo(paginate(itemsCount, currentPage, pageSize));
  }, []);

  useEffect(() => {
    setPageInfo(paginate(itemsCount, currentPage, pageSize));
  }, [currentPage, itemsCount]);

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-yellow-50 dark:bg-gray-900 dark:text-yellow-100 w-10 h-10 mx-1 p-3"
        onClick={() => {
          if (onPageChange) {
            onPageChange(1);
          }
        }}
      >
        <FontAwesomeIcon icon={faAnglesLeft} size="lg" />
      </button>
      {pageInfo?.pages.map((page: number) => (
        <button
          key={page}
          type="button"
          className={`page-item flex items-center justify-center bg-yellow-50 dark:bg-gray-900 dark:text-yellow-100 hover:dark:bg-opacity-50 w-10 h-10 p-3 transition ${
            page === currentPage ? 'active-item' : ''
          }`}
          onClick={() => {
            if (onPageChange) {
              onPageChange(page);
            }
          }}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className="flex items-center justify-center rounded-full bg-yellow-50 dark:bg-gray-900 dark:text-yellow-100 w-10 h-10 mx-1 my-5 p-3"
        onClick={() => {
          if (onPageChange) {
            onPageChange(pageInfo!.totalPages);
          }
        }}
      >
        <FontAwesomeIcon icon={faAnglesRight} size="lg" />
      </button>
    </div>
  );
};

export default Pagination;
