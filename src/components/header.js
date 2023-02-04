import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../york-logo.jpeg";

const pages = ["methodology", "about"];
export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <AppBar position="static" color="inherit">
      <Container maxWidth="xl" className="pt-3">
        <Toolbar variant="dense" disableGutters>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              flexGrow: 1,
              // display: { xs: "flex" },
              fontWeight: 500,
              color: "inherit",
              textDecoration: "none",
              overflow: "visible"
            }}
          >
            <Link to="/">
              <img src={logo} alt="York University" title="York University" width="120" className="mr-2 float-left"/>
              <span>Bitcoin CO<span className="text-sm align-sub">2</span> Emissions Project</span>
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">
                    <Link to={page} className="capitalize">
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page} key={page}>
                <Button sx={{display: "block", color: "black" }}>
                    {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
