import { GraphQLServer } from 'graphql-yoga'

//definition
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float

    }
`

//resolvers 
const resolvers = {
    Query: {
        id () {
            return 'abc123'
        },
        name() {
            return 'Canela'
        },
        age() {
            return 12
        },
        employed() {
            return true
        },
        gpa() {
            return null
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("the server is up");
})