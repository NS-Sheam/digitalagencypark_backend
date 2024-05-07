import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";
import { User } from "../user/user.model.js";

const login = async (payload) => {
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

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret, { expiresIn: config.jwt_access_expires_in });

  return { accessToken };
};

export const AuthServices = {
  login,
};
