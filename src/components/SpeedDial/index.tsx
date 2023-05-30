"use client";
import { mock_sites } from "@/_mocks/handlers";
import { naverMap } from "@/store/atoms";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import {
  Backdrop,
  Box,
  SpeedDial as MuiSpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import { useAtom } from "jotai";
import { useNavermaps } from "react-naver-maps";

const actions = Object.entries(mock_sites).flatMap(([key, site], index) => {
  return {
    icon: <HomeWorkIcon />,
    name: (site && site.place[0].korean) || "",
    data: site.place[0],
  };
});

type Props = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const SpeedDial = ({ isOpen: open, handleClose, handleOpen }: Props) => {
  const navermaps = useNavermaps();
  const [map] = useAtom(naverMap);
  const handleClick = (data: any) => () => {
    const target = new navermaps.LatLng(data.lat, data.lng);
    if (map) {
      map.setCenter(target);
      map.setZoom(14);
    }
    handleClose();
  };
  return (
    <Box
      sx={{
        display: 'flex',
        position: "absolute",
        width: 100,
        height: 330,
        // transform: "translateZ(0px)",
        bottom: '20%',
        right: "10px",
        // top: 0,
        zIndex: 1000
      }}
    >
      <MuiSpeedDial
        ariaLabel="SpeedDial"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
        icon={<SpeedDialIcon sx={{ background: "#111" }} />}
        FabProps={{ sx: { background: "#111 !important" }, size: "medium" }}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={
              <Box
                sx={{
                  fontSize: 14,
                  flexWrap: "nowrap",
                  minWidth: 70,
                  backdropFilter: "blur(2px)",
                  background: "transparent !important",
                }}
              >
                {action.name}
              </Box>
            }
            tooltipOpen
            onClick={handleClick(action.data)}
            FabProps={{
              sx: {
                background: "#777 !important",
                backdropFilter: "blur(2px)",
                color: "#fff",
              },
              size: "medium",
            }}
            sx={{ fontSize: 11 }}
          />
        ))}
      </MuiSpeedDial>
      <Backdrop open={open} />
    </Box>
  );
};

export default SpeedDial;
