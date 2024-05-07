import { adminServices } from "./admin.service.js";

const createAdmin = async (req, res) => {
  try {
    const { service: serviceData } = req.body;
    const result = await adminServices.createAdminInDB(req.file, serviceData);
    res.status(200).json({
      success: true,
      message: "admin is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const result = await adminServices.getAllAdminFromDB();

    res.status(200).json({
      success: true,
      message: "All admin Data is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const adminController = {
  createAdmin,
  getAllAdmins,
};
