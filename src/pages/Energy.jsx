import React from "react";
import { Navbar, Sidebar } from "../components/layout";
import { Box } from "@mui/material";

export const Energy = () => {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Energy</h1>
        </Box>
      </Box>
    </>
  );
};
