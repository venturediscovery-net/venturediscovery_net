// import { response } from "express"
import surveyResponse from "../model/survey_response.js";

export const storeSurveyResponse = async (request, response) => {
    try {
        const newResponse = await surveyResponse.update({ 1: request.body['1'] }, request.body, { upsert: true });
        response.status(200).json('Survey Responses Recieved Successfully!');
    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
} 