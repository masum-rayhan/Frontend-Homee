import React from "react";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const ToggleSwitch = ({ isOn, onClick }) => {
  const handleToggle = () => {
    onClick(!isOn); // Toggle the state when clicked
  };

  return (
    <div
      onClick={handleToggle}
      style={{
        cursor: "pointer",
        display: "inline-block",
        width: "24px",
        height: "24px",
      }}
    >
      {isOn ? <ToggleOnIcon color="primary" /> : <ToggleOffIcon color="disabled" />}
    </div>
  );
};

export default ToggleSwitch;
