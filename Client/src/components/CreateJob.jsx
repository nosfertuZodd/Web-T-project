import { React, useState } from 'react'
import { TextField, Typography, MenuItem, Alert, Button } from "@mui/material"
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const initialValues = {
    title: "",
    description: "",
    preferAudience: "",
    audiancePool: "",
    clipLength: "",
    budget: "",
    file: "",
};

const jobSchema = Yup.object().shape({
    title: Yup.string().min(5).max(25).required("Name must be entered."),
    description: Yup.string().min(5).required("Description must be entered."),
    preferAudience: Yup.string().required("Prefer Audience must be entered."),
    budget: Yup.number().required("Prefer Audience must be entered.").min(10),
    clipLength: Yup.number().required("Clip Length must be entered.").min(30).max(180),
    audiancePool: Yup.number().required("Audiance Pool must be entered.").min(0),
    file: Yup.string(),
})


const CreateJob = () => {

    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();
    

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: jobSchema,
        enableReinitialize : true,
        onSubmit: (values, action) => {
            const profile = JSON.parse(window.localStorage.getItem('user'));
            // console.log(profile)
            const obj = {
                userId: profile._id,
                ...values
            } 

            console.log(obj)
            
            axios.post('http://127.0.0.1:8000/api/v1/jobs', obj)
                .then(response => {
                    console.log(response);
                    setAlert(true);
                    action.resetForm();
                    setTimeout(() => { return navigate(`/client`) }, 1500);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    });

    return (
        <>
            {alert && (
                <Alert
                    onClose={() => {
                        setAlert(false);
                    }}
                    severity="success"
                >
                    Success! Job posted Successfully.
                </Alert>
            )}

            <div className="container justify-center alignItem-center mt-5 mb-5" style={{ border: '3px solid #f1f1f1', width: '80%', height: '400px', borderRadius: "10px" }}>
                <Typography className="pt-3" variant="h4" color="#F4263E" style={{ fontWeight: "bold" }}>
                    Post a Job
                </Typography>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="row align-items-start">
                        <div className="col-4 px-4 col-line">
                            <TextField
                                margin="normal"
                                required
                                // fullWidth
                                label="Job Title"
                                name="title"
                                style={{ width: 310 }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.title}
                                error={touched.title && errors.title}
                                helperText={touched.title && errors.title}
                            />

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Job Description"
                                name="description"
                                multiline
                                rows={6}
                                style={{ width: 310 }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.description}
                                error={touched.description && errors.description}
                                helperText={touched.description && errors.description}
                            />

                        </div>
                        <div className="col-4 px-4 mt-3 col-line">

                            <TextField
                                // fullWidth
                                style={{ width: 310 }}
                                // labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                name="preferAudience"
                                label="Prefer Audience"
                                select
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.preferAudience}
                                error={touched.preferAudience && errors.preferAudience}
                                helperText={touched.preferAudience && errors.preferAudience}
                            >
                                <MenuItem key="2" value={"Child"}>Child</MenuItem>
                                <MenuItem key="3" value={"Teen"}>Teen</MenuItem>
                                <MenuItem key="4" value={"Adult"}>Adult</MenuItem>
                                <MenuItem key="4" value={"All"}>All</MenuItem>
                            </TextField>

                            <TextField
                                margin="normal"
                                required
                                type="number"
                                // fullWidth
                                label="Audience Pool"
                                name="audiancePool"
                                style={{ width: 310, marginTop: "35px" }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.audiancePool}
                                error={touched.audiancePool && errors.audiancePool}
                                helperText={touched.audiancePool && errors.audiancePool}
                            />

                            <TextField
                                margin="normal"
                                required
                                type="number"
                                // fullWidth
                                label="Video Length"
                                name="clipLength"
                                style={{ width: 310, marginTop: "30px" }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.clipLength}
                                error={touched.clipLength && errors.clipLength}
                                helperText={touched.clipLength && errors.clipLength}
                            />

                        </div>
                        <div className="col-4 px-4 col-line">

                            <TextField
                                margin="normal"
                                required
                                type="number"
                                // fullWidth
                                label="Enter Job Budget"
                                name="budget"
                                style={{ width: 310 }}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.budget}
                                error={touched.budget && errors.budget}
                                helperText={touched.budget && errors.budget}
                            />

                            <Button variant="outlined" component="label" style={{ width: 310, height: 50, marginTop: "25px" }}>
                                Upload a File
                                <input hidden accept="image/*" multiple type="file"/>
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 10, mb: 2, mx: 20 }}
                                style={{ backgroundColor: "#F4263E", width: 150, height: 50, fontWeight: "bold" }}
                            >
                                <WorkIcon style={{ marginRight: "6px" }} /> Post a Job
                            </Button>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateJob