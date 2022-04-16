import express from "express";
import { addCampus, getCampus } from "../controllers/campus.js";

const router = express.Router();

router.post("/addCampus", addCampus);
router.get("/getCampus", getCampus);

export default router;
