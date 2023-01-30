import { useMemo, useState } from "react";
import {
  Box,
  useTheme,
  Paper,
  Stack,
  Switch,
  FormControlLabel,
} from "@mui/material/";
import Avatar from "@mui/material/Avatar";

import TextField from "@mui/material/TextField/TextField";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { Environment } from "../../environment";

import { useSearchParams } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const { mudarTema } = useAppThemeContext();


  const [ searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  },[searchParams]);


    return (
    <Box
      gap={1}
      marginX={0}
      padding={1}
      paddingX={2}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}
    >
      <Avatar
        sx={{ height: theme.spacing(6), width: theme.spacing(6) }}
        src="https://i.redd.it/2e99wgj1lei31.jpg"
      />
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      >
        <Stack spacing={4}>
          <Stack direction="row" spacing={2}>
            <TextField
              placeholder={Environment.INPUT_DE_BUSCA}
              variant="outlined"
              size="small"
              fullWidth
              inputProps={{ maxLength: 25 }}
            />
          </Stack>
        </Stack>
      </Box>

      <Box display="flex" justifyContent="end" flex={1}>
        <FormControlLabel
          control={
            <Switch
              onChange={mudarTema}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Dark Mode"
        />
      </Box>
    </Box>
  );
};
