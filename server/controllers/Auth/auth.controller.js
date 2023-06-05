import jwt from "jsonwebtoken";

import Token from "../../models/Token.js";

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      next();
    } else {
      req.user = user;
    }
  });
};

export const refreshToken = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    const refreshToken = req.body.token;
    if (refreshToken == null) return res.statusSend(401);

    const tokenObj = await Token.findOne({ userId: req.body.userId });

    if (refreshToken !== tokenObj.refreshToken) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      const accessToken = generateAccessToken({ user });
      req.accessToken = accessToken;
      req.user = user;
    });
    next();
  }
};

export const generateAccessToken = (user) => {
  return jwt.sign(
    JSON.stringify({
      exp: Math.floor(Date.now() / 1000) + 900,
      user: user,
    }),
    process.env.ACCESS_TOKEN_SECRET
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(JSON.stringify(user), process.env.REFRESH_TOKEN_SECRET);
};
