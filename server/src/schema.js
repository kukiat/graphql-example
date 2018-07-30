const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolver')

const typeDefs = `
  type Review {
    id: ID!
    title: String!
    author: String
    name: String!
    created: String!
    comments: [Comment]
  }
  type Comment {
    id: ID!
    description: String!
    name: String!
    created: String!
  }
  type Query {
    reviews: [Review],
    review(id: ID!): Review
  }
  type Mutation {
    addReview(title: String!, name: String!, author: String): Review
  }
  schema {
    query: Query,
    mutation: Mutation
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })