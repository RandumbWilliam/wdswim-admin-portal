import express from "express";
import { addDiscounts, getDiscounts } from "../controllers/discounts.js";

const router = express.Router();

router.post("/addDiscounts", addDiscounts);
router.get("/getDiscounts", getDiscounts);

export default router;
