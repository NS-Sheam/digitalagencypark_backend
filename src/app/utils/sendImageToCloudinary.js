import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import multer from "multer";
import config from "../config/index.js";

cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});

export const sendImageToCloudinary = (imageName, path) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      path,
      { public_id: imageName },
      function (error, result) {
        if (error) {
          reject(error);
        }
        resolve(result);
        // delete a file asynchronously
        fs.unlink(path, (err) => {
          console.log(path);
          if (err) {
            reject(err);
            console.log(err);
          } else {
            resolve(result);
            console.log("File is deleted.");
          }
        });
      }
    );
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });

//----------------------------------------------------------------------------------------------------
// async function sendImageToCloudinary(images) {
//   try {
//     const uploadedImages = [];
//     for (const image of images) {
//       const result = await cloudinary.uploader.upload(image, {
//         folder: "your_folder_name",
//       });
//       uploadedImages.push(result);
//     }
//     return uploadedImages;
//   } catch (error) {
//     console.error("Error uploading images:", error);
//     throw error;
//   }
// }

// // Example usage
// const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
// uploadImages(images)
//   .then((uploadedImages) => {
//     console.log("Uploaded images:", uploadedImages);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
