import React, { useContext } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert"
// import { makeStyles } from "@mui/material/styles"
import { SnackbarContext } from '../../context/snackbarContext';
import { useNavigate } from 'react-router-dom';

const MySnackbar = () => {
    const navigate = useNavigate();

    const navigateTo = (location) => {
        navigate(location);
    };

    // Contexts
    const { open, severity, message, fillSurvey, setOpen } = useContext(SnackbarContext);
    
    const handleClose = (reason) => {
        if (reason === "clickaway") {
            return
        } 
        if (fillSurvey === true) {
            navigateTo("/survey");
        } else if (fillSurvey === false && (message === "User added sucessfully!!" || message === "User already exists, the details are updated!")) {
            navigateTo("/home");
        }
        setOpen(false)
    }

    return (
        // <div className={classes.root}>
        <Snackbar open={open} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}
export default MySnackbar;