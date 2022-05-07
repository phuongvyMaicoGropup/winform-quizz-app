import Account from "../models/account";

export const login = async (req, res) => {
  const { userId, password, position } = req.body;
  try {
    const user = await Account.findOne({ userId: userId });
    if (!user) return res.status(404).json({ message: "user not found" });
    if (user.password === password) {
      if (user.position === position)
        return res.status(200).json({ message: "login-success", data: user });
      else return res.status(401).json({ message: "wrong-position" });
    } else return res.status(401).json({ message: "login-false" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const register = async (req, res) => {
  const { userId, password, position } = req.body;
  try {
    const newUser = new Account({
      userId,
      password,
      position,
    });

    const user = await newUser.save();
    res.status(200).json({ data: user });
  } catch (error) {
    console.log(error);
    error.code === 11000;
    switch (error.code) {
      case 11000:
        res.status(409).json("duplicate");
        break;
      default:
        res.status(500).json({ error });
        break;
    }
  }
};
