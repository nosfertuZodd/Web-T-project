import { React, useState, useEffect } from 'react'
import { TextField, Typography, MenuItem, Alert, Button } from "@mui/material"
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

let initialValues = {
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


const EditJob = () => {

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

    const navigate = useNavigate();
    let { id } = useParams();
    id = id.split(":")[0];
    // var msg = ""


    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: jobSchema,
        enableReinitialize: true,
        onSubmit: (values, action) => {
            const profile = JSON.parse(window.localStorage.getItem('user'));
            // console.log(profile)
            const obj = {
                userId: profile._id,
                ...values
            }

            axios.patch(`http://127.0.0.1:8000/api/v1/jobs/${id}`, obj)
                .then(response => {
                    console.log(response);
                    // msg = "Success! Job Updated Successfully."
                    setAlert(true);
                    action.resetForm();
                    setTimeout(() => { return navigate(`/client`) }, 1500);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    });


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/jobs/update/${id}`)
            .then(res => {
                let { title, description, clipLength, audiancePool, preferAudience, budget } = res.data.data.doc;

                setData({ title, description, clipLength, audiancePool, preferAudience, budget });
                setBool(true);
                initialValues = data;
            })
            .catch(e => console.log(e))

    }, [bool]);

    const deleteJob = () => {
        axios.delete(`http://127.0.0.1:8000/api/v1/jobs/${id}`)
        .then(response => {
            console.log(response);
            // msg = "Success! Job Delete Successfully."
            setAlert(true);
            setTimeout(() => { return navigate(`/client`) }, 1500);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <>
            {alert && (
                <Alert
                    onClose={() => {
                        setAlert(false);
                    }}
                    severity="success"
                >
                    {"Task Done Successfully."}
                </Alert>
            )}

            <div className="container justify-center alignItem-center mt-5 mb-5" style={{ border: '3px solid #f1f1f1', width: '80%', height: '400px', borderRadius: "10px" }}>
                <div className="row">
                    <div className="col-9">
                        <Typography className="pt-3" variant="h4" color="#F4263E" style={{ fontWeight: "bold" }}>
                            Post a Job
                        </Typography>
                    </div>
                    <div className="col-3">

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, mx: 13 }}
                            style={{ backgroundColor: "#F4263E", height: "40px", width: "55%", borderRadius: "5px", fontWeight: "bold", fontFamily: "cabin" }}
                            onClick={deleteJob}
                        >
                            {"Delete a Post"}
                        </Button>
                    </div>
                        <hr />
                </div>
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

                            <Button disabled variant="outlined" component="label" style={{ width: 310, height: 50, marginTop: "25px" }}>
                                Upload a File
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 10, mb: 2, mx: 8 }}
                                style={{ backgroundColor: "#F4263E", width: 250, height: 50, fontWeight: "bold" }}
                            >
                                <WorkIcon style={{ marginRight: "6px" }} /> Update Job Details
                            </Button>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditJob