import Express from "express";
import { storeContactConsent } from "../controller/consent_controller";


const route = Express.Router();

route.post('/storeContactConsent', storeContactConsent);

export default route;