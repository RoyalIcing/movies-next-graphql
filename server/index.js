import { graphqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './typeDefs'
import resolvers from './resolvers/hardCoded'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export const graphQLHandler = graphqlExpress({
    schema,
    //rootValue: data
})
