import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    let emailregex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    console.log(data.get("email"));
    console.log(!emailregex.test(data.get("email")));
    var checkName = document.getElementById("firstandlast");
    var checkEmail = document.getElementById("alert");
    var checkPassword = document.getElementById("passworderror");
    if (
      data.get("firstName").length === 0 ||
      data.get("lastName").length === 0
    ) {
      checkName.style.display = "flex";
    } else {
      if (!emailregex.test(data.get("email"))) {
        checkName.style.display = "none";
        checkEmail.style.display = "flex";
      } else {
        checkEmail.style.display = "none";
        if (data.get("password").length < 8) {
          checkName.style.display = "none";
          checkPassword.style.display = "flex";
        } else {
          checkPassword.style.display = "none";
          document.getElementById("sucessful").style.display = "flex";
          storageElement();
          makeEmpty();
        }
      }
    }
  };
  function storageElement(){
      var object={'email':document.getElementById('email').value,'password':document.getElementById('password').value}
      localStorage.setItem('login',JSON.stringify(object));
  }
  function makeEmpty() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    setTimeout(() => {
      document.getElementById("sucessful").style.display = "none";
    }, 5000);
  }
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Alert severity="error" id="alert">
            <AlertTitle>Error</AlertTitle>
            Check Your — <strong>Email Address</strong>
          </Alert>
          <Alert severity="error" id="firstandlast">
            <AlertTitle>Error</AlertTitle>
            Check Your — <strong>First and Last Name</strong>
          </Alert>
          <Alert severity="error" id="passworderror">
            <AlertTitle>Error</AlertTitle>
            Password is <strong>to small</strong>
          </Alert>
          <Alert severity="success" id="sucessful">
            <AlertTitle>Success</AlertTitle>
            Account is created Successfully &nbsp;
            <Link href="/signin">
              <strong>check it out!</strong>
            </Link>
          </Alert>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  className="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
