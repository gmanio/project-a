"use client";
import { ReactNode, useState } from "react";
import RootLayout from "./layout";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
const MapSection = dynamic(() => import("../containers/MapSection"), {
  ssr: false,
});
const SpeedDial = dynamic(() => import("../components/SpeedDial"), {
  ssr: false,
});

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={{ position: "relative", top: 0, height: "calc(100vh-56px)" }}>
      <SpeedDial
        isOpen={isOpen}
        handleOpen={() => setIsOpen(true)}
        handleClose={() => setIsOpen(false)}
      />
      <MapSection />
    </Box>
  );
};

Home.getLayout = (page: ReactNode) => {
  return <RootLayout>{page}</RootLayout>;
};

export default Home;
