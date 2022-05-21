import Quizz from '../models/quizz'
import Result from '../models/result'
import Account from '../models/account'

export const getAllByCourseId = async (req, res) => {
	try {
		const { courseId } = req.params
		const quizzs = await Quizz.find({ course: courseId })

		if (!quizzs) return res.status(404).json({ message: 'not-found' })

		const resData = quizzs.map(item => {
			const { result, ...filted } = item._doc
			return filted
		})
		return res.status(200).json(resData)
	} catch (error) {
		res.status(500).json({ error })
		throw new Error(error)
	}
}

export const getById = async (req, res) => {
	try {
		const quizz = await Quizz.findById(req.params.id)
		if (!quizz)
			return res.status(404).json({ message: 'quizz-not-found' })
		const { answers, ...ignoredAnwser } = quizz._doc
		return res.status(200).json(ignoredAnwser)
	} catch (error) {
		res.status(500).json({ error })
	}
}

export const createQuizz = async (req, res) => {
	try {
		const newQuizz = new Quizz(req.body)
		const quizz = await newQuizz.save()
		return res.status(200).json({ quizz })
	} catch (error) {
		res.status(500).json({ error })
	}
}

export const markById = async (req, res) => {
	try {
		const { quizId, anwsers, studentId, quizName } = req.body
		const quiz = await Quizz.findById(quizId)
		const { result } = await quiz._doc

		const point =
			result.reduce((prev, curr, index) => {
				if (curr === anwsers[index]) return prev + 1
				return prev
			}, 0) / result.length
		const fixedPoint = point.toFixed(2) * 10
		const newResult = new Result({
			quizId,
			studentId,
			quizName,
			score: fixedPoint,
		})
		console.log(newResult)
		await newResult.save()
		res.status(200).json(fixedPoint)
	} catch (error) {
		res.status(500).json({ error })
	}
}

export const getResult = async (req, res) => {
	const { id } = req.params
	try {
		const results = await Result.find({ studentI: id })
		return res.status(200).json(results)
	} catch (e) {
		res.status(500).json(e)
	}
}

export const getByTeacherId = async (req, res) => {
	const { id } = req.body
	try {
		const results = await Quizz.find({ teacherId: id })
		return res.status(200).json(results)
	} catch (e) {
		res.status(500).json(e)
	}
}
