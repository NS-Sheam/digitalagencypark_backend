import { stepsService } from "./steps.service.js";

const createStep = async (req, res) => {
  try {
    const { step: stepData } = req.body;
    const result = await stepsService.createStepInDB(req.file, stepData);
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

const getAllSteps = async (req, res) => {
  try {
    const result = await stepsService.getAllStepsFromDB();

    res.status(200).json({
      success: true,
      message: "Steps Data are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const stepsController = {
  createStep,
  getAllSteps,
};
