const cloudinary = require('../config/cloudinary')

const generateImageURL = async(req,res) => {
    const {file} = req.body;
    cloudinary.uploader.upload(file,(error,result) => {
        if(error) return res.status(400).json(error)
        return res.status(200).json(result)
    })
}
const generateVideoURL = async(req,res) => {
    const {file} = req.body;
    cloudinary.uploader.upload(file,{resource_type:"video"},(error,result) => {
        if(error) return res.status(400).json(error)
        return res.status(200).json(result)
    })
}

module.exports = {generateImageURL,generateVideoURL};


