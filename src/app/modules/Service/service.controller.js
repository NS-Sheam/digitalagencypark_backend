import {  webServices } from "./service.service.js";

const createService = async (req, res) => {
  try {
    const { service: serviceData } = req.body;
    const result = await webServices.createServiceInDB(req.file, serviceData);
    res.status(200).json({
      success: true,
      message: "service Data is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllServices = async (req, res) => {
  try {
    const result = await webServices.getAllServicesFromDB();

    res.status(200).json({
      success: true,
      message: "Services Data is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const serviceController = {
  createService,
  getAllServices,
};
