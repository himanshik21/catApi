import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await axios("https://api.thedogapi.com/v1/breeds");
      console.log(result.data);
      setDogs(result.data);
      setFilteredDogs(result.data);
    };
    fetchDogs();
  }, []);

  const handleSearchChange = (searchTerm) => {
    const filtered = dogs.filter((dog) =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDogs(filtered);
  };

  return (
    <div>
      <Navbar onSearch={handleSearchChange} />
      <Container>
        <Box mb={3} />
        <Grid container spacing={3}>
          {filteredDogs.map((dog) => (
            <Grid item xs={12} sm={6} md={4} key={dog.id}>
              <div style={{ cursor: "pointer", fontSize: "16px" }}>
                {dog.name}
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
