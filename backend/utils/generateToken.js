import jwt from "jsonwebtoken";

const genTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict", //CSRF attacks cross-site request forgery attackts
    secure: process.env.NODE_ENV !== "development",
  });
};

export default genTokenAndSetCookie;
