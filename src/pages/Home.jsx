import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Device, Sidebar, ToggleSwitch } from "../components/layout";
import {
  Box,
  Button,
  Fab,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CreateDeviceModal } from "../components/page";
import { Link } from "react-router-dom";

export const Home = () => {
  // Example state for managing the light state
  const [lights, setLights] = useState([{ isOn: true }, { isOn: false }]);

  const [isCreateDeviceModalOpen, setCreateDeviceModalOpen] = useState(false); // State for controlling the modal

  // Function to toggle the light state
  const handleLightToggle = (index, newState) => {
    const updatedLights = [...lights];
    updatedLights[index].isOn = newState;
    setLights(updatedLights);
  };

  const handleCreateDeviceClick = () => {
    console.log("Create Device button clicked");
    // Open the Create Device modal when the button is clicked
    setCreateDeviceModalOpen(true);
  };
  const handleCloseDeviceModal = () => {
    // Close the Create Device modal
    setCreateDeviceModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Horizontal Sections */}
          <Grid container spacing={2} sx={{ width: "100%", marginTop: 2 }}>
            {/* Section 1 */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h5">Section 1</Typography>

                {/* Boxes inside Section 1 */}
                <Grid container spacing={2}>
                  {/* Box 1 */}
                  <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                      <Typography variant="h6">Lights</Typography>

                      {/* Light Items */}
                      <Stack spacing={2}>
                        {/* Light Item 1 */}
                        <Grid container alignItems="center">
                          {/* Light Logo */}
                          <Grid item xs={2}>
                            <Device
                              isOn={lights[0].isOn}
                              onClick={(newState) =>
                                handleLightToggle(0, newState)
                              }
                            />
                          </Grid>
                          {/* Room Name */}
                          <Grid item xs={6}>
                            <Typography variant="body1">Bedroom</Typography>
                          </Grid>
                          {/* Toggle Switch */}
                          <Grid item xs={4}>
                            <ToggleSwitch
                              isOn={lights[0].isOn}
                              onClick={(newState) =>
                                handleLightToggle(0, newState)
                              }
                            />{" "}
                          </Grid>
                        </Grid>

                        {/* Light Item 2 */}
                        <Grid container alignItems="center">
                          {/* Light Logo */}
                          <Grid item xs={2}>
                            <Device
                              isOn={lights[0].isOn}
                              onClick={(newState) =>
                                handleLightToggle(0, newState)
                              }
                            />
                          </Grid>
                          {/* Room Name */}
                          <Grid item xs={6}>
                            <Typography variant="body1">Kitchen</Typography>
                          </Grid>
                          {/* Toggle Switch */}
                          <Grid item xs={4}>
                            {/* Replace with your toggle switch component */}
                            {/* <ToggleSwitchComponent /> */}
                          </Grid>
                        </Grid>

                        {/* Add more light items here */}
                      </Stack>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ paddingTop: 2 }}
                      >
                        <IconButton onClick={handleCreateDeviceClick}>
                          <AddCircleIcon />
                        </IconButton>

                        {/* Render the CreateDeviceModal */}
                        {isCreateDeviceModalOpen && (
                          <CreateDeviceModal onClose={handleCloseDeviceModal} />
                        )}
                      </Grid>
                    </Paper>
                  </Grid>

                  {/* Box 3 */}
                  <Grid item xs={12}>
                    <Paper elevation={3} sx={{ padding: 2 }}>
                      <Typography variant="h6">Camera</Typography>
                      <ul>
                        <li>Front Yard</li>
                        <li>Backyard</li>
                        {/* Add more camera locations here */}
                      </ul>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Section 2 */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h5">Section 2</Typography>
                <p>
                  Here's some demo content for Section 2. You can display device
                  status, energy usage data, or any relevant information.
                </p>
              </Paper>
            </Grid>

            {/* Section 3 */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h5">Section 3</Typography>
                <p>
                  Section 3 might contain historical data or temperature
                  information from various devices in your home automation
                  system.
                </p>
              </Paper>
            </Grid>

            {/* Section 4 */}
            <Grid item xs={12} md={3}>
              <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                <Typography variant="h5">Section 4</Typography>
                <p>
                  This is the content for Section 4. You can use this section
                  for additional data or features as needed.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
