import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import { Sidebar, ToggleSwitch } from "../components/layout";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useDispatch } from "react-redux";
import { setDevice } from "../storage/redux/deviceSlice";
import { useGetDevicesQuery } from "../apis/deviceApi";
import DeviceCard from "../components/page/DeviceCard";

export const Home = () => {
  const [isCreateDeviceModalOpen, setCreateDeviceModalOpen] = useState(false);
  const { data, isLoading } = useGetDevicesQuery(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(setDevice(data.result));
    }
  }, [isLoading]);

  const handleCreateDeviceClick = () => {
    setCreateDeviceModalOpen(true);
  };

  const handleCloseDeviceModal = () => {
    setCreateDeviceModalOpen(false);
  };
  if (isLoading) return <div>Loading...</div>;
  
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
              {/* Mapping through devices to create cards */}
              {data.result.map((device, index) => (
                <DeviceCard
                  key={index}
                  device={device}
                  onToggle={(newState) => handleLightToggle(index, newState)}
                />
              ))}
              {/* Create More Button */}
              <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                  <IconButton onClick={handleCreateDeviceClick}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={handleCreateDeviceClick}
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Modal for Creating Device */}
      <Dialog open={isCreateDeviceModalOpen} onClose={handleCloseDeviceModal}>
        <DialogTitle>Create a New Device</DialogTitle>
        <DialogContent>
          <TextField label="Input 1" fullWidth />
          <TextField label="Input 2" fullWidth />
          <TextField label="Input 3" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeviceModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateDevice} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
