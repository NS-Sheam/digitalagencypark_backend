import config from "../../../config";
import { User } from "../user/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const login = async (payload) => {
  console.log("payload", payload);

  const { email, password } = payload;
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    throw new Error("User not found");
  }
  const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);

  if (!isPasswordMatch) {
    throw new Error("Password not match");
  }
  const jwtPayload = {
    id: isUserExist._id,
    email: isUserExist.email,
    role: isUserExist.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_secret, config.jwt_expires_in);

  return { accessToken };
};

export const AuthServices = {
  login,
};
