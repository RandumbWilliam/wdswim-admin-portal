import dotenv from "dotenv";
import AccountHolder from "../models/accountHolders.js";

dotenv.config();

export const addAccountHolders = async (req, res) => {

    const { contactName, email, phoneNumber, emergencyContact, emergencyPhone, address1, address2, city, province, postalCode, dateCreated, notes } = req.body;

    try {

        let newAccountHolder = new AccountHolder(
            contactName, 
            email, 
            phoneNumber, 
            emergencyContact, 
            emergencyPhone, 
            address1, 
            address2, 
            city, 
            province, 
            postalCode, 
            dateCreated, 
            notes
        );
        
        const result = await newAccountHolder.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getAccountHolder = async (req, res) => {
    try {
        const [data, _] = await AccountHolder.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getOneAccountHolder = async (req, res) => {
    try {
        const { id } = req.body;
        console.log(req.body)
        
        const [data, _] = await AccountHolder.findOne(id);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
