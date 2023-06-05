import Token from "../models/Token.js";


export const handleSignOut = () => async (req, res) => {
  const {userId} = req.body
  console.log(req)
  try {
    const tokenObj = await Token.findOne({userId: userId}).exec();
    tokenObj.refreshToken= '0';

    await tokenObj.save()

    res.sendStatus(204);
  } catch (err) {
   res.send(err);
  }
};
