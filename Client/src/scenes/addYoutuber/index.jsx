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
    role: "youtuber",
    address: "",
    country: "",
    channel: {
        name: "",
        subscriber: ""
    },
    prices: {
        basic: "",
        standard: "",
        premium: "",
    }
};

const YoutuberSchema = Yup.object().shape({
    name: Yup.string().min(5, "Must be greater than 5 character.").max(25).required("Name must be entered."),
    email: Yup.string().email().required("Email must be entered."),
    password: Yup.string().min(8, "Must be greater than 8 character.").max(20).required("Password must be entered."),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Confirm password must be match be password."),
    phone: Yup.string().min(12, "Must be greater than 12 character.").required("Phone must be entered."),
    dob: Yup.date().required("DOB must be entered."),
    role: Yup.string(),
    address: Yup.string().min(8, "Must be greater than 8 character.").max(50).required("Address must be entered."),
    channel: Yup.object().shape({
        name: Yup.string().min(5, "Must be greater than 5 character.").max(25).required("Channel name must be entered."),
        subscriber: Yup.number().min(5, "Must be greater than 5 character.").required("Channel subscriber name must be entered."),
    }),
    prices: Yup.object().shape({
        basic: Yup.number().min(0).required("Basic price must be entered."),
        standard: Yup.number().min(0).required("Standard price must be entered."),
        premium: Yup.number().min(0).required("Premium price must be entered."),
    })
})

const AddYoutuber = () => {

    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: YoutuberSchema,
        onSubmit: (values, action) => {
            console.log(values);
            axios.post('http://127.0.0.1:8000/api/v1/users/youtubers', values)
                .then(response => {
                    setAlert(true);
                    action.resetForm();
                    setTimeout(() => {return navigate(`/admin/youtuber`)}, 1500);
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
                    Success! Youtuber Registered Successfully
                </Alert>
            )}

            <Header title="CREATE Youtubers" subtitle="Create a youtuber profile." />

            <Box p="2px 40px">
                <form onSubmit={handleSubmit}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px">
                        <TextField
                            fullWidth
                            color="secondary"
                            label="Name"
                            variant="filled"
                            className="field-style"
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
                            color="secondary"
                            label="Basic Price"
                            type="number"
                            variant="filled"
                            className="field-style"
                            name="prices.basic"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.prices.basic}
                            error={touched.prices?.basic && errors.prices?.basic}
                            helperText={touched.prices?.basic && errors.prices?.basic}
                            style={{ width: "30%" }}
                        />

                        <TextField
                            color="secondary"
                            label="Standard Price"
                            type="number"
                            variant="filled"
                            className="field-style"
                            name="prices.standard"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.prices.standard}
                            error={touched.prices?.standard && errors.prices?.standard}
                            helperText={touched.prices?.standard && errors.prices?.standard}
                            style={{ width: "30%" }}
                        />

                        <TextField
                            color="secondary"
                            label="Premium Price"
                            type="number"
                            variant="filled"
                            className="field-style"
                            name="prices.premium"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.prices.premium}
                            error={touched.prices?.premium && errors.prices?.premium}
                            helperText={touched.prices?.premium && errors.prices?.premium}
                            style={{ width: "30%" }}
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

                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="10px" m="40px 0 0 0">
                        <TextField
                            fullWidth
                            color="secondary"
                            label="Channel Name"
                            variant="filled"
                            className="field-style"
                            name="channel.name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.channel.name}
                            error={touched.channel?.name && errors.channel?.name}
                            helperText={touched.channel?.name && errors.channel?.name}
                            width=""
                        />

                        <TextField
                            color="secondary"
                            label="Total Subscriber"
                            type="number"
                            variant="filled"
                            className="field-style"
                            name="channel.subscriber"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.channel.subscriber}
                            error={touched.channel?.subscriber && errors.channel?.subscriber}
                            helperText={touched.channel?.subscriber && errors.channel?.subscriber}
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

export default AddYoutuber;
