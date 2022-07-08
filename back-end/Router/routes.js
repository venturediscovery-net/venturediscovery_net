import express from "express";
import { storeContactConsent } from "../controller/consent_controller";

route.post('/storeContactConsent', storeContactConsent);