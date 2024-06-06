import { useState } from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const SearchInput = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  marginRight: theme.spacing(0.1),
  width: "200px",
  paddingLeft: "10px",
}));

// eslint-disable-next-line react/prop-types
function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Dogs Directory
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchInput
            placeholder="Search Dogs"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <IconButton color="inherit" size="large">
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
