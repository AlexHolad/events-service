import  User  from "../models/User.js";
import Token from "../models/Token.js";

import { generateAccessToken, generateRefreshToken } from "./Auth/auth.controller.js";

export const handleSignIn = (bcrypt) => async (req, res) => {
  const { email, password } = req.body;

  // VALIDATION
  if (!email || !password) {
    return res.status(400).json("incorrect form submission");
  }

  try {
    // Request user by email from DB
    const user = await User.findOne({ email: email }).exec();
    console.log(user);

    // Compare hashed password with password from client
    const match = await bcrypt.compare(password, user.password);
    console.log(match);

    if(!match) return res.sendStatus(400).json("wrong credentials");

    const accessToken = generateAccessToken(user);
    console.log(accessToken);

    const refreshToken = generateRefreshToken(user);
    
    const tokenObj = await Token.findOne({ userId: user._id });
    
    tokenObj.refreshToken = refreshToken

    await tokenObj.save()

    if (match) {
      res.json({ accessToken, refreshToken });
    }
  } catch (err) {
    res.status(400).json("wrong credentials");
  }
};
