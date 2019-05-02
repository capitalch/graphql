// const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')

app.use(cors());
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);