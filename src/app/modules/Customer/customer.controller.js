import { customerServices } from "./customer.service.js";

const createCustomer = async (req, res) => {
  try {
    const { step: stepData } = req.body;
    const result = await customerServices.createCustomerInDB(req.file, stepData);
    res.status(200).json({
      success: true,
      message: "stepData is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const result = await customerServices.getAllCustomerFromDB();

    res.status(200).json({
      success: true,
      message: "Steps Data are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const customerController = {
  createCustomer,
  getAllCustomers,
};
