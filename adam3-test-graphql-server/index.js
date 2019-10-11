const express = require('express')
const cors = require('cors')
const schema = require('./schema')
const resolvers = require('./resolvers')
const {
    ApolloServer
} = require('apollo-server-express')

const app = express()
app.use(cors());
const port = 3000

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
})

server.applyMiddleware({
    app,
    path: '/graphql'
})

app.listen(port, () => console.log('Server on port 3000'))

/*

*/