import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Alert } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    dob: "",
    role: "client",
    address: "",
    country: "",
};

const clientSchema = Yup.object().shape({
    name: Yup.string().min(5).max(25).required("Name must be entered."),
    email: Yup.string().email().required("Email must be entered."),
    password: Yup.string().min(8).max(20).required("Password must be entered."),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Confirm password must be match be password."),
    phone: Yup.string().min(12).required("Phone must be entered."),
    dob: Yup.date().required("DOB must be entered."),
    role: Yup.string(),
    address: Yup.string().min(8).max(50).required("Address must be entered."),
    country: Yup.string().min(5).max(25).required("Country must be entered."),
})

const AddClient = () => {

    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: clientSchema,
        onSubmit: (values, action) => {
            axios.post('http://127.0.0.1:8000/api/v1/users/signup', values)
                .then(response => {
                    setAlert(true);
                    action.resetForm();
                    setTimeout(() => {return navigate(`/admin/client`)}, 1500);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    });

    return (
        <Box m="20px">

            {alert && (
                <Alert
                    onClose={() => {
                        setAlert(false);
                    }}
                    severity="success"
                >
                    Success! User Registered Successfully
                </Alert>
            )}

            <Header title="CREATE CLIENT" subtitle="Create a client profile." />

            <Box p="2px 40px">
                <form onSubmit={handleSubmit}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px">
                        <TextField
                            fullWidth
                            color="secondary"
                            variant="filled"
                            className="field-style"
                            label="Name"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.name}
                            error={touched.name && errors.name}
                            helperText={touched.name && errors.name}
                        />

                        <TextField
                            fullWidth
                            color="secondary"
                            label="Email"
                            type="email"
                            variant="filled"
                            className="field-style"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            error={touched.email && errors.email}
                            helperText={touched.email && errors.email}
                        />
                    </Box>

                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px" m="40px 0 0 0">
                        <TextField
                            fullWidth
                            color="secondary"
                            label="Password"
                            type="password"
                            variant="filled"
                            className="field-style"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            error={touched.password && errors.password}
                            helperText={touched.password && errors.password}
                        />

                        <TextField
                            fullWidth
                            label="Confirm Password"
                            color="secondary"
                            type="password"
                            variant="filled"
                            className="field-style"
                            name="confirmPassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirmPassword}
                            error={touched.confirmPassword && errors.confirmPassword}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                    </Box>

                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px" m="40px 0 0 0">
                        <TextField
                            fullWidth
                            color="secondary"
                            label="Phone"
                            variant="filled"
                            className="field-style"
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.phone}
                            error={touched.phone && errors.phone}
                            helperText={touched.phone && errors.phone}
                        />

                        <TextField
                            fullWidth
                            color="secondary"
                            type="date"
                            variant="filled"
                            className="field-style"
                            name="dob"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.dob}
                            error={touched.dob && errors.dob}
                            helperText={touched.dob && errors.dob}
                        />
                    </Box>


                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="10px" m="40px 0 0 0">
                        <TextField
                            fullWidth
                            color="secondary"
                            label="Address"
                            variant="filled"
                            className="field-style"
                            name="address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.address}
                            error={touched.address && errors.address}
                            helperText={touched.address && errors.address}
                            width=""
                        />

                        <TextField
                            color="secondary"
                            label="Country"
                            variant="filled"
                            className="field-style"
                            name="country"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.country}
                            error={touched.country && errors.country}
                            helperText={touched.country && errors.country}
                            style={{ width: "30%" }}
                        />

                    </Box>

                    <Box display="flex" justifyContent="flex-end" m="25px 0 0 0">
                        <Button type="submit" style={{ backgroundColor: "#F4263E" }} size="large" variant="contained">
                            Submit
                        </Button>
                    </Box>

                </form>
            </Box>
        </Box>
    );
};

export default AddClient;
