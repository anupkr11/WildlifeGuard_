import express from "express";
import { getWildlifeData } from "../controllers/wildlifeController.js";

const router = express.Router();

router.get("/", getWildlifeData);

export default router;