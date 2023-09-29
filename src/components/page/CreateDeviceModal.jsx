import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const CreateDeviceModal = ({ onClose }) => {
  const [deviceName, setDeviceName] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [deviceLocation, setDeviceLocation] = useState("");

  const handleCreateDevice = () => {
    // Perform the logic to create a new device with the provided information
    // This can include making an API call or updating local state

    // After successfully creating the device, close the modal
    onClose();
  };

  return (
    <Modal open={true} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          maxWidth: "80vw", // Adjust the width as needed
        }}
      >
        <Typography variant="h5">Create New Device</Typography>

        <TextField
          label="Device Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={deviceName}
          onChange={(e) => setDeviceName(e.target.value)}
        />

        <TextField
          label="Device Type"
          variant="outlined"
          fullWidth
          margin="normal"
          value={deviceType}
          onChange={(e) => setDeviceType(e.target.value)}
        />

        <TextField
          label="Device Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={deviceLocation}
          onChange={(e) => setDeviceLocation(e.target.value)}
        />

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleCreateDevice}>
            Create
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CreateDeviceModal;
