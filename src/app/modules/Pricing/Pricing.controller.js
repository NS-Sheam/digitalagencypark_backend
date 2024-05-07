import {   PricingServices } from "./pricing.service.js";

const createPricing = async (req, res) => {
  try {
    const { service: serviceData } = req.body;
    const result = await PricingServices.createPricingInDB(req.file, serviceData);
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

const getAllPricing = async (req, res) => {
  try {
    const result = await PricingServices.getAllPricingFromDB();

    res.status(200).json({
      success: true,
      message: "Services Data is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const pricingController = {
  createPricing,
  getAllPricing,
};
