import express from "express";
import {
  getById,
  createQuizz,
  markById,
  getAllByCourseId,
  getResult,
  getByTeacherId,
} from "../controllers/quizz";

const router = express.Router();

router.post("/", createQuizz);
router.get("/course/:courseId", getAllByCourseId);
router.get("/teacher/:id", getByTeacherId);
router.get("/:id", getById);
router.get("/result/:id", getResult);
router.post("/cham-diem", markById);

export default router;
