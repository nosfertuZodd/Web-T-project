import { React, useState } from "react";
import {
  Sidebar as Slidebar,
  Menu,
  MenuItem,
  useProSidebar,
  menuClasses
} from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import {
  HomeOutlined,
  ContactsOutlined,
  VideoSettingsOutlined,
  WorkOutlined,
  PersonOutlined,
  MenuOutlined,
} from "@mui/icons-material";

import pic from "../../img/sherry.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.redAccent[500] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={`${to}`} />}
    >
      <Typography variant="h5" fontWeight="bold">{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const { collapseSidebar } = useProSidebar();

  return (
    <Box display="flex" height="100vh" style={{position: "sticky"}} >
      <Slidebar
        width="260px"
        transitionDuration={1000}
        backgroundColor={colors.primary[400]}
        rootStyles={{
          color: colors.redAccent[500],
          border: "none",
        }}
      >
        <Menu style={{ padding: "5px 35px 5px 20px !important" }}
          rootStyles={{
            ['.' + menuClasses.button]: {
              color: colors.redAccent[500],
              '&:hover': {
                backgroundColor: colors.redAccent[100],
                borderRadius: "2px",
              },
            },
          }}
        >
          <Menu style={{ padding: "10px" }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[900]}>
                  Admins
                </Typography>

                <IconButton
                  onClick={() => {
                    collapseSidebar();
                    setIsCollapsed(!isCollapsed);
                  }}
                >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
            {isCollapsed && (

              <IconButton
                onClick={() => {
                  collapseSidebar();
                  setIsCollapsed(!isCollapsed);
                }}
              >
                <MenuOutlined />
              </IconButton>
            )}
          </Menu>

          {/* User */}
          {!isCollapsed && (
            <Box mb="25px" mt="10px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={pic}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    marginBottom: "5px",
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[900]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Shaheryar Rafique
                </Typography>
                <Typography mt="5px" variant="h5" color={colors.redAccent[500]}>
                  Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to=""
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Client"
              to="client"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Job"
              to="job"
              icon={<WorkOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Youtubers"
              to="youtuber"
              icon={<VideoSettingsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />


            {/* <Item
              title="Profile Form"
              to="form"
              icon={<PersonOutlined />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Item
              title="FAQ"
              to="faq"
              icon={<ContactsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </Slidebar>
    </Box>
  );
};

export default Sidebar;
