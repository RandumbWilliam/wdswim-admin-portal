import express from "express";
import { addLessonType, getLessonType } from "../../controllers/classSettings/lessonType.js";

const router = express.Router();

router.post("/addLessonType", addLessonType);
router.get("/getLessonType", getLessonType);

export default router;
