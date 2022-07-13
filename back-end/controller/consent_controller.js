// import { response } from "express"
import consent from "../model/consent.js";

export const storeContactConsent = async (request, response) => {
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let userType = request.body.userType;
    let userTypeSelected = request.body.userTypeSelected;

    try {

        const exist = await consent.findOne({ email: email });

        const newConsent = await consent.update(
            { email: email },

            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                userType: userType,
                userTypeSelected: userTypeSelected,
            }, { upsert: true });

        if (exist) {
            response.status(200).json({ msg: 'User already exists, the details are updated!', severity: "info" });
        } else {
            response.status(200).json({ msg: 'User added sucessfully!!', severity: "success" });
        }

    } catch (error) {
        console.log(error);
        response.status(500).json({ msg: error, severity: "error" });
    }
} 