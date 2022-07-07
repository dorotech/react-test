import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCustomTheme } from "../../contexts/CustomThemeContext";

interface NavLinks {
  id: number;
  name: string;
  url: string;
}
const navItems: NavLinks[] = [
  { id: 1, url: "/", name: "Home" },
  { id: 2, url: "/favorites", name: "Favorites" },
];

export default function DrawerAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { mode, toggleColorMode } = useCustomTheme();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        R&M
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} component={Link} to={item.url}>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" color="primary" enableColorOnDark>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Rick and Morty
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {navItems.map((item) => (
              <Button
                key={item.id}
                component={Link}
                to={item.url}
                sx={{ color: "#FFFFFF" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/*
       * Essa toolbar vazia é para manter a app bar no topo sem
       * ficar por cima dos itens da página.
       */}
      <Toolbar
        sx={{
          marginBottom: 0.05,
          bgcolor: mode === "dark" ? "primary.main" : "secondary.dark",
        }}
      />
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Drawer>
      </Box>
    </Box>
  );
}
