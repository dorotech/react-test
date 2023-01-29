import React from 'react';
import { Pagination as MaterialPagination } from '@mui/material';
import './Pagination.css';

interface PaginationProps {
  count: number | undefined;
  page: string;
  setPage: (value: string) => void;
}

export default function Pagination(props: PaginationProps) {
  const { count, page, setPage } = props;
  return (
    <MaterialPagination
      className="pagination"
      count={count}
      variant="outlined"
      shape="rounded"
      page={+page}
      onChange={(_event, value) => {
        setPage(value.toString());
      }}
      sx={{
        button: {
          backgroundColor: 'rgb(60, 62, 68)',
          color: '#fff',
          border: '1px solid gray',
        },
        div: { color: '#fff' },
      }}
    />
  );
}
