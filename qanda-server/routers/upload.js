import express from 'express';
import EndPoint from '../../../common/endpoints';
import { UploadService } from '../services/upload';
import asyncHandler from '../utils/async_handle';
import multer from 'multer';

const uploadService = new UploadService();
const uploadRouter = express.Router();

const storage = multer.diskStorage({});

const upload = multer({ storage, limit: { fileSize: 1024 * 1024 * 100 } }) //limit 100MB

uploadRouter.post(EndPoint.UPLOAD, upload.single('file'), asyncHandler(async (req, res) => {
    const response = await uploadService.upload(req.file);
    return res.json(response);
}));

uploadRouter.post(EndPoint.UPLOAD_MULTIPLE, upload.array('file'), asyncHandler(async (req, res) => {
    const response = await uploadService.uploadMultiple(req.files);
    return res.json(response);
}));

uploadRouter.post(EndPoint.UPLOAD_MULTIPLE_VIDEO, upload.array('file'), asyncHandler(async (req, res) => {
    const response = await uploadService.uploadMultipleVideo(req.files);
    return res.json(response);
}));

export { uploadRouter };
