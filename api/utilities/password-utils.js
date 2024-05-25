import bcrypt from "bcrypt";

export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}
