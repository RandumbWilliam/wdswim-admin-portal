import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import discountsRoutes from "./routes/classSettings/discounts.js";
import lessonTypeRoutes from "./routes/classSettings/lessonType.js";
import classesRoutes from "./routes/classes.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/discounts", discountsRoutes);
app.use("/lessonType", lessonTypeRoutes);
app.use("/classes", classesRoutes);

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
