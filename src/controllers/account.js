import Account from "../models/account";

export const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Account.findById(id);
    if (!user) {
      return res.status(404);
    }
    const { password, ...newUser } = user;
    console.log(newUser);
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error });
  }
};
