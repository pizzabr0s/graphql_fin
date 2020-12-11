import apolloServer from 'apollo-server'
const { gql } = apolloServer

// Schema Definition
export const typeDefs = gql`

  type User {
    id: String!
    user: String!
  }

  type Comments {
    id: String!
    user: String!
    responses: String!
    parent: String!
  }

  type Posts {
    id: String!
    user: String!
    topic: String!
    body: String!
    comments: String
  }

  type Query {
    postById(id:String!): [Posts]
    postListByTopic(topic:String!): [Posts]
  }

  type Mutation {
    newPost(id: String!, user: String!, topic: String!, body: String!, comments: String): Posts!
  }


`;