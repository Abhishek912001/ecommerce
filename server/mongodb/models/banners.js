import mongoose from 'mongoose';


const bannerSchema = new mongoose.Schema({
    image: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true
          }
        }
      ],
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    buttonText: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    smallText: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    midText: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    largeText1: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    largeText2: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    discount: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    saleTime: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    }
});


const BannerModel = mongoose.model("banners", bannerSchema);

export default BannerModel;