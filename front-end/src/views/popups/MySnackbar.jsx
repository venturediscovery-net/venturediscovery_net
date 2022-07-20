import React, { useContext } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from "@mui/material/Alert"
// import { makeStyles } from "@mui/material/styles"
import { SnackbarContext } from '../../context/snackbarContext';

// const Alert = (props) => {
//     return <MuiAlert elevation={6} variant="filled" {...props} />
// }

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: "100%",
//         "& > * + *": {
//             marginTop: theme.spacing(2)
//         }
//     }
// }))

const MySnackbar = () => {
    // Contexts
    const { open, severity, message, handleClose } = useContext(SnackbarContext)
    // const classes = useStyles()

    return (
        // <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    )
}
export default MySnackbar;