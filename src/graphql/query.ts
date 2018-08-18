import { userQueries } from './resources/user/user.schema'

const Query = `
  type Query {
    ${userQueries}
  }
`
export {
  Query
}