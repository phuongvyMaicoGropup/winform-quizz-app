import express from "express";
import { getByAccountId, getById } from "../controllers/course";

const router = express.Router();

router.post("/:id", getById);

export default router;
