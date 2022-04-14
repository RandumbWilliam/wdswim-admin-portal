import express from "express";
import { addOtherFees, getOtherFees } from "../../controllers/classSettings/otherFees.js";

const router = express.Router();

router.post("/addOtherFees", addOtherFees);
router.get("/getOtherFees", getOtherFees);

export default router;
