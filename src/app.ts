import dotenv from 'dotenv'; // eslint-disable-line
dotenv.config(); // eslint-disable-line

import express from 'express'
import cors from 'cors'
import eventRoutes from './routes/event';

const app = express();
const PORT = process.env.PORT || 3350;


// GLOBAL MIDDLEWARES: (called in every request to the server)

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(eventRoutes);



app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
