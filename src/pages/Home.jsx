import React from "react";
import Navbar from "../components/layout/Navbar";
import { Sidebar } from "../components/layout";
import { Box } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
        </Box>
      </Box>
    </>
  );
};
