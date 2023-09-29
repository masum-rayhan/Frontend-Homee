import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { ToggleSwitch } from "../layout";

const DeviceCard = ({ device, onToggle }) => {
  const [isOn, setIsOn] = useState(device.isOn);
  const [isModalOpen, setModalOpen] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle(newState);
  };

  const handleCreateClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateDevice = () => {
    // Add your logic to create a new device here
    // You can use input1, input2, and input3 values
    handleCloseModal();
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const displayedRows = device.rows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <Card variant="outlined">
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <img src={device.logo} alt={device.name} />
          </div>
          <div style={{ flex: 3 }}>
            <Typography variant="body1">{device.name}</Typography>
          </div>
          <div style={{ flex: 1 }}>
            <ToggleSwitch isOn={isOn} onClick={handleToggle} />
          </div>
        </div>
        {/* Display the rows */}
        {displayedRows.map((row, index) => (
          <Typography key={index} variant="body2">
            {row}
          </Typography>
        ))}
        {device.rows.length > currentPage * rowsPerPage && (
          <Button onClick={handleNextPage}>See Next Page</Button>
        )}
        {/* Create Button */}
        <Grid container justifyContent="space-between">
          <Grid item>
            <IconButton onClick={handleCreateClick}>
              <AddCircleIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={handleCreateClick}>
              Create
            </Button>
          </Grid>
        </Grid>
        {/* Modal for Creating Device */}
        <Dialog open={isModalOpen} onClose={handleCloseModal}>
          <DialogTitle>Create a New Device</DialogTitle>
          <DialogContent>
            <TextField
              label="Input 1"
              fullWidth
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
            />
            <TextField
              label="Input 2"
              fullWidth
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
            />
            <TextField
              label="Input 3"
              fullWidth
              value={input3}
              onChange={(e) => setInput3(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
            <Button onClick={handleCreateDevice} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default DeviceCard;
