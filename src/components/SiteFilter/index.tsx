"use client";

import { Box, Drawer } from "@mui/material";
import SiteList from "@/containers/SiteList";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const SiteFilter = (props: Props) => (
  <Drawer
    anchor={"left"}
    open={props.isOpen}
    onClose={props.handleClose}
    PaperProps={{
      sx: {
        position: "relative",
        display: "flex",
        minWidth: "80%",
        maxWidth: "80%",
        px: 2,
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        p: 2,
        fontSize: 24,
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      EPISODE SITE
    </Box>

    <SiteList />
  </Drawer>
  // </Box>
);

export default SiteFilter;
