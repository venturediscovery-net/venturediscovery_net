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
        // await newConsent.save();

        if (exist) {
            response.status(200).json({ msg: 'User already exists, the details are updated!', msgType: "info" });
        } else {
            response.status(200).json('User added sucessfully!!');
        }

    } catch (error) {
        console.log(error);
        response.status(500).json(error);
    }
} 