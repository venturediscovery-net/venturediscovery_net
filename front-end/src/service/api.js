import React, { createContext, useState, useEffect, useContext } from "react"


export const postContactConsentForm = async (finalValues, setMessage, setOpen, setSeverity) => {
    const res = await fetch('http://localhost:8000/storeContactConsent', {
        method: 'POST',
        body: JSON.stringify(finalValues),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    const response = await res.json();
    setMessage(response.msg)
    setOpen(true);
    setSeverity(response.severity)
    return response;
};