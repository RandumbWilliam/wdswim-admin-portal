import dotenv from "dotenv";
import Students from "../models/students.js";

dotenv.config();

export const addStudents = async (req, res) => {

    const { firstName, lastName, gender, dateOfBirth, registrationDate, activeStatus, allergies, allergiesActions, notes } = req.body;

    try {

        let newStudents = new Students(
            firstName, 
            lastName, 
            gender, 
            dateOfBirth, 
            registrationDate, 
            activeStatus, 
            allergies, 
            allergiesActions, 
            notes
        );
        
        const result = await newStudents.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getStudents = async (req, res) => {
    try {
        const [data, _] = await Students.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
