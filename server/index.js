import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/product.routes.js';
import stripeRoutes from './routes/stripe.routes.js';
import bannerRoutes from './routes/banner.routes.js';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));

// routes
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/banners', bannerRoutes);
app.use('/api/v1/stripe', stripeRoutes);
app.get('/api/v1/stripe-publishable-key', (req, res) => {
    res.send(process.env.STRIPE_PUBLISHABLE_KEY);
  });

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
});

const startServer = async () => {
    try {
        // connect to the database...
        connectDB(process.env.MONGODB_URL);

        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
    } catch (error) {
        console.log(error);
    }
}


startServer();
