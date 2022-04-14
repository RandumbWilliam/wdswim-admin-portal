import express from "express";
import { addStudents, getStudents } from "../controllers/students.js";

const router = express.Router();

router.post("/addStudents", addStudents);
router.get("/getStudents", getStudents);

export default router;
