import mongoose from 'mongoose';


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: true,
        maxlength: 32
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    price: {
        type: Number,
        trim:true,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
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
    ]
});


const ProductModel = mongoose.model("Product", productSchema);

export default ProductModel;