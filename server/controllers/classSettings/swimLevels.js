import dotenv from "dotenv";
import SwimLevels from "../../models/classSettings/swimLevels.js";

dotenv.config();

export const addSwimLevels = async (req, res) => {

    const { name, displayOrder } = req.body;

    try {

        let newSwimLevels = new SwimLevels(
            name, 
            displayOrder
        );
        
        const result = await newSwimLevels.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getSwimLevels = async (req, res) => {
    try {
        const [data, _] = await SwimLevels.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
