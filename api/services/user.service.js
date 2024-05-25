import {findUserByUsername} from '../repositories/user.repository.js';
import {ProblemDetails} from "../types/problemDetails.js";
import {comparePassword} from "../utilities/password-utils.js";
import {generateToken} from "../utilities/jwt-utils.js";

export const login = async (req, res) => {
  const {username, password} = req.body;
  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(401).json(new ProblemDetails({
      type: 'api/sign-in-unauthorized',
      title: 'Unauthorized',
      status: 401,
      detail: 'Invalid Credentials'
    }));
  }

  const isPasswordValid = await comparePassword(password, user.password)
  if (!isPasswordValid) {
    return res.status(401).json(new ProblemDetails({
      type: 'api/sign-in-unauthorized',
      title: 'Unauthorized',
      status: 401,
      detail: 'Invalid Credentials'
    }));
  }

  return await generateToken({sub: user.id})
}