import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Classes from "../models/classes.js";

dotenv.config();

export const getClasses = async (req, res) => {
    try {
        const [data, _] = await Classes.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const addClasses = async (req, res) => {

    const { seasonId, numStudents, date, instructorId, lessonTypeId, 
        swimLevelId, locationId, startTime, endTime} = req.body;

    try {

        let newClass = new Season(
            seasonId,
            numStudents,
            date, 
            instructorId,
            lessonTypeId, 
            swimLevelId, 
            locationId, 
            startTime, 
            endTime
        );
        
        const result = await newClass.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
