import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/auth", userRoutes);

app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went wrong...",
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
