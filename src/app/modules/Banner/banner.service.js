import QueryBuilder from "../../Builder/QueryBuilder.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Banner } from "./banner.model.js";

const createBannerInDB = async (files, payload) => {
  try {
    const mainimageName = `${files?.mainImage[0].size}${files?.mainImage[0].originalname}`;
    const mainImagePath = files?.mainImage[0].path;
    const designImages = files?.designImages;
    const bannerData = {};
    const { secure_url: mainURL } = await sendImageToCloudinary(
      mainimageName,
      mainImagePath
    );

    const images = [];
    if (designImages && designImages.length > 0) {
      for (const image of designImages) {
        const imageName = `${image?.size}${image?.originalname}`;
        const path = image?.path;
        const { secure_url } = await sendImageToCloudinary(imageName, path);
        images.push(secure_url);
      }
    }
    bannerData.title = payload.title;
    bannerData.description = payload.description;
    bannerData.status = payload.status;
    bannerData.mainImage = mainURL;
    bannerData.designImages = images;

    const result = await Banner.create(bannerData);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

const updateBannerStatusFromDB = async (_id, status) => {
  const result = await Banner.updateOne(
    { _id },
    { $set: { status } },
    { runValidators: true }
  );
  return result;
};
const deleteBannerFromDB = async (_id) => {
  const result = await Banner.deleteOne({ _id });
  return result;
};

const getAllBannerFromDB = async (query) => {
  const resultQuery = new QueryBuilder(Banner.find(), query)
    .search(["title", "description"])
    .filter()
    .sort()
    .limit()
    .paginate();
  const result = await resultQuery.modelQuery;
  return result;
};

export const bannerServices = {
  createBannerInDB,
  updateBannerStatusFromDB,
  deleteBannerFromDB,
  getAllBannerFromDB,
};
