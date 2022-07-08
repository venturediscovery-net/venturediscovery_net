import { response } from "express"
import consent from "../model/consent"

export const storeContactConsent = async (request, response) => {
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let email = request.body.email;
    let userType = request.body.userType;
    let userTypeSelected = request.body.userTypeSelected;

    try {

        const exist = await consent.findOne({email:email});

        
        if(exist){
            response.status(200).json('user already exists!');
            return;
        }

        const newUser = await User.save(
            {email:email},
            {
                writeConcern: 
                
                {
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    userType : userType,
                    userTypeSelected : userTypeSelected,
                }
            }
        );
        response.status(200).json('user added sucessfully!!');

    } catch {
        response.status(500).json(error);
    }
} 