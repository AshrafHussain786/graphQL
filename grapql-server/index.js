const { ApolloServer, gql } = require('apollo-server');

const students = [
    {
        "id": 1,
        "name": "Alpha",
        "email": "alpha@gmail.com",
        "age": 21
    },
    {
        "id": 2,
        "name": "Beta",
        "email": "beta@gmail.com",
        "age": 22
    },
    {        
       "id": 3,
        "name": "Gama",
        "email": "gama@gmail.com",
        "age": 23
    }
]

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Student {
    id: Int
    name: String
    email: String
    age: Int
  }
  
  type Query {
    students: [Student]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      students: () => students,
    },
  };

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});