import { customerReviewServices } from "./customerReview.service.js";


const createCustomerReview = async (req, res) => {
  try {
    const { step: stepData } = req.body;
    const result = await customerReviewServices.createCustomerReviewInDB(req.file, stepData);
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

const getAllCustomerReview = async (req, res) => {
  try {
    const result = await customerReviewServices.getAllCustomerReviewFromDB();

    res.status(200).json({
      success: true,
      message: "Steps Data are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const customerReviewController = {
  createCustomerReview,
  getAllCustomerReview,
};
