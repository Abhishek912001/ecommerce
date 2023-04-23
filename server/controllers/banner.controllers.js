import BannerModel from "../mongodb/models/banners.js";


export const getBannerData = async (req, res) => {
    try {
        const bannerModel = await BannerModel.find();

        res.status(200).json(bannerModel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};