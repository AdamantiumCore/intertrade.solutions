import bcrypt from "bcrypt";
export const hashPassword = async (password, number) => {
  return await bcrypt.hash(password, number);
}
export const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash)
}
