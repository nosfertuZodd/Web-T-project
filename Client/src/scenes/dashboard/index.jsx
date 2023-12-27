import { React, useState, useEffect } from 'react'
import Header from '../../components/Header'
import { useTheme, Box, Typography, Grid } from '@mui/material'
import { tokens } from '../../theme'
import { Work, PointOfSale, PersonAdd } from "@mui/icons-material";
import StatBox from '../../components/StatBox';
import axios from "axios";

const Dashboard = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [clientData, setClient] = useState([{}]);
  const [YTData, setYT] = useState([{}]);


  const getClientData = () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/users/clients")
      .then((response) => {
        setClient(response.data.data.doc);
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  const getYTData = () => {
    axios
      .get("http://127.0.0.1:8000/api/v1/users/youtubers")
      .then((response) => {
        setYT(response.data.data.doc);
      })
      .catch((e) => {
        console.log("Error");
      });
  };

  useEffect(() => {
    getClientData();
    getYTData();
  }, []);

  return (
    <Box m="10px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ADMIN" subtitle="Welcome to your dashboard" />
      </Box>

      {/* Cards */}
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)"
        gap="15px 20px"
        gridAutoRows="140px">

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">

          <StatBox
            title="12,361"
            subtitle="Jobs Post"
            progress="0.75"
            increase="+14%"
            icon={<Work sx={{ color: colors.grey[900], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">

          <StatBox
            title="56,000"
            subtitle="New Clients"
            progress="0.60"
            increase="+50%"
            icon={<PersonAdd sx={{ color: colors.grey[900], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">

          <StatBox
            title="12,000"
            subtitle="New Youtubers"
            progress="0.70"
            increase="+75%"
            icon={<PersonAdd sx={{ color: colors.grey[900], fontSize: "26px" }} />}
          />
        </Box>

        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">

          <StatBox
            title="12,000"
            subtitle="Average Income"
            progress="0.40"
            increase="+45%"
            icon={<PointOfSale sx={{ color: colors.grey[900], fontSize: "26px" }} />}
          />
        </Box>

      </Box>

      <Grid container direction="row"
        justifyContent="space-between"
        alignItems="center" gap="10px 5px">

        <Grid
          m="20px 0px"
          backgroundColor={colors.primary[400]}
          xs={12}
          item
        >

          <Box
            display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px"
          >
            <Typography color={colors.redAccent[500]} variant="h5" fontWeight="bold">
              Recent Clients
            </Typography>
          </Box>

          {clientData.map((ele, index) => {
            return <Box key={index} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Box>

                <Typography color={colors.grey[900]} variant="h5" fontWeight="bold">
                  {ele._id}
                </Typography>

                <Typography color={colors.grey[900]} variant="h5" fontWeight="bold">
                  {ele.name}
                </Typography>
              </Box>
              <Box color={colors.grey[900]}>
                {new Date(ele.dob).getDate() + '-' + new Date(ele.dob).toLocaleString('default', { month: 'short' }) + '-' + new Date(ele.dob).getFullYear()}
              </Box>
              <Box backgroundColor={colors.redAccent[500]} p="5px 10px" borderRadius="4px">
                {ele.country}
              </Box>
            </Box>;
          })}

        </Grid>

        {/* <Grid
          m="20px 0px"
          backgroundColor={colors.primary[400]}
          xs={5.7}
          item
        >

          <Box
            display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px"
          >
            <Typography color={colors.redAccent[500]} variant="h5" fontWeight="bold">
              Recent Youtuber
            </Typography>
          </Box>

          {YTData.map((ele, index) => {
            return <Box key={index} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Box>

                <Typography color={colors.grey[900]} variant="h5" fontWeight="bold">
                  {ele._id}
                </Typography>

                <Typography color={colors.grey[900]} variant="h5" fontWeight="bold">
                  {ele.name}
                </Typography>
              </Box>
              <Box color={colors.grey[900]}>
                {ele.role}
              </Box>
              <Box backgroundColor={colors.redAccent[500]} p="5px 10px" borderRadius="4px">
                {ele.channel?.name}
              </Box>
            </Box>;
          })}

        </Grid> */}


        <Grid spacing="5px"></Grid>

      </Grid>

    </Box>
  )
}

export default Dashboard
