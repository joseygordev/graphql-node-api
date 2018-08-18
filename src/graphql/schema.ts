import { makeExecutableSchema } from 'graphql-tools'

import { Query } from './query'
import { Mutation } from './mutation'

import { userTypes } from './resources/user/user.schema';

const SchemaDefition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefition,
    Query,
    Mutation,
    userTypes
  ]
})