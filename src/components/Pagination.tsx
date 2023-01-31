import React from 'react';
import { Pagination as MaterialPagination } from '@mui/material';
import './Pagination.css';

interface QueryParams {
  page: string;
  name: string;
  status: string;
  gender: string;
  species: string;
}
interface PaginationProps {
  count: number | undefined;
  queryParams: QueryParams
  setQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

export default function Pagination(props: PaginationProps) {
  const { count, queryParams, setQueryParams: setQuery } = props;
  return (
    <MaterialPagination
      className="pagination"
      count={count}
      variant="outlined"
      shape="rounded"
      page={+queryParams.page}
      onChange={(_event, value) => {
        setQuery({ ...queryParams, page: value.toString() });
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
