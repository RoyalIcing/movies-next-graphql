import ApolloClient, { createNetworkInterface } from 'apollo-client';
import 'isomorphic-unfetch'

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  })
})