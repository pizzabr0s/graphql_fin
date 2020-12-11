import apolloServer from 'apollo-server'
import { typeDefs } from './models/typeDefs.js'
import { resolvers } from './models/resolvers.js'
const { ApolloServer } = apolloServer



// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
