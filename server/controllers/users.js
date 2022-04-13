import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/user.js";

dotenv.config();

export const addAdminAccount = async (req, res) => {

    const { firstName, lastName, email, password, stat, level, createdBy } = req.body;

    try {
        const [data] = await User.findOne({ email: email });
        const existingUser = data[0];
        

        if (existingUser)
            return res.status(400).json({ message: "User already exist." });

        const hashedPassword = await bcrypt.hash(password, 12);

        let newUser = new User(
            firstName,
            lastName,
            email,
            hashedPassword,
            stat,
            level,
            createdBy
        );
        
        await newUser.save();

        const [result] = await User.findOne({email: email});
        const user = result[0];
        
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};

export const getAdminAccount = async (req, res) => {
    try {
        const [data, _] = await User.fetchAll();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
