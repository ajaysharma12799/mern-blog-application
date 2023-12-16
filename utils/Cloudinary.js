const { v2: Cloudinary } = require("cloudinary");
const fs = require("fs");

Cloudinary.config({
  cloud_name: "codingjungle",
  api_key: "395554266582117",
  api_secret: "aOwaSo1e0p_UFAI3pb4KNUIBHOs",
});

const uploadOnCloudinary = async (localFile) => {
  try {
    if (!localFile) return null;

    // Upload File on Cloudinary
    const response = await Cloudinary.uploader.upload(localFile);
    fs.unlinkSync(localFile); // Remove Image After Successfully Uploading to Cloudinary
    return response;
  } catch (error) {
    fs.unlinkSync(localFile); // Remove Local File is Upload Operation Get Failed
    return null;
  }
};

module.exports = { uploadOnCloudinary };
