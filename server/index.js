import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
<<<<<<< HEAD
import discountsRoutes from "./routes/classSettings/discounts.js";
import lessonTypeRoutes from "./routes/classSettings/lessonType.js";
=======
import classesRoutes from "./routes/classes.js";

>>>>>>> 528d4ef3f8fdc90ad9a42abe2b1fcb2106166c62

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
<<<<<<< HEAD
app.use("/discounts", discountsRoutes);
app.use("/lessonType", lessonTypeRoutes);
=======
app.use("/classes", classesRoutes);
>>>>>>> 528d4ef3f8fdc90ad9a42abe2b1fcb2106166c62

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
