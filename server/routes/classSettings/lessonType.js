import express from "express";
import { addLessonType, getLessonType } from "../../controllers/lessonType.js";

const router = express.Router();

router.post("/addLessonType", addLessonType);
router.get("/getLessonType", getLessonType);

export default router;
