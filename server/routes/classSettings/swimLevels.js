import express from "express";
import { addSwimLevels, getSwimLevels } from "../../controllers/classSettings/swimLevels.js";

const router = express.Router();

router.post("/addSwimLevels", addSwimLevels);
router.get("/getSwimLevels", getSwimLevels);

export default router;
