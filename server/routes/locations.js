import express from "express";
import { addLocations, getLocations } from "../controllers/locations.js";

const router = express.Router();

router.post("/addLocations", addLocations);
router.get("/getLocations", getLocations);

export default router;
