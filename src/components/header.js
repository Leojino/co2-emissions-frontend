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
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import logo from "../york-logo.jpeg";
const pages = ["Methodology", "About"];

export default function Header({navClick}) {
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
          {/* <img src={logo} alt="York University" title="York University" width="120" className="mr-2"/> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              flexGrow: 1,
              // display: { xs: "flex" },
              fontWeight: 300,
              color: "inherit",
              textDecoration: "none",
              overflow: "visible"
            }}
          >
            <span>Bitcoin CO</span>
            <span className="text-sm relative -bottom-1 mr-2">2</span>
            <span>Emissions Project</span>
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
                <MenuItem key={page} onClick={navClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button key={page} onClick={navClick(page)} sx={{display: "block" }}>
                {/* <span className="text-orange-700"> */}
                  {page}
                {/* </span> */}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
