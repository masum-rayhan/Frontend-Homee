import React from "react";
import Navbar from "../components/layout/Navbar";
import { Sidebar } from "../components/layout";
import { Box, Grid, Paper, Typography } from "@mui/material";

export const Home = () => {
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

                      {/* Light Item 1 */}
                      <Grid container alignItems="center" spacing={2}>
                        {/* Light Logo */}
                        <Grid item xs={2}>
                          {/* Replace this with your light logo */}
                          {/* <img
                            src="light_logo.png"
                            alt="Light Logo"
                            style={{ width: "100%" }}
                          /> */}
                        </Grid>
                        {/* Room Name */}
                        <Grid item xs={6}>
                          <Typography variant="body1">Bedroom</Typography>
                        </Grid>
                        {/* Toggle Switch */}
                        <Grid item xs={4}>
                          {/* Replace with your toggle switch component */}
                          {/* <ToggleSwitchComponent /> */}
                        </Grid>
                      </Grid>

                      {/* Light Item 2 */}
                      <Grid container alignItems="center" spacing={2}>
                        {/* Light Logo */}
                        <Grid item xs={2}>
                          {/* Replace this with your light logo */}
                          {/* <img
                            src="light_logo.png"
                            alt="Light Logo"
                            style={{ width: "100%" }}
                          /> */}
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
