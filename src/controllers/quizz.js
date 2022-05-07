import Quizz from "../models/quizz";
import express from "express";

export const getAllByCourseId = async (req, res) => {
      try {
            const { courseId } = req.params;
            const quizzs = await Quizz.find({ course: courseId })
            console.log(courseId)
            if (!quizzs) return res.status(404).json({ message: "not-found" })
            return res.status(200).json({ quizzs })
      } catch (error) {
            res.status(500).json({ error })
      }
}


export const getById = async (req, res) => {
      try {
            const quizz = await Quizz.findById(req.params.id)
            if (!quizz)
                  return res.status(404).json({ message: "quizz-not-found" })
            const { answers, ...ignoredAnwser } = quizz._doc
            return res.status(200).json({ data: ignoredAnwser })
      } catch (error) {
            res.status(500).json({ error })
      }
}

export const createQuizz = async (req, res) => {
      try {
            const newQuizz = new Quizz(req.body)

            const quizz = await newQuizz.save()

            return res.status(200).json({ data: quizz })
      } catch (error) {
            res.status(500).json({ error })
      }
}

export const markById = async (req, res) => {
      try {
            const { quizzId, answers } = req.body
            const quiz = await Quizz.findById(quizzId)
            const { result } = await quiz._doc

            console.log({ anwsers, result, })

            const point = result.reduce((prev, curr, index) => {
                  // if curr === anwsers
                  return prev
            }, 0)
      } catch (error) {
            res.status(500).json({ error })
      }
}