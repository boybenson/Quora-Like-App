import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `./public/featuredImages`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  // Storage destination
  storage,

  // FileFiltering
  fileFilter: (req, file, cb) => {
    // Set the filetypes, it is optional
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);

    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimetype && extname) {
      return cb(null, true);
    }

    const err = new Error(
      "File upload only supports the following filetypes - /jpeg|jpg|png/"
    );

    err.status = 400;

    cb(err);
  },
});

export default upload;
