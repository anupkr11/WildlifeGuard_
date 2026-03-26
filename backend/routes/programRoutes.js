import express from "express";
import { getProgramData, getProgramById, deleteProgram } from "../controllers/programController.js";

const router = express.Router();

router.get("/", getProgramData);
router.get("/:id", getProgramById);
router.delete("/:id", deleteProgram);

export default router;