import  User  from "../models/User.js";

import Token from "../models/Token.js"

import { generateAccessToken, generateRefreshToken } from "./Auth/auth.controller.js";

export const handleRegister = (bcrypt) => async (req, res) => {
  const { email, password } = req.body;
  // VALIDATION
  if (!email || !password) {
    return res.status(400).json("incorrect form submission");
  }

  // CHECK IF USER ALREADY EXIST IN DATABASE
  const isExist = await User.findOne({ email: email });

  if (isExist !== null) {
    return res.status(409).send("User with this email already exist");
  } else {
    try {
      const saltRounds = 10;

      bcrypt.hash(password, saltRounds, async function (err, hash) {
        const user = new User({
          email: email,
          password: hash,
          events: [],
        });

        await user.save();

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        const token = new Token ({
          userId: user._id,
          refreshToken: refreshToken
        })

        await token.save()        

        res.json({ accessToken, refreshToken });
  
      });
    } catch (err) {
      res.status(400).send("Bad request");
    }
  }
};
