import { React, useState, useContext } from 'react';
import { LockOutlined } from '@mui/icons-material';
import { Button, Avatar, CssBaseline, TextField, Link, Paper, Box, Grid, ThemeProvider, Typography, MenuItem, Alert, useTheme } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import bg from '../../img/social-4.jpg'
import { tokens } from "../../theme";
// import UserContext from '../../Context/UserContext'

function Copyright(props) {
  return (
    <Typography variant="body2" color="#db4f4a" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
        Host Ad
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const initialValues = {
  email: "",
  password: "",
  role: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email must be entered."),
  password: Yup.string().min(6).max(25).required("Password must be entered."),
  role: Yup.string().required("Role must be entered")
})


export default function Login() {

  const [alert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  // const [auth, setAuth] = useState("");
  const navigate = useNavigate();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, action) => {
      console.log(values)
      axios.post('http://127.0.0.1:8000/api/v1/users/login', values)
        .then(response => {
          setAlert(true);
          action.resetForm();
          let auth = response.data.data.user.role;

          // const user = {
          //   id: response.data.data.user._id,
          //   name: response.data.data.user.name
          // }

          const user = response.data.data.user;

          window.localStorage.setItem("user", JSON.stringify(user));

          setTimeout(() => {

              if(auth === "admin") return navigate("/admin")
              if(auth === "client") return navigate("/client")
              if(auth === "youtuber") return navigate("/youtuber")
            
          }, 1500);
        })
        .catch(error => {
          setError(true);
          setTimeout(() => { return navigate(`/login`) }, 1500);
        })
    },
  });



  return (
    <ThemeProvider theme={theme}>

      {alert && (
        <Alert
          onClose={() => {
            setAlert(false);
          }}
          variant="filled"
          severity="success"
        >
          Success! User Login Successfully
        </Alert>
      )}

      {error && (
        <Alert
          onClose={() => {
            setError(false);
          }}
          variant="filled"
          severity="error"
        >
          Fail! Please enter correct email & password and select correct role.
        </Alert>
      )}


      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar style={{ backgroundColor: colors.redAccent[500] }} sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5" color="#db4f4a" >
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                name="role"
                label="Select a Role"
                select
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role}
                error={touched.role && errors.role}
                helperText={touched.role && errors.role}
              >
                <MenuItem value={"admin"}>Admin</MenuItem>
                <MenuItem value={"youtuber"}>Youtuber</MenuItem>
                <MenuItem value={"client"}>Client</MenuItem>
              </TextField>

              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: colors.redAccent[500] }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
