import { React, useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Alert } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";

let initialValue = {
    _id: '',
    name: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    country: "",
}

const clientSchema = Yup.object().shape({
    _id: Yup.string(),
    name: Yup.string().min(5).max(25).required("Name must be entered."),
    email: Yup.string().email().required("Email must be entered."),
    phone: Yup.string().min(12).required("Phone must be entered."),
    dob: Yup.date().required("DOB must be entered."),
    address: Yup.string().trim().min(8).max(50).required("Address must be entered."),
    country: Yup.string().min(5).trim().max(25).required("Country must be entered."),
})

const UpdateClient = () => {

    const [alert, setAlert] = useState(false);
    const [bool, setBool] = useState(false);
    const [data, setData] = useState({
        _id: '',
        name: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        country: "",
    });
    const naviagate = useNavigate();
    //set client id
    let {id} = useParams();
    id = id.split(":")[1];
    // console.log(id);

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        enableReinitialize : true,
        initialValues: initialValue,
        validationSchema: clientSchema,
        onSubmit: (values, action) => {
            axios.patch(`http://127.0.0.1:8000/api/v1/users/${id}`, values)
                .then(response => {
                    setAlert(true);
                    action.resetForm();
                    setTimeout(() => {return naviagate('/admin/client')}, 1000);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    });
    console.log(initialValue)

    useEffect(()=> {
        axios.get(`http://127.0.0.1:8000/api/v1/users/${id}`)
        .then(res => {
            let {_id, name, email, phone, dob, address, country} = res.data.data.doc;
       
            dob = new Date(dob).toISOString().split('T')[0];
            if(address === undefined) address="";
            if(country === undefined) country = "";

            setData({_id, name, email, phone, dob, address, country});
            setBool(true);
            initialValue = data;
        })
        .catch(e => console.log(e))

    }, [bool]);

    return (
        <Box m="20px">

            {alert && (
                <Alert
                    onClose={() => {
                        setAlert(false);
                    }}
                    severity="success"
                >
                    Success! User Updated Successfully.
                </Alert>
            )}

            <Header title="UPDATE CLIENT" subtitle="Manage a client profile." />

            <Box p="2px 40px">
                <form onSubmit={handleSubmit}>

                <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px">
                        <TextField
                            fullWidth
                            color="secondary"
                            label="Client ID"
                            variant="filled"
                            className="field-style"
                            name="id"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values._id}
                            disabled={true}
                        />
                    </Box>

                    <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px" m="40px 0 0 0">
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
                            Update Client
                        </Button>
                    </Box>

                </form>
            </Box>
        </Box>
    );
};

export default UpdateClient;
