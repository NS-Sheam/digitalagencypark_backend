import { ITService } from "./ITservice.service.js";

const createService = async (req, res) => {
  try {
    const { service: serviceData } = req.body;
    const result = await ITService.createServiceInDB(req.file, serviceData);
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
    const result = await ITService.getAllServicesFromDB();

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
