import jwt from "jsonwebtoken";

export const generateToken = async (props) => {
  // expires after 7 days
  const age = 1000 * 60 * 60 * 24 * 7;

  return jwt.sign({
      sub: props.sub,
    }, process.env.JWT_SECRET_KEY,
    {expiresIn: age});

}