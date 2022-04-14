import express from "express";
import { addAccountHolders, getAccountHolder } from "../controllers/accountHolders.js";

const router = express.Router();

router.post("/addAccountHolders", addAccountHolders);
router.get("/getAccountHolder", getAccountHolder);

export default router;
