import { GraphQLServer } from 'graphql-yoga'

//definition
const typeDefs = `
    type Query {
        greeting(name: String): String!
        me: User!
        grades: [Int!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

//resolvers 
const resolvers = {
    Query: {
        greeting(parent, args, ctx, info) {
            if(args.name) {
                return `hello ${args.name}`
            }
            return 'hello'
            
        },
        me() {
            return {
                id: '12oo0i',
                name: 'Pedro',
                email: 'peter@hgma.com',
                age: 12
            }
        },
        grades(parent, args, ctx, info) {
            return [99, 23, 56, 78]
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