import dotenv from 'dotenv'; // eslint-disable-line
dotenv.config(); // eslint-disable-line
import { graphqlHTTP } from "express-graphql"
import { buildSchema } from "graphql"

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

// LEARNING GRAPHQL:


// const schema = buildSchema(`
// type Query {
//   hello(searchWords: String!): String
// }

// `)

// const root = {
//   hello: (parent: any, input: any, context: any) => {
//     console.log("PAR: ", parent)
//     console.log("IN: ", input)
//     return 2
//   }
// }

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// )


app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`);
});
