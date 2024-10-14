import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  MenuItem,
  TextField,
  Button,
  Typography,
  ButtonGroup,
  useMediaQuery,
} from "@mui/material";
import { SearchRounded } from "@mui/icons-material";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import HouseIcon from "@mui/icons-material/House";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Index.scss";

const propertyOptions = [
  {
    type: "Жк Лето",
    icon: <BorderAllIcon style={{ color: "#443D66" }} />,
    path: "/Property", // Path for navigation
  },
  {
    type: "Жк Осень",
    icon: <HouseIcon style={{ color: "#443D66" }} />,
    path: "#osennya", // Anchor for Осень
  },
  {
    type: "Жк Зима",
    icon: <ApartmentIcon style={{ color: "#443D66" }} />,
  },
  {
    type: "Жк Весна",
    icon: <LocationCityIcon style={{ color: "#443D66" }} />,
  },
];

const userInterest = [
  { type: "Выбрать" },
];

function Home() {
  const navigate = useNavigate(); // Initialize navigate
  const showUP780 = useMediaQuery("(min-width: 780px)");

  const [option, setOption] = useState("ЖК Лето"); // Set initial value
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const handleChange = (event) => {
    const selectedOption = propertyOptions.find(prop => prop.type === event.target.value);
    if (selectedOption && selectedOption.path) {
      navigate(selectedOption.path);
    }
    setOption(event.target.value);
  };

  const handleSearch = () => {
    // Navigate to a search results page or append query to URL
    if (searchQuery) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="hm-pg">
      <img src="/assets/image/background.webp" alt="bg" className="hm-img" />
      <div className="home">
        <Box className="homebox">
          <Box sx={{ display: "flex" }}>
            <ButtonGroup fullWidth>
              {userInterest.map((item) => (
                <Button
                  key={item.type}
                  id={item.type}
                  color="inherit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#313f82",
                    borderTopRightRadius: "20px",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderTopLeftRadius: "20px",
                    color: "#CED0C8",
                    ':hover': {
                      bgcolor: '#5A659B',
                    }
                  }}
                >
                  {item.type}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
          <Box sx={{ width: "100%", display: "flex", height: "56px" }}>
            <TextField
              select
              value={option}
              onChange={handleChange}
              sx={{
                width: '40%',
                outline: "none",
                height: "56px",
                padding: "auto",
                backgroundColor: "#ffff",
                borderBottomLeftRadius: "20px",
                }}
                >
                {propertyOptions.map((option) => (
                <MenuItem key={option.type} value={option.type}>
                {showUP780 ? (
                <Typography>{option.type}</Typography>
                ) : (
                <Typography>{option.icon}</Typography>
                )}
                </MenuItem>
                ))}
                </TextField>
                <TextField
                variant="filled"
                label="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                sx={{
                alignContent: "start",
                height: "56px",
                backgroundColor: "#ffff",
                }}
                fullWidth
                />
                <Button
                variant="contained"
                onClick={handleSearch} // Trigger search on click
                sx={{
                borderBottomRightRadius: "20px",
                borderTopLeftRadius: "0px",
                }}
                >
                <SearchRounded />
                </Button>
                </Box>
                </Box>
                </div>
                </div>
                );
                }
                
                export default Home;