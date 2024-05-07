import { whyChooseUsServices } from "./whyChooseUs.service.js";


const createWhyChooseUs = async (req, res) => {
  try {
    const { service: serviceData } = req.body;
    const result = await whyChooseUsServices.createWhyChooseUsInDB(req.file, serviceData);
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

const getAllWhyChooseUs = async (req, res) => {
  try {
    const result = await whyChooseUsServices.getAllWhyChooseUsFromDB();

    res.status(200).json({
      success: true,
      message: "Services Data is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const whyChooseUsController = {
  createWhyChooseUs,
  getAllWhyChooseUs,
};
