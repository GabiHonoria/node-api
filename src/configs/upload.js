const path = require("path");
const multer = require("multer");

const TPM_FOLDER = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_FOLDER = path.resolve(__dirname, "uploads");

const MULTER = {
    storage:multer.diskStorage
}