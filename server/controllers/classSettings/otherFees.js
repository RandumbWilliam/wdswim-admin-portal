import dotenv from "dotenv";
import OtherFees from "../../models/classSettings/otherFees.js";

dotenv.config();

export const addOtherFees = async (req, res) => {

    const { description, displayOrder, price } = req.body;

    try {

        let newOtherFees = new OtherFees(
            description, 
            displayOrder, 
            price
        );
        
        const result = await newOtherFees.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getOtherFees = async (req, res) => {
    try {
        const [data, _] = await OtherFees.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
