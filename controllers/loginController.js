import userSchema from "../model/userSchema.js";
import bcrypt from "bcrypt";

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ Error: "Email requires" });
  }
  if (!password) {
    return res.status(400).json({ Error: "Password requires" });
  }

  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(400).json({ Error: "User not found" });
  }
  if (!user.isVerified) {
    return res.status(400).json({ Error: "Your email is still not verified." });
  }
  const passCheck = await bcrypt.compare(password, user.password);

  if (!passCheck) {
    return res.status(400).json({ Error: "Wrong Password!" });
  }
  req.session.isVerified = true
  req.session.userSchema = {
    id : user._id,
    name : user.name,
    email : user.email
  }
  res.json({Massege : "Login Done!"})
};

export default loginController;
