import React from "react";

import { Box, useTheme, IconButton, InputBase } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";

import {
  Search,
  LightModeOutlined,
  SettingsOutlined,
  NotificationsOutlined,
  PersonOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* Search bar */}
      <Box
        display={"flex"}
        borderRadius={"3px"}
        backgroundColor={colors.primary[400]}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Search />
        </IconButton>
      </Box>

      {/* Icons */}

      <Box diplay={"flex"}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
