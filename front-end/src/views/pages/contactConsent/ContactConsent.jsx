import React, { createContext, useState, useEffect, useContext } from "react"
import { useNavigate } from 'react-router-dom';
// import Avatar from '@mui/material/Avatar';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Container, CardMedia, Typography, Box, Grid, Link, Radio, RadioGroup, FormControl, FormLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import navLogo from '../../../assets/brand/navLogo.svg';
import MySnackbars from '../../popups/MySnackbar';
import { SnackbarContext } from "../../../context/snackbarContext";
import { postContactConsentForm } from '../../../service/api';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                venturediscovery.net
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    userType: "",
    userTypeSelected: "",
    allowExtraEmails: false,
}

export const useFormControls = () => {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const validate = (fieldValues = values) => {
        let temp = { ...errors }

        if ("firstName" in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."

        if ("lastName" in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."

        if ("userType" in fieldValues)
            temp.userType = fieldValues.userType ? "" : "This field is required."

        if ("userTypeSelected" in fieldValues)
            temp.userTypeSelected = fieldValues.userTypeSelected ? "" : "This field is required."

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "This field is required."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "Email is not valid."
        }

        if ("message" in fieldValues)
            temp.message =
                fieldValues.message ? "" : "This field is required."

        setErrors({
            ...temp
        });
    }

    const handleInputValue = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({ [name]: value });
    };

    const handleCheckBox = (event) => {
        const checkBoxData = event.target;
        setValues({
            ...values,
            [checkBoxData.name]: checkBoxData.checked
        })
    }


    const formIsValid = (fieldValues = values) => {
        const isValid =
            fieldValues.firstName &&
            fieldValues.lastName &&
            fieldValues.email &&
            fieldValues.userType &&
            fieldValues.userTypeSelected &&
            fieldValues.allowExtraEmails &&
            Object.values(errors).every((x) => x === "");

        return isValid;
    };


    return {
        handleInputValue,
        handleCheckBox,
        formIsValid,
        errors,
        values
    };
}

export default function ContactConsent() {

    const {
        handleInputValue,
        handleCheckBox,
        formIsValid,
        errors,
        values
    } = useFormControls();

    // Context for Snackbar
    const {
        setOpen,
        setSeverity,
        setMessage,
    } = useContext(SnackbarContext);

    const navigate = useNavigate();

    const navigateTo = (location) => {
        navigate(location);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (formIsValid(values)) {
            const res = await postContactConsentForm(values, setMessage, setOpen, setSeverity);

            if (res) {
                setTimeout(() => { navigateTo("/home"); }, 3000);
            }
        }
        else {
            console.log(values);
            setOpen(true);
            setMessage("Fill all the details!");
            setSeverity("warning");
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{ width: 350 }}
                        image={navLogo}
                        alt="Logo"
                    />
                    {/* <Typography component="h1" variant="h5">
                        Consent to Update
                    </Typography> */}
                    <FormControl component="form" noValidate onSubmit={handleFormSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    onBlur={handleInputValue}
                                    onChange={handleInputValue}
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    {...(errors["firstName"] && { error: true, helperText: errors["firstName"] })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    onBlur={handleInputValue}
                                    onChange={handleInputValue}
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    {...(errors["lastName"] && { error: true, helperText: errors["lastName"] })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    onBlur={handleInputValue}
                                    onChange={handleInputValue}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    {...(errors["email"] && { error: true, helperText: errors["email"] })}

                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel required>
                                    I am a -
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="userType"
                                    onChange={handleInputValue}
                                    {...(errors["userType"] && { error: true, helperText: errors["userType"] })}
                                >
                                    <FormControlLabel value="Tech student / professional" control={<Radio />} label="Tech student / professional" />
                                    <FormControlLabel value="Entrepreneur" control={<Radio />} label="Entrepreneur" />
                                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel required>
                                    Would love to participate as a -
                                </FormLabel>
                                <RadioGroup

                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="userTypeSelected"
                                    // onChange={(event) => setUserTypeSelected(event.target.value)}>
                                    onChange={handleInputValue}
                                    {...(errors["userTypeSelected"] && { error: true, helperText: errors["userTypeSelected"] })}
                                >
                                    <FormControlLabel value="Beta user only" control={<Radio />} label="Beta user only" />
                                    <FormControlLabel value="Developer testing my product with Beta users" control={<Radio />} label="Developer testing my product with Beta users" />
                                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                                </RadioGroup>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    required
                                    control={
                                        <Checkbox
                                            // checked="false"
                                            name="allowExtraEmails"
                                            color="primary"
                                            onChange={handleCheckBox}
                                            {...(errors["allowExtraEmails"] && { error: true, helperText: errors["allowExtraEmails"] })} />}
                                    label="I want to receive updates via email once the platform is built.*"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                        <MySnackbars />
                    </FormControl>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider >
    );
}