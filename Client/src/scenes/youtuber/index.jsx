import { React, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import { Box, useTheme, Alert } from "@mui/material";
import { Delete, Edit, Person } from "@mui/icons-material";
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
    Button,
    Stack
} from "@mui/material";
import Header from "../../components/Header";

const Youtuber = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [tableData, setTableData] = useState([{}]);
    const [alert, setAlert] = useState(false);

    const deleteUser = (id) => {
        axios
            .delete(`http://127.0.0.1:8000/api/v1/users/${id}`)
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
            .get("http://127.0.0.1:8000/api/v1/users/youtubers")
            .then((response) => {
                setTableData(response.data.data.doc);
            })
            .catch((e) => {
                console.log("Error");
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
                    > Success! User Deleted Successfully
                    </Alert>
                )}
                <Header title="YOUTUBERS" subtitle="Manage the Youtuber Details" />

                <Box display="flex" justifyContent="flex-end" m="0px 25px">
                    <Link style={{ textDecoration: "none" }} to="/admin/create-youtuber">
                        <Stack direction="row" spacing={3}>
                            <Button variant="contained" style={{ backgroundColor: colors.redAccent[500], fontSize: "15px", fontWeight: 700 }} endIcon={<Person />}>
                                Create
                            </Button>
                        </Stack>
                    </Link>
                </Box>
            </Box>

            <Box p="5px 25px" m="10px 0 0 0" height="60vh">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="medium" aria-label="client table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left"> Youtuber Id</StyledTableCell>
                                <StyledTableCell align="left">Name</StyledTableCell>
                                <StyledTableCell align="left">Email</StyledTableCell>
                                <StyledTableCell align="left">Phone</StyledTableCell>
                                <StyledTableCell colSpan="3" align="center">Prices</StyledTableCell>
                                <StyledTableCell align="left">Channel Name</StyledTableCell>
                                <StyledTableCell align="left">Subscriber</StyledTableCell>
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
                                    <TableCell align="left">{row.name}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">{row.phone}</TableCell>

                                    <TableCell align="left">{row.prices?.basic}</TableCell>
                                    <TableCell align="left">{row.prices?.standard}</TableCell>
                                    <TableCell align="left">{row.prices?.premium}</TableCell>
                                    <TableCell align="center">{row.channel?.name}</TableCell>
                                    <TableCell align="center">{row.channel?.subscriber}</TableCell>

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
                                            <div style={{ cursor: "pointer" }}>
                                                <Edit />
                                            </div>
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
            </Box>

        </>
    );
};

export default Youtuber;
