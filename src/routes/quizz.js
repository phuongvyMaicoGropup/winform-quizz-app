import express from 'express';
import { getById, createQuizz, markById } from '../controllers/quizz';

const router = express.Router();

router.post('/', createQuizz)
router.get('/:id', getById)
router.get('/:id/cham-diem', markById)

export default router