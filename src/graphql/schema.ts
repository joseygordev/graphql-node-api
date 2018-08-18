import { makeExecutableSchema } from 'graphql-tools'

import { Query } from './query'
import { Mutation } from './mutation'

import { commentTypes } from './resources/comment/comment.schema';
import { postTypes } from './resources/post/post.schema';
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
    commentTypes,
    postTypes,
    userTypes
  ]
})