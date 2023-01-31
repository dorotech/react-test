import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import { SelectChangeEvent, TablePagination, Typography } from "@mui/material";
import { LoadingIcon } from "../../components/loading";
import styles from "./styles.module.scss";
import { ColorModeContext } from "../../contexts";
import { CharacterCard } from "../../components/characterCard";
import { SearchInput } from "../../components/searchInput";
import { SnackBar } from "../../components/snackbar";
import { PrimaryButton } from "../../components/primaryButton";
import { FiltersForm } from "./filtersForm";

const CharactersContainer = () => {
  const { mode } = useContext(ColorModeContext);
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState("idle");

  const [paginationInfo, setPaginationInfo] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const currentPage = (rowsPerPage * (page + 1)) / 20;

  const [nameToSearch, setNameToSearch] = useState("");
  const [genderName, setGenderName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [statusName, setStatusName] = useState("");
  const [openMoreFilters, setOpenMoreFilters] = useState(false);

  const filters = `?page=${currentPage}${
    nameToSearch.length > 0 ? `&name=${nameToSearch}` : ""
  }${genderName.length > 0 ? `&gender=${genderName}` : ""}${
    speciesName.length > 0 ? `&species=${speciesName}` : ""
  }${statusName.length > 0 ? `&status=${statusName}` : ""}`;

  const getCharactersList = async (query: string) => {
    try {
      setLoading("loading");
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character${query}`
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
    getCharactersList(`${filters}`);
  }, [page, rowsPerPage]);

  const handleSearchByName = () => {
    getCharactersList(filters);
    setPage(0);
  };

  const handleChangeGender = (event: SelectChangeEvent<typeof genderName>) => {
    const {
      target: { value },
    } = event;
    setGenderName(value);
  };

  const handleChangeSpecie = (event: SelectChangeEvent<typeof genderName>) => {
    const {
      target: { value },
    } = event;
    setSpeciesName(value);
  };

  const handleChangeStatus = (event: SelectChangeEvent<typeof genderName>) => {
    const {
      target: { value },
    } = event;
    setStatusName(value);
  };

  const handleToogleFilters = () => {
    setOpenMoreFilters(!openMoreFilters);
  };

  const handleClearFilters = () => {
    getCharactersList("");
    setNameToSearch("");
    setGenderName("");
    setSpeciesName("");
    setStatusName("");
    setPage(0);
    getCharactersList(`?page=${1}`);
  };

  const handleFiltersChar = () => {
    handleToogleFilters();
    getCharactersList(filters);
  };

  const handleCloseSnackBar = () => {
    setLoading("idle");
  };

  return (
    <Box className={styles.box_container}>
      {loading === "loading" ? (
        <LoadingIcon />
      ) : (
        <>
          <Box className={styles.search_container}>
            <SearchInput
              nameToSearch={nameToSearch}
              setNameToSearch={setNameToSearch}
            />
            <Box style={{ display: "flex" }}>
              <PrimaryButton
                buttonName="Pesquisar"
                handleClick={handleSearchByName}
              />
              <PrimaryButton
                buttonName="Mais filtros"
                handleClick={handleToogleFilters}
              />
              <PrimaryButton
                buttonName="Limpar filtros"
                handleClick={handleClearFilters}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              component="div"
              variant="h6"
              className={styles.typography}
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
              style={{ color: mode === "light" ? "black" : "white" }}
            />
          </Box>
        </>
      )}
      <FiltersForm
        open={openMoreFilters}
        handleClose={handleToogleFilters}
        handleFilter={handleFiltersChar}
        genderName={genderName}
        handleGenderName={handleChangeGender}
        speciesName={speciesName}
        handleSpecieName={handleChangeSpecie}
        statusName={statusName}
        handleStatusName={handleChangeStatus}
      />
      <SnackBar
        open={loading === "error"}
        onClose={handleCloseSnackBar}
        type="error"
      />
    </Box>
  );
};

export { CharactersContainer };
