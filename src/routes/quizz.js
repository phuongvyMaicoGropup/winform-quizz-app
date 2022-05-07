import express from 'express';
import { getById, createQuizz, markById, getAllByCourseId } from '../controllers/quizz';

const router = express.Router();

router.post('/', createQuizz)
router.get('/course/:courseId', getAllByCourseId)
router.get('/:id', getById)
router.get('/:id/cham-diem', markById)

export default router