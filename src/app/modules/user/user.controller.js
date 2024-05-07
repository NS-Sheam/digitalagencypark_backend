import { UserServices } from "./user.service.js";

const createAdmin = async (req, res) => {
  try {
    const result = await UserServices.createAdmin(req.body);
    res.status(201).json({
      status: 201,
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      message: error.message,
    });
  }
};

export const UserControllers = {
  createAdmin,
};
