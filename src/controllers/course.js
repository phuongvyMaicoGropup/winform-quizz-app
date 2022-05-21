import Course from "../models/course";

export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) return res.status(404);
    return res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error });
  }
};

export const getByAccountId = async (req, res) => {
  const { ids } = req.body;
  try {
    if (!ids && ids.length === 0) return res.status(404);
  } catch (err) {
    res.status(500).json({ error });
  }
};
