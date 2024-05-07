import { bannerServices } from "./banner.service.js";

const createBanner = async (req, res) => {
  try {
    const { banner: bannerData } = req.body;

    const result = await bannerServices.createBannerInDB(req.files, bannerData);
    res.status(200).json({
      success: true,
      message: "Banner Data is created succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateBannerStatus = async (req, res) => {
  try {
    const bannerId = req.params.id;
    const { status } = req.body;
    const result = await bannerServices.updateBannerStatusFromDB(
      bannerId,
      status
    );

    res.status(200).json({
      success: true,
      message: "satus updated succesfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "status updation failed!",
      error: err,
    });
  }
};

const deleteBanner = async (req, res) => {
  try {
    const bannerId = req.params.id;
    const result = await bannerServices.deleteBannerFromDB(bannerId);

    res.status(200).json({
      success: true,
      message: "Banner Deleted succesfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "Banner Deletion failed!",
      error: err,
    });
  }
};

const getAllBanners = async (req, res) => {
  try {
    const result = await bannerServices.getAllBannerFromDB(req.query);

    res.status(200).json({
      success: true,
      message: "Banner Data is retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const bannerController = {
  createBanner,
  updateBannerStatus,
  deleteBanner,
  getAllBanners,
};
