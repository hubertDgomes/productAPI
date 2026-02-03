import userSchema from "../model/userSchema.js";

const otpVerify = async (req, res) => {
  const { email, otp } = req.body;
  if (!email) {
    return res.status(400).json({ Massege: "Enter your email!" });
  }
  const user = await userSchema.findOne({ email });
  if (!user) {
    return res.status(400).json({ Error: "User not found" });
  }
  if (user.otp != otp || user.expOtp < Date.now()) {
    return res.status(400).json({ Error: "Invalid OTP or Timeout" });
  }
  (user.otp = undefined),
    (user.expOtp = undefined),
    (user.isVerified = true),
    user.save();
  res.status(200).json({ Massege: "Email Verify Successfull" });
};
export default otpVerify;
