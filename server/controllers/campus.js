import dotenv from "dotenv";
import Campus from "../models/campus.js";

dotenv.config();

export const addCampus = async (req, res) => {

    const { campusName, status } = req.body;

    try {

        let newCampus = new Campus(
            campusName, 
            status
        );
        
        const result = await newCampus.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getCampus = async (req, res) => {
    try {
        const [data, _] = await Campus.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
