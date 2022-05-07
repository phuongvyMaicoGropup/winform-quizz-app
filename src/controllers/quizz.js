import Quizz from "../models/quizz";
import express from "express";

export const getById = async (req, res) => {
      try {
            const quizz = await Quizz.findById(req.params.id)
            if (!quizz)
                  return res.status(404).json({ message: "quizz-not-found" })
            return res.status(200).json({ data: quizz })
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

      } catch (error) {
            res.status(500).json({ error })
      }
}