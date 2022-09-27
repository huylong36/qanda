import { cloudinary } from
    uploadMultiple = async (files) => {
        try {
            const urls = Promise.all(files.map(async file => {
                const res = await cloudinary.uploader.upload(file.path, {
                    upload_preset: 'image_upload',
                })
                return res.url
            }))
            return urls;
        } catch (err) {
            return null
        }
    }