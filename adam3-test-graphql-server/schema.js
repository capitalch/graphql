const {
    gql
} = require('apollo-server-express')
const schema = gql `
type Query {
    person: String
    contacts: [Contact],
}
type Contact {
        index: Int,
        isActive: Boolean,
        age: Int,
        eyeColor: String,
        name: String,
        gender: String,
        company: String,
        email: String,
        phone: String,
        address: String
    },
`
module.exports = schema;