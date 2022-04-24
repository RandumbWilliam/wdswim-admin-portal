import express from "express";
import { addAccountHolders, getAccountHolder, getOneAccountHolder } from "../controllers/accountHolders.js";

const router = express.Router();

router.post("/addAccountHolders", addAccountHolders);
router.post("/getOneAccountHolder", getOneAccountHolder);
router.get("/getAccountHolder", getAccountHolder);

export default router;
