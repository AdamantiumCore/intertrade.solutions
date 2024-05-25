import {findUserByUsername} from '../repositories/user.repository.js';
import {comparePassword} from "../utilities/password-utils.js";
import {generateToken} from "../utilities/jwt-utils.js";
import {Unauthorized} from "../errors/Unauthorized.js";

export const login = async (req, res, next) => {
  const {username, password} = req.body;
  const user = await findUserByUsername(username);

  if (!user) {
    return next(new Unauthorized('Invalid Credentials'))
  }

  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) {
    return next(new Unauthorized('Invalid Credentials'))
  }

  return await generateToken({sub: user.id})
}