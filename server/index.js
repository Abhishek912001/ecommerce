import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/products.js';
import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use('/products', productRoutes);

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
