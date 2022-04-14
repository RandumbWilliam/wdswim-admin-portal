import express from "express";
import { addAdminAccount, getAdminAccount } from "../controllers/users.js";

const router = express.Router();

router.post("/addAdminAccount", addAdminAccount);
router.get("/getAdminAccount", getAdminAccount);

export default router;