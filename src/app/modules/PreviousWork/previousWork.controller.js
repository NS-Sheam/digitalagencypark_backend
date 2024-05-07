import { previousWorkService } from "./previousWork.service.js";


const createPreviousWork = async (req, res) => {
  try {
    const { service: serviceData } = req.body;
    const result = await previousWorkService.createPreviousWorkInDB(
      req.file,
      serviceData
    );
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

const getAllPreviousWork = async (req, res) => {
  try {
    const result = await previousWorkService.getAllPreviousWorkFromDB();

    res.status(200).json({
      success: true,
      message: "Services Data is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const previousWorkController = {
  createPreviousWork,
  getAllPreviousWork,
};
