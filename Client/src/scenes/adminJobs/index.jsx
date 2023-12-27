import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { Box, useTheme, Alert } from "@mui/material";
import { Delete, Person } from "@mui/icons-material";
import { tokens } from "../../theme";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    tableCellClasses,
    styled,
    Stack,
    Button
} from "@mui/material";
import Header from "../../components/Header";

const AdminJobs = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [tableData, setTableData] = useState([{}]);
    const [alert, setAlert] = useState(false);

    const deleteUser = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/v1/jobs`)
            .then((response) => {
                setAlert(true);
                getData();
            })
            .catch((error) => {
                console.log(error);
                setAlert(false);
            });
    };

    const getData = () => {
        axios
            .get("http://127.0.0.1:8000/api/v1/jobs")
            .then((response) => {
                setTableData(response.data.data.myJobs);
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: colors.redAccent[500],
            color: colors.grey[900],
            fontSize: 15,
            fontWeight: 'bold',
            textTransform: 'capitilize'
        }
    }));

    return (
        <>
            <Box m="15px">
                {alert && (
                    <Alert
                        onClose={() => {
                            setAlert(false);
                        }}
                        severity="success"
                    >
                        Success! User Deleted Successfully
                    </Alert>
                )}
                <Header title="CLIENT" subtitle="Manage the Client Details" />

                <Box display="flex" justifyContent="flex-end" m="0px 25px">
                    <Link style={{ textDecoration: "none" }} to="/admin/create-client">
                        <Stack direction="row" spacing={3}>
                            <Button variant="contained" style={{ backgroundColor: colors.redAccent[500], fontSize: "15px", fontWeight: 700 }} endIcon={<Person />}>
                                Create
                            </Button>
                        </Stack>
                    </Link>
                </Box>
            </Box>

            <Box p="5px 25px" m="10px 0 0 0" height="60vh">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="medium" aria-label="client table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="left"> Job Id</StyledTableCell>
                                    <StyledTableCell align="left"> Posted</StyledTableCell>
                                    <StyledTableCell align="left">Title</StyledTableCell>
                                    <StyledTableCell align="left">Budget</StyledTableCell>
                                    <StyledTableCell align="left">Audience</StyledTableCell>
                                    <StyledTableCell align="left">Status</StyledTableCell>
                                    <StyledTableCell align="left">Audiance Pool</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{ backgroundColor: colors.primary[400] }}>
                                {tableData.map((row) => (
                                    <TableRow
                                        key={row._id + row.name}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row._id}
                                        </TableCell>
                                        <TableCell align="left">{row.userId?.name}</TableCell>
                                        <TableCell align="left">{row.title}</TableCell>
                                        <TableCell align="left">{row.budget}</TableCell>
                                        <TableCell align="center">{row.preferAudience}</TableCell>
                                        <TableCell align="left">{row.status}</TableCell>
                                        <TableCell align="left">{row.audiancePool}</TableCell>
                                        <TableCell align="center">
                                            <div
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    gap: 10,
                                                    border: "none",
                                                }}
                                            >
                                                <div
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        deleteUser(row._id);
                                                    }}
                                                >
                                                    <Delete />
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </>
    )
}

export default AdminJobs
