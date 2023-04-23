import Stripe from "stripe";
import ProductModel from "../mongodb/models/products.js";
import * as dotenv from 'dotenv';

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const createCheckoutSession = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Fetch products from the database
      const products = await ProductModel.find({});
      const productMap = new Map(products.map((product) => [product._id.toString(), product]));

      // Compare the prices in the req.body with the prices in the database
      req.body.forEach((item) => {
        const product = productMap.get(item._id.toString());
        if (product.price !== item.price) {
          throw new Error(`Price mismatch for product ${product._id}`);
        }
      });

      // Create the checkout session
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1Mz1QuGXbcpNJRo9BeSe8VRW' },
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].url;

          return {
            price_data: {
              currency: 'usd',
              product_data: {
                name: item.name,
                images: [img],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}`,
      };

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);

      // Send the checkout session to the client
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
