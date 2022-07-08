import { response } from "express"
import consent from "../model/consent"

export const storeContactConsent = async (request, response) => {
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let userType = request.body.userType;
    let userTypeSelected = request.body.userTypeSelected;

    // try {

    //     const exist = 

    // } catch {
    //     response.status(500).json(error);
    // }
}