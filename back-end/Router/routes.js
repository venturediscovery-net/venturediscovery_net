import Express from "express";
import { storeContactConsent } from "../controller/consent_controller.js";
import { storeSurveyResponse } from "../controller/survey_response_controller.js";


const route = Express.Router();

route.post('/storeContactConsent', storeContactConsent);
route.post('/storeSurveyResponse', storeSurveyResponse);

export default route;