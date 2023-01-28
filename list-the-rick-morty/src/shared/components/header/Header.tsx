import { Box, useTheme, Paper } from "@mui/material/";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button/Button";
import Icon from "@mui/material/Icon/Icon";
import TextField from "@mui/material/TextField/TextField";
import { useAppThemeContext } from "../../contexts/ThemeContext";
import { Environment } from "../../environment";

export const Header = () => {
  const theme = useTheme();

  const { mudarTema } = useAppThemeContext();

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
        <TextField fullWidth placeholder={Environment.INPUT_DE_BUSCA}/>
      </Box>

      <Box display="flex" justifyContent="end" flex={1}>
        <Button variant="text" color="primary" onClick={mudarTema} size="small">
          <Icon>dark_mode</Icon>
          
          Dark mode
        </Button>
      </Box>
    </Box>
  );
};
