import dotenv from "dotenv";
import LessonType from "../models/lessonType.js";

dotenv.config();

export const addLessonType = async (req, res) => {

    const { name, displayOrder } = req.body;

    try {

        let newLessonType = new LessonType(
            name,
            displayOrder
        );
        
        const result = await newLessonType.save();
        
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getLessonType = async (req, res) => {
    try {
        const [data, _] = await LessonType.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
