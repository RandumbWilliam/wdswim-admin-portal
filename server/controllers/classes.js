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
