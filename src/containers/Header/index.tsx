import { Box, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import SiteFilter from "@/components/SiteFilter";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useAtom } from "jotai";
import { openDrawer } from "@/store/atoms";

const SearchInput = dynamic(() => import("@/common/Inputs/SearchInput"), {
  ssr: false,
});

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useAtom(openDrawer);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Episode</title>
      </Head>
      <AppBar position="relative" sx={{ background: "#222" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setIsOpenDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "flex" }}
          >
            Episode
          </Typography>
          <SearchInput />
        </Toolbar>
        <Box sx={{ position: "relative", display: "flex" }}>
          <SiteFilter
            isOpen={isOpenDrawer}
            handleClose={() => {
              setIsOpenDrawer(false);
            }}
          />
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
