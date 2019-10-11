const express = require('express')
const cors = require('cors')
const { ApolloServer, gql } = require('apollo-server-express')
const fs = require('fs')

const app = express()
app.use(cors());
const port = 3000

const schema = gql`
type Query{
    person: String!
}`

const resolvers = {
    Query: {
        person: () => 'Sushant'
    }
}

app.get('/', (req, res) => {
    res.json("Hello world")
})

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(port, () => console.log('Server on port 3000'))