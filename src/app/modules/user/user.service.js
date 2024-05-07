import mongoose from "mongoose";
import { Admin } from "../Admin/admin.model.js";
import { User } from "./user.model.js";
import config from "../../config/index.js";
import bcrypt from "bcrypt";

const createAdmin = async (payload) => {
  const userRole = "admin";
  const session = await mongoose.startSession();
  const hashedPassword = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds));
  try {
    await session.startTransaction();

    const newUser = await User.create(
      [
        {
          password: hashedPassword,
          userName: payload.admin.userName,
          email: payload.admin.email,
          role: userRole,
        },
      ],
      { session }
    );
    if (!newUser) {
      throw new Error("User creation failed");
    }
    const admin = await Admin.create(
      [
        {
          ...payload.admin,
          user: newUser._id,
        },
      ],
      { session }
    );
    if (!admin) {
      throw new Error("Admin creation failed");
    }
    await session.commitTransaction();
    session.endSession();
    return admin;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const UserServices = {
  createAdmin,
};
