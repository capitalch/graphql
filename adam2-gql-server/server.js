// const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
// const db = require('./db');

const port = process.env.PORT || 9000;
const app = express();

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql', { encoding: 'utf-8' })
const resolvers = require('./resolvers')

const { ApolloServer } = require('apollo-server-express');
const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
    engine: false
 });
app.use(cors());

apollo.applyMiddleware({
    app,
 });


// const { makeExecutableSchema } = require('graphql-tools')
// const schema = makeExecutableSchema({ typeDefs, resolvers })


// const apoloServerExpress = require('apollo-server-express')
// const { graphiqlExpress, graphqlExpress } = require('apollo-server-express')
// app.use('/graphql', graphqlExpress({ schema }))
// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(
    port, () => console.info(
        `Server started on port ${port}`
    )
);