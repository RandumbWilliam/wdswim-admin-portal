import express from "express";
import { addSeasons, getSeasons } from "../controllers/seasons.js";

const router = express.Router();

router.post("/addSeasons", addSeasons);
router.get("/getSeasons", getSeasons);

export default router;
