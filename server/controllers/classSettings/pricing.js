import dotenv from "dotenv";
import Pricing from "../../models/classSettings/pricing.js";

dotenv.config();

export const addPricing = async (req, res) => {

    const { levelId, status, duration, price } = req.body;

    try {

        let newPricing = new Pricing(
            levelId, 
            status, 
            duration, 
            price
        );
        
        const result = await newPricing.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getPricing = async (req, res) => {
    try {
        const [data, _] = await Pricing.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
