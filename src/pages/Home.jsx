import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import DeviceCardList from "../components/page/DeviceCardList";
import CreateDeviceModal from "../components/page/CreateDeviceModal";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { setDevice } from "../storage/redux/deviceSlice";
import { useGetDevicesQuery } from "../apis/deviceApi";

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
        <DeviceCardList
          devices={data.result}
          onCreateDeviceClick={handleCreateDeviceClick}
        />
      </Box>
      <CreateDeviceModal
        open={isCreateDeviceModalOpen}
        onClose={handleCloseDeviceModal}
      />
    </>
  );
};
