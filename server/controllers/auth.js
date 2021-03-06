import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

dotenv.config();

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter all fields." });
    }

    try {
        const [data, _] = await User.findOne({ email: email });
        const existingUser = data[0];

        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign(
            { email: existingUser.email, id: existingUser.id },
            process.env.JWTSECRET,
            { expiresIn: process.env.JWTEXPIRE }
        );

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
