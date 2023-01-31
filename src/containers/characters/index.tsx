import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TablePagination,
  Typography,
} from "@mui/material";
import { LoadingIcon } from "../../components/loading";
import styles from "./styles.module.scss";
import { ColorModeContext } from "../../contexts";
import { CharacterCard } from "../../components/characterCard";

const CharactersContainer = () => {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState("idle");
  const [paginationInfo, setPaginationInfo] = useState<any>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const { mode } = useContext(ColorModeContext);

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
    <Box
      style={{
        overflowX: "auto",
        width: "100%",
      }}
    >
      {loading === "loading" ? (
        <LoadingIcon />
      ) : (
        <>
          <div>Search Bar</div>
          <div>
            <Typography
              component="div"
              variant="h6"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Galerinha do Rick e Morty
            </Typography>
            <div className={styles.card_container}>
              {characterList.map((char: any) => {
                return <CharacterCard charData={char} key={char.id} />;
              })}
            </div>
            <TablePagination
              rowsPerPageOptions={[20]}
              component="div"
              count={paginationInfo.count || 0}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </>
      )}
    </Box>
  );
};

export { CharactersContainer };
