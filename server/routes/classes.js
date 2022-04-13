import express from "express";
import { getClasses } from "../controllers/classes.js";

const router = express.Router();

router.get("/getClasses", getClasses);

export default router;