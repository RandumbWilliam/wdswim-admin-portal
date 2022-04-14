import dotenv from "dotenv";
import Season from "../models/seasons.js";

dotenv.config();

export const addSeason = async (req, res) => {

    const { campusId, seasonName, activeStatus, startDate, endDate, registrationStartDate, note, registrationStatus } = req.body;

    try {

        let newSeason = new Season(
            campusId,
            seasonName, 
            activeStatus, 
            startDate, 
            endDate, 
            registrationStartDate, 
            note, 
            registrationStatus
        );
        
        const result = await newSeason.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getSeason = async (req, res) => {
    try {
        const [data, _] = await Season.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
