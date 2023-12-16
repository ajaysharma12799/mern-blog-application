const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/temp");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("");
    cb(null, Date.now() + "-" + fileName);
  },
});

const uploadStorage = multer({ storage: storage });

module.exports = { uploadStorage };
