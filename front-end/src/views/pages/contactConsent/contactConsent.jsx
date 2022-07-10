        const response = await res.json();
        // setSnackbarMsg(response.msg)
        // setSnackbarOpen(true);
        return console.log(response);

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

