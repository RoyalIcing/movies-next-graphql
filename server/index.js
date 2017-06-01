const { graphqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers/hardCoded')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const graphQLHandler = graphqlExpress({
    schema,
    //rootValue: data
})

module.exports = {
    graphQLHandler
}
