import Quizz from "../models/quizz";
import express from "express";

export const getAllByCourseId = async (req, res) => {
  try {
    const { courseId } = req.params;
    const quizzs = await Quizz.find({ course: courseId });
    if (!quizzs) return res.status(404).json({ message: "not-found" });
    return res
      .status(200)
      .json({ quizzIds: quizzs.map((item) => item._id.toString()) });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getById = async (req, res) => {
  try {
    const quizz = await Quizz.findById(req.params.id);
    if (!quizz) return res.status(404).json({ message: "quizz-not-found" });
    const { answers, ...ignoredAnwser } = quizz._doc;
    return res.status(200).json({ ignoredAnwser });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const createQuizz = async (req, res) => {
  try {
    const newQuizz = new Quizz(req.body);

    const quizz = await newQuizz.save();

    return res.status(200).json({ quizz });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const markById = async (req, res) => {
  try {
    const { id } = req.params;
    const { anwsers } = req.body;
    const quiz = await Quizz.findById(id);
    const { result } = await quiz._doc;

    const point = await result.reduce(
      (prev, curr, index) => (curr === anwsers[index] ? prev + 1 : prev),
      0
    );

    res
      .status(200)
      .json({ point: +((point / anwsers.length) * 10).toFixed(2) });
  } catch (error) {
    res.status(500).json({ error });
  }
};
