import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import discountsRoutes from "./routes/classSettings/discounts.js";
import lessonTypeRoutes from "./routes/classSettings/lessonType.js";
import classesRoutes from "./routes/classes.js";
import accountHoldersRoutes from "./routes/accountHolders.js";
import swimLevelsRoutes from "./routes/classSettings/swimLevels.js";
import otherFeesRoutes from "./routes/classSettings/otherFees.js";
import pricingRoutes from "./routes/classSettings/pricing.js";
import locationsRoutes from "./routes/locations.js";
import seasonsRoutes from "./routes/seasons.js";
import studentsRoutes from "./routes/students.js";
import campusRoutes from "./routes/campus.js";


dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/classSettings/discounts", discountsRoutes);
app.use("/classSettings/lessonType", lessonTypeRoutes);
app.use("/classes", classesRoutes);
app.use("/accountHolders", accountHoldersRoutes);
app.use("/classSettings/swimLevels", swimLevelsRoutes);
app.use("/classSettings/otherFees", otherFeesRoutes);
app.use("/classSettings/pricing", pricingRoutes);
app.use("/locations", locationsRoutes);
app.use("/seasons", seasonsRoutes);
app.use("/students", studentsRoutes);
app.use("/campus", campusRoutes);

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
