import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, TextField, Button, Alert, Avatar, Typography, useTheme, Grid, MenuItem } from "@mui/material";
import { LockOutlined } from '@mui/icons-material';
import axios from "axios";
import { tokens } from "../../theme";
import './style.css'
import { Link } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography variant="body2" color="#db4f4a" align="center" {...props}>
      {'Copyright © '}
      <Link color="#db4f4a" to="/">
        Host Ad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


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
  role: Yup.string().required(),
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
      console.log(values)
      axios.post('http://127.0.0.1:8000/api/v1/users/signup', values)
        .then(response => {
          setAlert(true);
          action.resetForm();
          setTimeout(() => { return navigate(`/login`) }, 1000);
        })
        .catch(error => {
          console.log(error);
        })
    },
  });


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="background">
      <Box p="15px 350px" justifyContent="center" alignItems="center">

{alert && (
  <Alert
    onClose={() => {
      setAlert(false);
    }}
    severity="success"
    m="10px 0px"
  >
    Success! User Registered Successfully
  </Alert>
)}


<Box className="bg">

  <center>
    <Avatar style={{ backgroundColor: colors.redAccent[500], marginBottom: "10px" }} sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlined />
    </Avatar>
    <Typography component="h1" variant="h5" color="#db4f4a" style={{ marginBottom: "10px" }}>
      Sign Up
    </Typography>
  </center>

  <Box alignItems="center" justifyContent="center">
    <form onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="space-between" alignItems="center" gap="30px" >
        <TextField
          fullWidth
          margin="normal"
          required
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
          margin="normal"
          required
          label="Email"
          type="email"
          name="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px" m="10px 0 0 0">
        <TextField
          fullWidth
          margin="normal"
          required
          label="Password"
          type="password"
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
          margin="normal"
          required
          type="password"
          name="confirmPassword"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.confirmPassword}
          error={touched.confirmPassword && errors.confirmPassword}
          helperText={touched.confirmPassword && errors.confirmPassword}
        />
      </Box>

      <TextField
        fullWidth
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        name="role"
        label="Select Account type"
        select
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.role}
        error={touched.role && errors.role}
        helperText={touched.role && errors.role}
        style ={{marginTop: "20px"}}
      >
        <MenuItem value={"youtuber"}>Youtuber</MenuItem>
        <MenuItem value={"client"}>Client</MenuItem>
      </TextField>


      <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px" m="10px 0 0 0">
        <TextField
          fullWidth
          label="Phone"
          margin="normal"
          required
          name="phone"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phone}
          error={touched.phone && errors.phone}
          helperText={touched.phone && errors.phone}
        />

        <TextField
          fullWidth
          margin="normal"
          required
          type="date"
          name="dob"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.dob}
          error={touched.dob && errors.dob}
          helperText={touched.dob && errors.dob}
        />
      </Box>


      <Box display="flex" justifyContent="space-between" alignItems="center" gap="10px" m="10px 0 0 0">
        <TextField
          fullWidth
          label="Address"
          margin="normal"
          required
          name="address"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.address}
          error={touched.address && errors.address}
          helperText={touched.address && errors.address}
          width=""
        />

        <TextField
          label="Country"
          margin="normal"
          required
          name="country"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.country}
          error={touched.country && errors.country}
          helperText={touched.country && errors.country}
          style={{ width: "30%" }}
        />

      </Box>

      <center>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{ backgroundColor: colors.redAccent[500], height: "45px", width: "100%" }}
        >
          Register
        </Button>
      </center>

      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link to="/login" variant="body2">
            {"If you have an account? Login"}
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 1, mb: 2 }} />

    </form>
  </Box>

</Box>

</Box>
    </div>
  );
};

export default AddClient;
