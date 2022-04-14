import express from "express";
import { addSeason, getSeason } from "../controllers/seasons.js";

const router = express.Router();

router.post("/addSeason", addSeason);
router.get("/getSeason", getSeason);

export default router;
