import { React, useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  LogoutTwoTone,
  SearchOutlined,
} from "@mui/icons-material";
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const logout = ()=> {
    axios.post('http://127.0.0.1:8000/api/v1/users/logout')
    .then((res)=> {
      window.localStorage.clear();
      setTimeout(()=> {navigate('/')}, 500)
    })
    .catch(e => console.error(e));
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="10px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        <IconButton> <NotificationsOutlined /> </IconButton>

        <Link to="settings">
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        </Link>

        <IconButton onClick={logout}>
          <LogoutTwoTone />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
