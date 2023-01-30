import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { TablePagination } from "@mui/material";
import { LoadingIcon } from "../../components/loading";

const CharactersContainer = () => {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState("idle");
  const [paginationInfo, setPaginationInfo] = useState<any>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const getCharactersList = async (query: string) => {
    try {
      setLoading("loading");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${query}`
      );
      setLoading("loaded");
      setCharacterList(response.data.results);
      setPaginationInfo(response.data.info);
    } catch (err) {
      setLoading("error");
      console.log(err);
    }
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    const currentPage = (rowsPerPage * (page + 1)) / 20;
    if (rowsPerPage * (page + 1) > 20) getCharactersList(`${currentPage}`);
    else getCharactersList(`${1}`);
  }, [page, rowsPerPage]);

  return (
    <Box style={{ gridArea: "char" }}>
      <div>Search Bar</div>
      <div>
        {loading === "loading" ? (
          <LoadingIcon />
        ) : (
          <div>
            {characterList.map((char: any) => {
              return (
                <div>
                  <span>{char.name}</span>
                  <span>{char.species}</span>
                  <span>{char.status}</span>
                </div>
              );
            })}
            <TablePagination
              rowsPerPageOptions={[20]}
              component="div"
              count={paginationInfo.count}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        )}
      </div>
    </Box>
  );
};

export { CharactersContainer };
