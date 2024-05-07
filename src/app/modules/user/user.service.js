import mongoose from "mongoose";
import { Admin } from "../Admin/admin.model.js";
import { User } from "./user.model.js";

const createAdmin = async (payload) => {
  const { password, ...remaining } = payload;
  const userRole = "admin";
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();

    const newUser = await User.create(
      [
        {
          password,
          userName: remaining,
          userName,
          email: remaining.email,
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
          ...remaining,
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
