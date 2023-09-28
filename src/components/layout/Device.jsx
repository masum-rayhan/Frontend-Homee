import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";

const Device = ({ isOn, onClick }) => {
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
        color: isOn ? "yellow" : "inherit", // Set color to yellow when on
      }}
    >
      {isOn ? <LightbulbIcon /> : <LightbulbOutlinedIcon />}
    </div>
  );
};

export default Device;
