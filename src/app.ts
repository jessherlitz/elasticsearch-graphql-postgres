import dotenv from 'dotenv'; // eslint-disable-line
dotenv.config(); // eslint-disable-line
// import { graphqlHTTP } from "express-graphql"
// import { buildSchema } from "graphql"

import express from 'express'
import cors from 'cors'
// import { testing } from './controllers/eventController';
import eventRoutes from './routes/event';

const app = express();
const PORT = process.env.PORT || 3350;


// // LEARNING GRAPHQL:

// const schema = buildSchema(`
//   type Query {
//     hello: String,

//   }
// `)

// const root = {
//   hello: () => {
//     return "Hello world!"
//   },
// }

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// )

// app.use(
//   "/testing",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: testing,
//     graphiql: true,
//   })
// )

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
