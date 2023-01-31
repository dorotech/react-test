import React, { useContext, useEffect, useState } from "react";
import { Box } from "@mui/system";
import axios from "axios";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Snackbar,
  TablePagination,
  Typography,
} from "@mui/material";
import { LoadingIcon } from "../../components/loading";
import styles from "./styles.module.scss";
import { ColorModeContext } from "../../contexts";
import { CharacterCard } from "../../components/characterCard";
import SearchIcon from "@mui/icons-material/Search";

const CharactersContainer = () => {
  const { mode } = useContext(ColorModeContext);
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState("idle");
  const [paginationInfo, setPaginationInfo] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [nameToSearch, setNameToSearch] = useState("");
  const [genderName, setGenderName] = useState("");
  const [speciesName, setSpeciesName] = useState("");
  const [statusName, setStatusName] = useState("");
  const [openMoreFilters, setOpenMoreFilters] = useState(false);
  const currentPage = (rowsPerPage * (page + 1)) / 20;

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

  const handleSearchByName = () => {
    getCharactersList(filters);
    setPage(0);
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

  const handleCloseSnackBar = () => {
    setLoading("idle");
  };

  useEffect(() => {
    getCharactersList(`${filters}`);
  }, [page, rowsPerPage]);

  const handleChangeGender = (event: SelectChangeEvent<typeof genderName>) => {
    const {
      target: { value },
    } = event;
    setGenderName(value);
  };
  const genderOptions = ["female", "male", "genderless", "unknown"];

  const handleChangeSpecie = (event: SelectChangeEvent<typeof genderName>) => {
    const {
      target: { value },
    } = event;
    setSpeciesName(value);
  };

  const specieOptions = ["human", "humanoid"];

  const handleChangeStatus = (event: SelectChangeEvent<typeof genderName>) => {
    const {
      target: { value },
    } = event;
    setStatusName(value);
  };

  const statusOptions = ["alive", "dead", "unknown"];

  const handleClickOpenFilters = () => {
    setOpenMoreFilters(true);
  };
  const handleCloseFilters = () => {
    setOpenMoreFilters(false);
  };

  const handleFilter = () => {
    handleCloseFilters();
    getCharactersList(filters);
  };

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
          <Box className={styles.search_container}>
            <div
              style={{
                border: `1px solid ${mode === "light" ? "#36385a" : "#bbbdd6"}`,
                borderRadius: "100px",
                display: "flex",
                alignItems: "center",
                color: mode === "light" ? "black" : "white",
                background: mode === "light" ? "#bbbdd6" : "#36385a",
                minWidth: "300px",
                padding: "4px 8px 4px 4px",
              }}
            >
              <SearchIcon />
              <InputBase
                placeholder="Por nome..."
                inputProps={{ "aria-label": "search" }}
                style={{ color: mode === "light" ? "black" : "white" }}
                value={nameToSearch}
                onChange={(e) => setNameToSearch(e.target.value)}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Button
                onClick={handleSearchByName}
                variant="text"
                style={{ color: mode === "light" ? "#36385a" : "#bbbdd6" }}
              >
                Pesquisar
              </Button>
              <Button
                variant="text"
                style={{ color: mode === "light" ? "#36385a" : "#bbbdd6" }}
                onClick={handleClickOpenFilters}
              >
                Mais filtros
              </Button>
              <Button
                onClick={handleClearFilters}
                variant="text"
                style={{ color: mode === "light" ? "#36385a" : "#bbbdd6" }}
              >
                Limpar filtros
              </Button>
            </div>
          </Box>
          <div>
            <Typography
              component="div"
              variant="h6"
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Comic Sans MS",
                fontSize: "24px",
              }}
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
          </div>
        </>
      )}

      <Dialog open={openMoreFilters} onClose={handleCloseFilters}>
        <Box
          style={{
            background: mode === "light" ? "#dddeeb" : "#484b78",
            color: mode === "light" ? "black" : "white",
          }}
        >
          <DialogTitle style={{ display: "flex", justifyContent: "center" }}>
            Mais Filtros
          </DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "24px 12px",
            }}
          >
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Gênero</InputLabel>
              <Select
                value={genderName}
                onChange={handleChangeGender}
                input={<OutlinedInput label="Gender" />}
              >
                {genderOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Status</InputLabel>
              <Select
                value={statusName}
                onChange={handleChangeStatus}
                input={<OutlinedInput label="Status" />}
              >
                {statusOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel>Espécie</InputLabel>
              <Select
                value={speciesName}
                onChange={handleChangeSpecie}
                input={<OutlinedInput label="Specie" />}
              >
                {specieOptions.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                color: mode === "light" ? "#484b78" : "#dddeeb",
              }}
              onClick={handleFilter}
            >
              Filtrar
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      <Snackbar
        open={loading === "error"}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error">
          Não foram encontrado personagens usando esse filtro!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export { CharactersContainer };
