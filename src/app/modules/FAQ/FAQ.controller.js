import { FAQService } from "./FAQ.service.js";

const createFAQ = async (req, res) => {
  try {
    const { FAQ: FAQData } = req.body;
    console.log("6 no.line", req.body);
    const result = await FAQService.createFAQInDB(FAQData);
    res.status(200).json({
      success: true,
      message: "FAQ is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllFAQ = async (req, res) => {
  try {
    const result = await FAQService.getAllFAQFromDB();

    res.status(200).json({
      success: true,
      message: "FAQ are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const FAQController = {
  createFAQ,
  getAllFAQ,
};
