import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

dotenv.config();

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [data, _] = await User.findOne({ email: email });
        const existingUser = data[0];

        console.log(data)

        if (!existingUser)
            return res.status(404).json({ message: "User doesn't exist." });

        const isPasswordCorrect = await bcrypt.compare(
            password,
            existingUser.password
        );

        console.log(isPasswordCorrect)

        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign(
            { email: existingUser.user_name, id: existingUser.id },
            process.env.JWTSECRET,
            { expiresIn: process.env.JWTEXPIRE }
        );

        console.log(token)

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong. " });
    }
};
