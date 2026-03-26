import express from "express";
import { getBlogData } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getBlogData);

export default router;