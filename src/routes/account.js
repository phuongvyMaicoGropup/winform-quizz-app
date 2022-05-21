import express from "express";
import { getById } from "../controllers/account";

const router = express.Router();

router.post("/:id", getById);

export default router;
