import multer from "multer";

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/avatar");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${Date.now()}.${ext}`);
    },
});

export const upload = multer({ storage: multerStorage })
