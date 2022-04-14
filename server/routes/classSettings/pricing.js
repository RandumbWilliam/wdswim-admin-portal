import express from "express";
import { addPricing, getPricing } from "../../controllers/classSettings/pricing.js";

const router = express.Router();

router.post("/addPricing", addPricing);
router.get("/getPricing", getPricing);

export default router;
